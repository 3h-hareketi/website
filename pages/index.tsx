import { NextSeo } from "next-seo";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import { getSdk, Post } from "../interfaces";
import { client } from "../lib/graphCmsClient";

type Props = {
  posts: Array<Post>;
};

const Home = ({ posts }: Props) => {
  return (
    <Layout
      bgColor=""
      textColor="text-primary-50"
      logo="alt"
      hamburgerColor="white"
    >
      <NextSeo description="3H Movement: Discover liberalism, the ideology of freedom!" />
      <div className="flex flex-col mx-auto">
        <div className="h-screen mx-auto mt-16 text-white">
          {" "}
          <h1 className="text-4xl font-extrabold md:text-8xl">
            Discover liberalism, <br /> the ideology of freedom!
          </h1>
          <div className="max-w-2xl mt-10">
            Vulputate erat cubilia praesent, dolor mattis condimentum eget
            tellus phasellus auctor elementum morbi, justo torquent egestas,
            nulla cursus tellus, per.
          </div>
          <button className="p-2 mt-4 font-medium text-black bg-white shadow-md w-36 rounded-2xl hover:text-primary-500 hover:shadow-lg">
            SEE MORE
          </button>
        </div>
        <div className="flex flex-col w-full space-y-12 text-center bg-white">
          <h1 className="text-3xl font-semibold">Blog Posts</h1>{" "}
          <div className="max-w-2xl mx-auto font-light text-gray-600">
            Ornare aptent aenean tristique tortor egestas habitasse, netus
            praesent taciti sagittis nulla proin vivamus habitasse, non aptent
            neque curabitur cubilia habitasse taciti, id vulputate quis
            consectetur turpis, blandit cursus aenean interdum.
          </div>
          <div className="md:mx-24 lg:mx-48 xl:mx-96 mx-4">
            {posts.map((blog, blogIdx) => (
              <BlogCard key={blog.id} blog={blog} index={blogIdx} />
            ))}
          </div>
        </div>
        <Newsletter />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const sdk = getSdk(client);
  const { posts } = await sdk.FeaturedBlogs();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
