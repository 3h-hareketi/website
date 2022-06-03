import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
};

const Newsletter = () => {
  const t = useTranslations("Newsletter");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const token = await handleReCaptchaVerify();
    if (token) {
      try {
        const res = await axios.post("", data);
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

    return await executeRecaptcha("handleSubmit");
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <div className="w-full p-3 mx-auto my-24 bg-white rounded-lg shadow-md md:max-w-2xl md:p-8">
      <div className="flex flex-row md:space-x-10">
        <Image
          src={"/mailbox.svg"}
          alt="Mailbox"
          width={350}
          height={350}
          className="mt-auto"
        />
        <div className="flex-col space-y-4">
          <h3 className="text-3xl md:text-5xl">{t("title")}</h3>
          <div className="text-lg font-light text-gray-400 md:text-sm">
            {t("subtitle")}
          </div>
          {!isSubmitted && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="block w-full p-3 text-sm text-gray-600 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 "
                  placeholder={t("emailPlaceholder")}
                  disabled={isSubmitted}
                />
              </div>
              <button
                className="p-3 text-white rounded-3xl bg-primary-500"
                disabled={isSubmitted}
                type="submit"
              >
                Subscribe
              </button>
            </form>
          )}
          {isSubmitting && (
            <div className="text-lg font-light text-gray-400 md:text-sm">
              Submitting
            </div>
          )}
          {isSubmitSuccessful && (
            <div className="text-lg font-light text-gray-400 md:text-sm">
              Thanks for subscribing!
            </div>
          )}
          {errors && (
            <div className="text-lg font-light text-gray-400 md:text-sm">
              You&apos;re already subscribed to our newsletter!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
