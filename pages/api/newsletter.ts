import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405);
  }

  if (!req.body.email) {
    res.status(400);
  }

  const mailjet = axios.create({
    baseURL: "https://api.mailjet.com/v3/REST",
    headers: { "Content-Type": "application/json" },
    auth: {
      username: process.env.MAILJET_API_KEY!,
      password: process.env.MAILJET_SECRET_KEY!,
    },
  });

  let clientId = "";
  mailjet
    .post("/contact", req.body.email)
    .then((r) => {
      clientId = r.data.Data[0].ID;
    })
    .catch((e) => {
      console.error("Error", e);
      res.status(500);
    });

  mailjet
    .post("/contact/listrecipient", {
      ContactID: clientId,
      ListID: "12633",
    })
    .catch((e) => {
      console.error("Error", e);
      res.status(500);
    });

  res.status(200);
};

export default withSentry(handler);
