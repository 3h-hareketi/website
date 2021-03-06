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
      textColor="text-primary-50"
      logo="alt"
      hamburgerColor="white"
    >
      <NextSeo description={t("buttonText")} />
      <div className="mx-auto md:ml-auto md:mr-0 w-1/2 pb-6 md:pb-16 h-[50vh] flex">
        <div className="my-auto">
          {" "}
          <h1 className="text-4xl font-extrabold md:text-6xl text-white">
            {t("title1")}
          </h1>
          <h3 className="my-4 text-white">{t("subtitle1")}</h3>
          <button className="p-3 bg-white rounded-full shadow-lg uppercase">
            <Link href="/contact" passHref>
              <a> {t("buttonText")}</a>
            </Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-slate-200 px-4 md:px-16 lg:px-32 md:py-16 lg:py-32 py-4">
        {" "}
        <h1 className="mx-auto text-2xl font-extrabold md:text-4xl text-primary-400">
          {t("textHeader")}
        </h1>{" "}
        <h3 className="my-4 text-black text-center">{t("paragraph")}</h3>
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
        <div className="mx-auto md:mr-auto md:ml-0 w-1/2 my-auto md:p-16 ">
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
