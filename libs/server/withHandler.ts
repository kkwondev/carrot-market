import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  result: boolean;
  [key: string]: any;
}

export default function withHandler(
  method: "GET" | "POST" | "DELETE",
  handler: NextApiHandler
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      res.status(405).end();
    }
    try {
      await handler(req, res);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        res.status(500).json({ err: err.message });
      } else {
        res.status(500).json({ err: "Internal Server Error" });
      }
    }
  };
}
