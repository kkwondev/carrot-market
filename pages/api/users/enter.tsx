import twilio from "twilio";
import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

mail.setApiKey(process.env.SENDGIRD_API_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  if (!user) return res.status(400).json({ result: false });

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.PHONE_NUMBER!,
      body: `로그인 접속 비밀번호 입니다. ${payload}`,
    });
  } else if (email) {
    const email = await mail.send({
      from: "kkwondev@gmail.com",
      to: "kkwondev@gmail.com",
      subject: "인증 메일입니다.",
      text: `로그인 접속 비밀번호 입니다. ${payload}`,
      html: `<strong>로그인 접속 비밀번호 입니다. ${payload}</strong>`,
    });

    console.log(email);
  }
  return res.status(200).json({ result: true });
}

export default withHandler("POST", handler);
