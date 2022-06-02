import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Newsletter = () => {
  const t = useTranslations("Newsletter");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "fail"
  >("idle");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    return await executeRecaptcha("handleSubmit");
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    const token = await handleReCaptchaVerify();
    if (token) {
      try {
        const res = await axios.post("/api/newsletter", {
          email: email,
        });

        if (res.status === 200) {
          setEmail("");
          setFormState("success");
        } else {
          setFormState("fail");
        }
      } catch (e) {
        setFormState("fail");
        console.error(e);
      }
    }
  };

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
          {formState === "idle" && (
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full p-3 text-sm text-gray-600 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 "
                  placeholder={t("emailPlaceholder")}
                  onChange={(v) => setEmail(v.target.value)}
                  disabled={formState !== "idle" ? true : false}
                />
              </div>
              <button
                className="p-3 text-white rounded-3xl bg-primary-500"
                disabled={formState !== "idle" ? true : false}
                type="submit"
              >
                Subscribe
              </button>
            </form>
          )}
          {formState === "submitting" && (
            <div className="text-lg font-light text-gray-400 md:text-sm">
              Submitting
            </div>
          )}
          {formState === "success" && (
            <div className="text-lg font-light text-gray-400 md:text-sm">
              Thanks for subscribing!
            </div>
          )}
          {formState === "fail" && (
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
