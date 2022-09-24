import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const token = await client.token.create({
    data: {
      payload: "1234",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "Anonymous",
            ...payload,
          },
        },
      },
    },
  });
  console.log(token);

  return res.status(200).json({ result: true, data: token });
}

export default withHandler("POST", handler);
