import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GOOGLE_RECAPTCHA_KEY}
      useEnterprise={true}
      language={router.locale}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
