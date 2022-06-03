import axios from "axios";
import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { useCallback, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "../components/Layout";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const t = useTranslations("Contact");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const token = await handleReCaptchaVerify();
    if (token) {
      try {
        await axios.post("/api/contact", data);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    return await executeRecaptcha("onSubmit");
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <Layout bgColor="" textColor="text-black" hamburgerColor="black">
      <NextSeo title={t("title")} description={t("description")} />
      <div
        style={{
          background: "#12ABBB",
          backgroundImage: `url("/contact.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "fit",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-between h-screen subpixel-antialiased"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative md:w-1/3 p-3 md:p-6 bg-white md:left-[10%] rounded-xl mt-24 flex flex-col space-y-4"
        >
          <h1 className="font-bold text-black text-md md:text-2xl">
            {t("description")}
          </h1>
          <div className="flex flex-row space-x-1 md:space-x-4">
            <input
              type="text"
              {...register("name", { required: true })}
              className="block w-1/2 p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
              placeholder={t("name")}
            />
            <input
              type="email"
              {...register("email", { required: true })}
              className="block w-1/2 p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
              placeholder={t("email")}
            />
          </div>{" "}
          <textarea
            {...register("message", { required: true })}
            rows={5}
            className="block w-full h-full p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
            placeholder={t("yourMessage")}
          />
          <button
            className="p-3 text-white rounded-3xl bg-primary-500"
            type="submit"
          >
            {t("sendMessage")}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const { data } = await axios.post("https://api.mailjet.com/v3.1/send", {
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
          TextPart: `You have a new contact form submission. Please check the details below. \n\nName: ${params?.name} \nEmail: ${params?.email} \nMessage: ${params?.message}`,
          To: [
            {
              Email: "info@3hhareketi.org",
            },
          ],
        },
      ],
    },
  });

  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

export default Contact;
