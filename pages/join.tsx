import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Link from "next/link";

const JoinUs = () => {
  const t = useTranslations("Join Us");

  return (
    <Layout
      bgColor=""
      textColor="text-gray-600"
      logo="alt"
      hamburgerColor="white"
    >
      <NextSeo description={t("buttonText")} />
      <div className="flex px-2 pb-6 mx-auto my-32 xl:w-1/2 md:ml-auto md:mr-0 md:pb-16 drop-shadow-lg shadow-black">
        <div className="my-auto">
          <h1 className="relative text-4xl font-extrabold text-white md:text-6xl">
            {t("title1")}
          </h1>
          <h3 className="relative my-4 text-white">{t("subtitle1")}</h3>
          <button className="relative p-3 uppercase bg-white rounded-full shadow-lg">
            <Link
              href="https://docs.google.com/forms/d/1EJs1azQ4jbtF7MwaE_o042_ebgezTYhaqY7HEK8wfXc/viewform?edit_requested=true"
              passHref
            >
              <a> {t("buttonText")}</a>
            </Link>
          </button>
        </div>
      </div>
      <div className="relative flex flex-col px-4 py-16 bg-slate-200 md:px-16 lg:px-32 lg:py-32">
        <h1 className="mx-auto text-2xl font-extrabold md:text-4xl text-primary-400">
          {t("textHeader")}
        </h1>
        <h3 className="my-4 text-center text-black">{t("paragraph")}</h3>
      </div>
      <div
        className="w-screen h-[50vh] flex flex-col bg-white"
        style={{
          backgroundImage: `url("/joinus2.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "fit",
          backgroundPosition: "right",
        }}
      >
        <div className="w-1/2 mx-auto my-auto md:mr-auto md:ml-0 md:p-16 ">
          <h1 className="text-3xl font-extrabold md:text-5xl text-primary-400">
            {t("title2")}
          </h1>
          <h3 className="my-4 text-black"> {t("subtitle2")}</h3>
          <h3 className="my-4 text-primary-400"> {t("contactMail")}</h3>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

export default JoinUs;
