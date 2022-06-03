import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (req.method !== "POST") {
    res.status(405).end();
  }

  if (!email) {
    res.status(400).end();
  }

  const mailjet = axios.create({
    baseURL: "https://api.mailjet.com/v3/REST",
    headers: { "Content-Type": "application/json" },
    auth: {
      username: process.env.MAILJET_API_KEY!,
      password: process.env.MAILJET_SECRET_KEY!,
    },
  });

  let clientId = 0;
  try {
    const contactData = await mailjet.post("/contact", {
      Email: email,
    });
    clientId = contactData.data.Data[0]["ID"];
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }

  try {
    await mailjet.post("/listrecipient", {
      ContactID: clientId,
      ListID: 12633,
    });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }

  res.status(200).end();
};

export default withSentry(handler);
