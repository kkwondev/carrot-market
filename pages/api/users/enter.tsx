import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ result: true });
}

export default withHandler("POST", handler);
