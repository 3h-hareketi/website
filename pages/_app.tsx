import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { NextIntlProvider } from "next-intl";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";

function MyApp({ Component, router, pageProps }: AppProps) {
  return (
    <GTMProvider state={{ id: process.env.NEXT_PUBLIC_GTM! }}>
      <NextIntlProvider
        messages={pageProps.messages}
        timeZone="Europe/Istanbul"
      >
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
          useEnterprise={true}
          language={router.locale}
        >
          <Component {...pageProps} />
        </GoogleReCaptchaProvider>
      </NextIntlProvider>
    </GTMProvider>
  );
}

export default MyApp;
