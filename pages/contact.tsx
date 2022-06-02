import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

const Contact = () => {
  const t = useTranslations("Contact");

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
        <div className="relative md:w-1/3 p-3 md:p-6 bg-white md:left-[10%] rounded-xl mt-24 flex flex-col space-y-4">
          <h1 className="font-bold text-black text-md md:text-2xl">
            {t("description")}
          </h1>
          <div className="flex flex-row space-x-1 md:space-x-4">
            <input
              type="text"
              id="name"
              name="name"
              className="block w-1/2 p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
              placeholder={t("name")}
            />
            <input
              type="email"
              id="e-mail"
              name="email"
              className="block w-1/2 p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
              placeholder={t("email")}
            />
          </div>{" "}
          <textarea
            id="message"
            name="message"
            rows={5}
            className="block w-full h-full p-1 text-sm text-gray-600 border border-gray-300 rounded-lg md:p-3 focus:ring-primary-500 focus:border-primary-500 "
            placeholder={t("yourMessage")}
          />
          <button className="p-3 text-white rounded-3xl bg-primary-500">
            {t("sendMessage")}
          </button>
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

export default Contact;
