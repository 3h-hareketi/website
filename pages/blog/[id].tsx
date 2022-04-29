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
      <div className="z-10 w-2/3 p-24 mx-auto -mt-24 bg-gray-200 shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-black">{post.title}</h1>
        <h2 className="text-xl font-bold text-gray-600">{post.excerpt}</h2>
        {/* <div className="text-black">{post.content?.html}</div> */}
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
