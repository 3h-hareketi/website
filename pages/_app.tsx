import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GTMProvider state={{ id: process.env.NEXT_PUBLIC_GTM! }}>
      <NextIntlProvider
        messages={pageProps.messages}
        timeZone="Europe/Istanbul"
      >
        <Component {...pageProps} />
      </NextIntlProvider>
    </GTMProvider>
  );
}

export default MyApp;
