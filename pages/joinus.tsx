import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Image from "next/image";
const JoinUs = () => {
  const t = useTranslations("Home");

  return (
    <Layout
      bgColor=""
      textColor="text-primary-50"
      logo="alt"
      hamburgerColor="white"
    >
      <NextSeo description={t("description")} />
      <div
        className="w-screen h-[50vh] flex flex-col"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #1BC3D5 2.1%, #1696BE 100%), #12ABBB",
          backgroundImage: `url("/joinus.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "fit",
          backgroundPosition: "left",
        }}
      >
        <div className="ml-auto w-1/2 my-auto">
          <h1 className="text-4xl font-extrabold md:text-6xl text-white">
            Are you young and share the values of liberalism?
          </h1>
          <h3 className="my-4 text-white">
            Great! You are what we are looking for.
          </h3>
          <button className="p-3 bg-white rounded-full shadow-lg uppercase">
            Join us now!
          </button>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  //   const sdk = getSdk(client);

  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

export default JoinUs;
