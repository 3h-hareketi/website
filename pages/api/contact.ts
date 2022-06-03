import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  if (req.method !== "POST") {
    res.status(405);
  }

  if (!email || !name || !message) {
    res.status(400);
  }

  if (req.method === "POST") {
    try {
      await axios.post("https://api.mailjet.com/v3.1/send", {
        auth: {
          username: process.env.MAILJET_API_KEY!,
          password: process.env.MAILJET_SECRET_KEY!,
        },
        data: {
          // SandboxMode: "true",
          Messages: [
            {
              From: [
                {
                  Email: "noreply@3hhareketi.org",
                  Name: "3H Website",
                },
              ],
              Subject: "New Contact Form Submission",
              TextPart: `You have a new contact form submission. Please check the details below. \n\nName: ${name} \nEmail: ${email} \nMessage: ${message}`,
              To: [
                {
                  Email: "info@3hhareketi.org",
                },
              ],
            },
          ],
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  res.status(200).end();
};

export default withSentry(handler);
