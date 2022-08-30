import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import { FeaturedPostsQuery, getSdk } from "../interfaces";
import { client } from "../lib/graphCmsClient";
import Link from "next/link";

type Props = {
  posts: FeaturedPostsQuery["posts"];
};

const Home = ({ posts }: Props) => {
  const t = useTranslations("Home");

  return (
    <Layout
      bgColor=""
      textColor="text-primary-50"
      logo="alt"
      hamburgerColor="white"
    >
      <NextSeo description={t("description")} />
      <div className="flex flex-col items-center">
        <div className="h-screen px-2 mt-16 text-white max-w-7xl">
          <h1 className="text-4xl font-extrabold md:text-8xl drop-shadow-lg shadow-black">
            {t("heroTitle1")} <br /> {t("heroTitle2")}
          </h1>
          <div className="max-w-2xl mt-10 drop-shadow-lg shadow-black">
            {t("heroSubtitle")}
          </div>
          <Link href="/blog">
            <button className="relative p-2 mt-4 font-medium text-black uppercase bg-white shadow-md w-36 rounded-2xl hover:text-primary-500 hover:shadow-lg">
              {t("heroButton")}
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full space-y-12 text-center bg-white">
          <h1 className="text-3xl font-semibold">{t("blogPosts")}</h1>{" "}
          <div className="max-w-2xl mx-auto font-light text-gray-600">
            {t("blogPostsDescription")}
          </div>
          <div className="mx-4 max-w-7xl">
            {posts.map((post, postIdx) => (
              <PostCard key={post.id} blog={post} index={postIdx} />
            ))}
          </div>
        </div>
        <Newsletter />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const sdk = getSdk(client);
  const { posts } =
    locale === "en" ? await sdk.FeaturedPosts() : await sdk.OneCikanPosts();

  return {
    props: {
      posts,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

export default Home;
