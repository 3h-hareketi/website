import { Tab } from "@headlessui/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Post, getSdk } from "../../interfaces";
import { client } from "../../lib/graphCmsClient";

type Props = {
  posts: Array<Post>;
};

const Blog = ({ posts }: Props) => {
  const highlightedPost = posts.filter((post) =>
    post.tags.includes("highlighted")
  )[0];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const uniqueTags: string[] = [];
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });

  function filterPostsByTag(tag: string) {
    return posts.filter((post) => post.tags.includes(tag));
  }

  return (
    <Layout
      bgColor="bg-white backdrop-filter backdrop-blur-md bg-opacity-60"
      textColor="text-black"
      hamburgerColor="black"
    >
      {" "}
      <NextSeo title="Blog" />
      <div className="bg-gray-200">
        <div
          className="w-full h-[60vh] -translate-y-1/3"
          style={{
            backgroundImage: `url("${highlightedPost.coverImage.url}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-row w-[90vw] pb-48 mx-auto space-x-6 overflow-x-scroll md:w-5/6 md:overflow-x-auto">
            <div className="p-4 shadow-xl md:translate-y-0 translate-y-1/2 md:overflow-y-hidden md:p-10 md:w-2/3 rounded-xl bg-primary-500 md:mt-[35vh] md:h-[50vh]">
              <div className="flex flex-col text-left">
                <div className="text-sm font-light text-gray-300 uppercase md:text-base">
                  {highlightedPost.tags.join(", ")}
                </div>
                <h1 className="w-[60vw] md:w-full mt-2 text-xl font-bold text-white md:mt-10 md:text-2xl lg:text-4xl">
                  {highlightedPost.title}
                </h1>
                <p className="mt-6 text-sm text-gray-300">
                  {highlightedPost.excerpt}
                </p>
                <Link href={`/blog/${highlightedPost.id}`}>
                  <a
                    href="#"
                    className="p-3 mt-8 font-bold text-center text-black bg-white md:mt-16 w-36 rounded-3xl"
                  >
                    Read More
                  </a>
                </Link>
              </div>
            </div>
            {posts.slice(0, 2).map((post) => (
              <div
                key={post.id}
                className="w-[60vw] md:w-1/3 p-10 bg-gray-700 shadow-xl h-1/3 rounded-xl mt-auto translate-y-1/2 md:translate-y-0"
              >
                <div className="flex flex-col space-y-5 text-left">
                  <h1 className="text-xl font-bold text-white">{post.title}</h1>
                  <p className="text-sm text-gray-300">{post.excerpt}</p>
                  <Link href={`${post.id}`}>
                    <a
                      href="#"
                      className="p-3 font-bold text-center text-black bg-white w-36 rounded-3xl"
                    >
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto md:mt-64">
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
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 flex flex-col justify-center space-y-5"
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
                          {post.createdBy?.name || " - "}, {post.createdAt}
                        </div>
                        <h1 className="text-xl font-bold">{post.title}</h1>
                        <div className="text-base font-light text-gray-600">
                          {post.excerpt}
                        </div>
                        <Link href={`/blog/${post.id}`} passHref>
                          <a
                            href="#"
                            className="w-4/5 p-2 text-sm text-center text-white md:w-1/6 rounded-3xl bg-primary-500"
                          >
                            Read more
                          </a>
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

export async function getStaticProps() {
  const sdk = getSdk(client);
  const { posts } = await sdk.Posts();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
