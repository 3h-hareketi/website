import { Tab } from "@headlessui/react";
import PersonCard from "../components/PersonCard";
import Reports from "../components/Reports";
import { getSdk, Post } from "../interfaces";
import { client } from "../lib/graphCmsClient";

type Props = {
  posts: Array<Post>;
};

const Blog = ({ posts }: Props) => {
  const highlightedPost = posts.filter((post) =>
    post.tags.includes("highlighted")
  )[0];

  return <div>{highlightedPost?.title}</div>;
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
