import { GetStaticPaths, GetStaticProps } from "next";
import { getSdk, Post } from "../../interfaces";
import { client } from "../../lib/graphCmsClient";

type Props = {
  post: Post;
};
const BlogPost = ({ post }: Props) => <>{post.title}</>;

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
