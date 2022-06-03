import { RichText } from "@graphcms/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { getSdk, Locale, PageQuery, PagesQuery } from "../interfaces";
import { client } from "../lib/graphCmsClient";

type Props = {
  page: PageQuery["pages"][0];
};

const Page = ({ page }: Props) => {
  return (
    <Layout bgColor="bg-white" textColor="text-black" hamburgerColor="black">
      <NextSeo title={page.title} />
      <h1 className="font-bold">{page.title}</h1>
      <div className="flex flex-col bg-gray-100">
        <RichText content={page.content?.json} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const sdk = getSdk(client);
  const { pages } = await sdk.Page({
    locale: locale as Locale,
    slug: params?.slug! as string,
  });

  return {
    props: {
      page: pages[0],
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const sdk = getSdk(client);
  let pageSlugs: PagesQuery["pages"] = [];
  for (const locale of locales!) {
    const { pages } = await sdk.Pages({ locale: locale as Locale });
    pageSlugs = [...pageSlugs, ...pages];
  }

  return {
    paths: pageSlugs.map((page) => ({
      params: { slug: page.slug },
      locale: page.locale,
    })),
    fallback: false,
  };
};

export default Page;
