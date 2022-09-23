import { GetStaticPaths, GetStaticProps } from "next";
import { getSdk, Locale, PostQuery, PostsPathsQuery } from "../../interfaces";
import { client } from "../../lib/graphCmsClient";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
import BASE_URL from "../../lib/baseUrl";
import { ArticleJsonLd, NextSeo } from "next-seo";
import Layout from "../../components/Layout";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  post: PostQuery["post"];
  similarPosts: PostQuery["post"][];
};

const BlogPost = ({ post, similarPosts }: Props) => {
  const router = useRouter();
  const t = useTranslations("Post");

  return (
    <Layout bgColor="bg-white" textColor="text-black" hamburgerColor="black">
      <NextSeo
        title={post?.title}
        description={post?.excerpt}
        openGraph={{
          title: post?.title,
          description: post?.excerpt,
          type: "article",
          article: {
            publishedTime: post?.createdAt,
            modifiedTime: post?.updatedAt,
            authors: [post?.createdBy?.name || ""],
            tags: post?.tags,
          },
          images: [
            {
              url: post?.coverImage.url!,
              width: 600,
              height: 400,
              alt: `${post?.title} ${
                router.locale === "tr" ? "Cover Image" : "Kapak Görseli"
              }`,
            },
          ],
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={`${BASE_URL}/blog/${post?.id}`}
        title={post?.title!}
        images={[post?.coverImage.url!]}
        datePublished={post?.createdAt}
        dateModified={post?.updatedAt}
        authorName={post?.createdBy?.name || ""}
        description={post?.excerpt!}
      />
      <div className="flex justify-center w-full mb-24">
        <div className="flex flex-col">
          <Image
            alt={`${post?.title} ${
              router.locale === "tr" ? "Cover Image" : "Kapak Görseli"
            }`}
            src={post?.coverImage.url || `${BASE_URL}/placeholder.jpg`}
            height={720}
            width={1600}
            className="mx-auto rounded-xl -z-10"
          />
          <div className="z-10 w-11/12 max-w-7xl p-8 md:p-24 mx-auto -mt-16 md:-mt-48 bg-white shadow-xl bg-opacity-90 rounded-xl backdrop-filter backdrop-blur-[80px] ">
            <div className="flex flex-row flex-wrap md:-mt-12 md:flex-nowrap">
              <Image
                className="rounded-full"
                src={post?.author?.picture?.url || `${BASE_URL}/logo.svg`}
                alt={
                  post?.author?.name! + router.locale === "tr"
                    ? "'s profile picture"
                    : "'nın profil görseli"
                }
                width={80}
                height={80}
              />
              <div className="flex flex-col justify-center ml-3 text-xs text-left text-black md:text-sm">
                <div>{post?.author?.name}</div>
                <div className="text-xs text-gray-600">
                  {new Date(post?.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="md:ml-auto">
                <div className="flex justify-center mt-4 space-x-1 md:mt-8 lg:space-x-2">
                  <FacebookShareButton url={BASE_URL + router.asPath}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="2x"
                      className="text-primary-500"
                    />
                  </FacebookShareButton>
                  <TwitterShareButton url={BASE_URL + router.asPath}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="2x"
                      className="text-primary-500"
                    />
                  </TwitterShareButton>
                  <LinkedinShareButton url={BASE_URL + router.asPath}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      className="text-primary-500"
                    />
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
            <h1 className="my-10 text-2xl font-bold text-black md:text-4xl">
              {post?.title}
            </h1>
            <h2 className="mb-6 text-base font-bold text-gray-600 md:text-xl">
              {post?.excerpt}
            </h2>
            <div className="prose lg:prose-xl">
              {post?.content?.raw && (
                <RichText
                  content={post.content.raw}
                  renderers={{
                    blockquote: ({ children }) => (
                      <div className="">
                        {/* TODO add custom serif font to tailwind config and import it here*/}
                        {/* for  custom blockquote styling */}
                        <div className="italic font-extrabold text-black">
                          {children}
                        </div>
                        {/* TODO add simple quotation mark svg */}
                      </div>
                    ),
                    p: ({ children }) => (
                      <>
                        <br />
                        <p className="">{children}</p>
                      </>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold">{children}</h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-lg font-bold">{children}</h4>
                    ),
                    bold: ({ children }) => <strong>{children}</strong>,
                  }}
                />
              )}
            </div>
          </div>
          {similarPosts && (
            <>
              <h1 className="mx-auto mt-24 text-xl font-semibold text-gray-700 md:text-4xl">
                {t("similarPosts")}
              </h1>
              <div className="mx-auto text-base text-gray-400">
                {t("similarPostsSubtitle")}
              </div>
              <div className="flex flex-row flex-wrap justify-around w-[90vw] mt-16 self-center">
                {similarPosts &&
                  similarPosts.map((post) => (
                    <div
                      key={post?.id}
                      className="flex flex-col max-w-lg mt-8 shadow-xl rounded-xl"
                    >
                      <Image
                        src={post?.coverImage.url!}
                        alt={`${
                          router.locale === "tr"
                            ? "Kapak görseli"
                            : "Cover image of suggested article:"
                        } ${post?.title}`}
                        width={500}
                        height={300}
                        className="rounded-t-xl"
                      />
                      <div className="flex flex-col justify-between p-3 md:p-6">
                        <div className="flex flex-row">
                          <div className="text-sm text-gray-400">
                            {post?.createdBy?.name}, {post?.createdAt}
                          </div>
                          <div className="ml-auto">
                            {post?.tags.slice(0, 1).map((tag) => (
                              <div
                                key={tag}
                                className={`hidden md:block text-white text-xs rounded-xl md:p-1.5 md:mx-1 uppercase md:max-h-8 max-h-6 p-0.5 ${"bg-purple-500"}`}
                              >
                                {tag}
                              </div>
                            ))}
                          </div>
                        </div>
                        <h1 className="text-base font-semibold">
                          {post?.title}
                        </h1>
                        <div className="mt-4 text-xs text-gray-800">
                          {post?.excerpt}
                        </div>
                        <Link passHref href={`/blog/${post?.id}`}>
                          <a className="w-24 p-3 mt-6 text-xs text-center text-white rounded-full bg-primary-500">
                            {t("readMore")}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const sdk = getSdk(client);

  const { posts: postPaths } = await sdk.PostsPaths({
    locale: locale as Locale,
  });
  const id = postPaths.find((path) => path.slug === params?.slug)?.id!;
  const { post } = await sdk.Post({
    id: id!,
  });
  const { posts } = await sdk.SimilarPosts({
    currentPost: id || "",
    tag: [post?.tags[0] || ""],
  });
  const similarPosts = posts.slice(0, 3);

  return {
    props: {
      post,
      similarPosts,
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const sdk = getSdk(client);
  let posts: PostsPathsQuery["posts"] = [];
  for (const locale of locales!) {
    const { posts: data } = await sdk.PostsPaths({
      locale: locale as Locale,
    });
    posts = [...posts, ...data];
  }

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post?.slug,
      },
      locale: post?.locale,
    })),
    fallback: false,
  };
};

export default BlogPost;
