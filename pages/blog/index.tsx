import { Tab } from "@headlessui/react";
import { parseISO } from "date-fns";
import { GetStaticProps } from "next";
import { useIntl, useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getSdk, Locale, PostsQuery } from "../../interfaces";
import classNames from "../../lib/classNames";
import { client } from "../../lib/graphCmsClient";

type Props = {
  posts: PostsQuery["posts"];
};

const Blog = ({ posts }: Props) => {
  const t = useTranslations("Blog");
  const intl = useIntl();
  const router = useRouter();

  const highlightedPost = posts.filter((post) =>
    post.tags.includes(router.locale === "tr" ? "Seçili" : "Highlighted")
  )[0];

  const uniqueTags: string[] = [router.locale === "tr" ? "Tümü" : "All"];
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });

  function filterPostsByTag(tag: string) {
    if (tag !== ("Tümü" || "All")) {
      return posts.filter((post) => post.tags.includes(tag));
    }
    return posts;
  }

  return (
    <Layout
      bgColor="bg-white backdrop-filter backdrop-blur-md bg-opacity-60"
      textColor="text-black"
      hamburgerColor="black"
    >
      <NextSeo title={t("title")} description={t("description")} />
      <div className="bg-gray-200">
        {highlightedPost && (
          <div className="relative">
            <div
              className="w-full md:h-[60vh] h-screen -translate-y-1/3"
              style={{
                backgroundImage: `url("${highlightedPost.coverImage.url}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute left-0 right-0 flex flex-row m-auto md:space-x-6 top-1/2 md:w-5/6">
                <div className="p-4 overflow-visible translate-y-1/2 shadow-xl md:translate-y-0 md:overflow-y-hidden lg:p-8 md:w-2/3 rounded-xl bg-primary-500">
                  <div className="flex flex-col text-left">
                    <div className="text-sm font-light text-gray-300 uppercase md:text-base">
                      {highlightedPost.tags.join(", ")}
                    </div>
                    <h1 className="mt-2 text-xl font-bold text-white md:w-full md:mt-10 md:text-2xl lg:text-4xl">
                      {highlightedPost.title}
                    </h1>
                    <p className="mt-6 text-sm text-gray-300">
                      {highlightedPost.excerpt}
                    </p>
                    <Link href={`/blog/${highlightedPost.id}`}>
                      <a className="p-3 mt-8 font-bold text-center text-black bg-white md:mt-16 w-36 rounded-3xl">
                        {t("readMore")}
                      </a>
                    </Link>
                  </div>
                </div>
                {posts.slice(1, 3).map((post) => (
                  <div
                    key={post.id}
                    className="hidden h-full p-10 mt-auto translate-y-1/2 bg-gray-700 shadow-xl md:block md:w-1/3 h-1/3 rounded-xl md:translate-y-0"
                  >
                    <div className="flex flex-col space-y-5 text-left">
                      <h1 className="text-xl font-bold text-white">
                        {post.title}
                      </h1>
                      <p className="text-sm text-gray-300">{post.excerpt}</p>
                      <Link href={`${post.id}`}>
                        <a
                          href="#"
                          className="p-3 font-bold text-center text-black bg-white w-36 rounded-3xl"
                        >
                          {t("readMore")}
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="mx-auto">
          <Tab.Group>
            <Tab.List className="flex flex-row p-1 mx-auto mb-6 overflow-scroll bg-white shadow-md md:overflow-auto md:justify-between md:max-w-5xl md:space-x-1 md:rounded-3xl">
              {uniqueTags.map((tag) => (
                <Tab
                  key={tag}
                  className={({ selected }) =>
                    classNames(
                      "w-full mx-3 md:mx-0 py-2.5 text-sm leading-5 font-medium rounded-3xl",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                      selected
                        ? "bg-primary-500 shadow text-white"
                        : "text-black hover:text-primary-200"
                    )
                  }
                >
                  {tag}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="w-11/12 mx-auto mt-2">
              {uniqueTags.map((tag) => (
                <Tab.Panel
                  key={tag}
                  className={classNames(
                    "rounded-xl p-3",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60 flex flex-col justify-center space-y-5"
                  )}
                >
                  {filterPostsByTag(tag).map((post) => (
                    <div
                      key={post.id}
                      className="flex flex-row flex-wrap justify-center pb-4 space-x-4 bg-white md:bg-inherit rounded-xl"
                    >
                      <Image
                        className="rounded-t-xl md:rounded-xl"
                        src={post.coverImage.url}
                        alt={`${post.title} Cover Image`}
                        //   layout="responsive"
                        height={240}
                        width={480}
                      />
                      <div className="flex flex-col mr-auto space-y-5 md:w-1/3">
                        <div className="mt-2 text-sm font-light text-gray-400 md:mt-0">
                          {intl.formatDateTime(parseISO(post.createdAt), {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                          })}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <h1 className="text-xl font-bold cursor-pointer">
                            {post.title}
                          </h1>
                        </Link>
                        <div className="text-base font-light text-gray-600">
                          {post.excerpt}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <button className="w-40 p-3 text-center text-white text-md rounded-3xl bg-primary-500">
                            {t("readMore")}
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}{" "}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {
  const sdk = getSdk(client);
  const { posts } = await sdk.Posts({
    locale: locale as Locale,
    fallbackLocale: locales?.filter((l) => l !== locale)[0] as Locale,
  });

  return {
    props: {
      posts,
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};

export default Blog;
