import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
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
      <div className="mx-auto md:ml-auto md:mr-0 w-1/2 pb-6 md:pb-16 h-[50vh] flex">
        <div className="my-auto">
          {" "}
          <h1 className="text-4xl font-extrabold md:text-6xl text-white">
            Are you young and share the values of liberalism?
          </h1>
          <h3 className="my-4 text-white">
            Great! You are what we are looking for.
          </h3>
          <button className="p-3 bg-white rounded-full shadow-lg uppercase">
            <Link href="/contact" passHref>
              <a>Join us Now!</a>
            </Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-slate-200 px-4 md:px-16 lg:px-32 md:py-16 lg:py-32 py-4">
        {" "}
        <h1 className="mx-auto text-2xl font-extrabold md:text-4xl text-primary-400">
          What is the newcomers program?
        </h1>{" "}
        <h3 className="my-4 text-black text-center">
          In the newcomers program, you will get to know more about liberalism,
          discuss your ideas with likeminded people, upskill yourself and become
          part of an international liberal network. We offer mentoring, free
          classes on various topics, priority attendance to our events,
          exclusive events tailored to your needs and desires, professional
          experience and many chances to take part in international events both
          in Turkey and abroad. You can also demonstrate your skills and have a
          safe space to practice your writing, editing, presentation and other
          skills. After you successfully complete the program and become a
          newcomer alumni, you will have the chance to be an official member and
          contribute even more!{" "}
        </h3>
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
            Dont hesitate, join the family!
          </h1>
          <h3 className="my-4 text-black">For more information and queries:</h3>
          <h3 className="my-4 text-primary-400">atabirol@3hhareketi.org </h3>
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
