import { GetStaticPaths, GetStaticProps } from "next";
import { getSdk, Post } from "../../interfaces";
import { client } from "../../lib/graphCmsClient";
import Image from "next/image";
type Props = {
  post: Post;
};
const BlogPost = ({ post }: Props) => (
  <div className="flex justify-center w-screen">
    <div className="flex flex-col">
      {" "}
      <Image
        alt={`${post.title} Cover Image`}
        src={post.coverImage.url}
        height={720}
        width={1600}
        className="mx-auto rounded-xl -z-10"
      />
      <div className="z-10 w-2/3 p-8 md:p-24 mx-auto -mt-16 md:-mt-48 bg-white shadow-xl bg-opacity-90 rounded-xl backdrop-filter backdrop-blur-[80px] ">
        <h1 className="mb-10 text-2xl font-bold text-black md:text-4xl">
          {post.title}
        </h1>
        <h2 className="mb-6 text-base font-bold text-gray-600 md:text-xl">
          {post.excerpt}
        </h2>
        {/*TODO*/}
        {/*HTML or Markdown blog post renderer*/}
        <div
          dangerouslySetInnerHTML={{ __html: post.content?.html || "" }}
          className="text-sm text-black"
        ></div>{" "}
        {/*TODO */}
      </div>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sdk = getSdk(client);

  const { post } = await sdk.Post({
    id: params?.id as string,
  });

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = getSdk(client);
  const { posts } = await sdk.Posts();

  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    fallback: false,
  };
};

export default BlogPost;
