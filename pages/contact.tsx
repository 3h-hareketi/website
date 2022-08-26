import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import csrf from "csrf";
import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "../components/Layout";

type Inputs = {
  csrfToken: string;
  name: string;
  email: string;
  message: string;
};

type Props = {
  csrfToken: string;
};

const Contact = ({ csrfToken }: Props) => {
  const t = useTranslations("Contact");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
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
        className="relative flex flex-col justify-between h-screen"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative md:w-1/3 p-3 md:p-6 bg-white md:left-[10%] rounded-xl mt-24 flex flex-col space-y-4"
        >
          <input
            type="hidden"
            value={csrfToken}
            {...register("csrfToken", { required: true })}
          />
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
            className={`p-3 text-white rounded-3xl bg-primary-500 ${
              isSubmitted && "opacity-50"
            }`}
            type="submit"
            disabled={isSubmitted}
          >
            {!isSubmitted ? (
              t("sendMessage")
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const tokens = new csrf();

  return {
    props: {
      csrfToken: await tokens.create(process.env.SECRET_KEY!),
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

export default Contact;
