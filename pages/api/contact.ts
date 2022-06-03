import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import csrf from "csrf";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const tokens = new csrf();
  const { name, email, message, csrfToken } = req.body;

  if (req.method !== "POST") {
    res.status(405).end();
  }

  if (!email || !name || !message || !csrfToken) {
    res.status(400).end();
  }

  if (!tokens.verify(process.env.SECRET_KEY!, csrfToken)) {
    res.status(403).end();
  }

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

  res.status(200).end();
};

export default withSentry(handler);
