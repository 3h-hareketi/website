import { Tab } from "@headlessui/react";
import Image from "next/image";
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
    <div className="bg-gray-200 mb-96">
      <Image
        className=""
        src={
          highlightedPost.coverImage.url ||
          `${"https://" + process.env.VERCEL_URL}}/placeholder.jpg`
        }
        alt={highlightedPost.title + "Cover Image"}
        layout="responsive"
        width={720}
        height={180}
      />

      <div className="flex flex-row w-5/6 mx-auto space-x-6">
        <div className="w-2/3 p-10 -translate-y-1/2 shadow-xl rounded-xl bg-primary-500">
          <div className="flex flex-col text-left">
            <div className="font-light text-gray-300 uppercase">
              {highlightedPost.tags.join(", ")}
            </div>
            <h1 className="mt-10 text-4xl font-bold text-white">
              {highlightedPost.title}
            </h1>
            <p className="mt-6 text-sm text-gray-300">
              {highlightedPost.excerpt}
            </p>

            <div className="p-3 mt-16 font-bold text-center text-black bg-white w-36 rounded-3xl">
              Read More
            </div>
          </div>
        </div>
        {posts.slice(0, 2).map((post) => (
          <div
            key={post.id}
            className="w-1/3 p-10 mt-6 bg-gray-700 shadow-xl h-1/3 rounded-xl"
          >
            <div className="flex flex-col space-y-5 text-left">
              <h1 className="text-xl font-bold text-white">{post.title}</h1>
              <p className="text-sm text-gray-300">{post.excerpt}</p>

              <div className="p-3 font-bold text-center text-black bg-white w-36 rounded-3xl">
                Read More
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto">
        <Tab.Group>
          <Tab.List className="flex flex-row p-1 mx-auto mb-6 overflow-scroll bg-white shadow-md md:overflow-auto md:justify-between md:max-w-5xl md:space-x-1 md:rounded-3xl">
            {uniqueTags.map((tag) => (
              <Tab
                key={tag}
                className={({ selected }) =>
                  classNames(
                    "w-full mx-3 md:mx-0 py-2.5 text-sm leading-5 font-medium text-white rounded-3xl",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-primary-500 shadow"
                      : "text-black hover:text-primary-200"
                  )
                }
              >
                {tag}{" "}
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
                    className="flex flex-row flex-wrap justify-center space-x-4"
                  >
                    <Image
                      className="rounded-xl"
                      src={post.coverImage.url}
                      alt={`${post.title} Cover Image`}
                      //   layout="responsive"
                      height={240}
                      width={480}
                    />
                    <div className="flex flex-col mr-auto space-y-5 md:w-1/3">
                      <div className="text-xs font-light text-gray-400 md:text-sm">
                        {post.createdBy?.name || " - "}, {post.createdAt}
                      </div>
                      <h1 className="text-xl font-bold">{post.title}</h1>
                      <div className="text-base font-light text-gray-600">
                        {post.excerpt}
                      </div>
                      <div className="w-4/5 p-2 text-center text-white md:w-1/6 rounded-3xl bg-primary-500">
                        Read more
                      </div>
                    </div>
                  </div>
                ))}{" "}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
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
