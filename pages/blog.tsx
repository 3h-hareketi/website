import { Tab } from "@headlessui/react";
import PersonCard from "../components/PersonCard";
import Reports from "../components/Reports";
import { getSdk, Post } from "../interfaces";
import baseUrl from "../lib/baseUrl";
import { client } from "../lib/graphCmsClient";
import Image from "next/image";
type Props = {
  posts: Array<Post>;
};

const Blog = ({ posts }: Props) => {
  const highlightedPost = posts.filter((post) =>
    post.tags.includes("highlighted")
  )[0];

  return (
    <div className="bg-gray-200 mb-96">
      <Image
        className=""
        src={highlightedPost.coverImage.url || `${baseUrl}/placeholder.jpg"`}
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
