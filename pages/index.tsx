import type { NextPage } from "next";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="h-screen mx-auto mt-16 text-white">
        {" "}
        <h1 className="font-extrabold text-8xl">
          Discover liberalism, <br /> the ideology of freedom!
        </h1>
        <div className="max-w-2xl mt-10">
          Vulputate erat cubilia praesent, dolor mattis condimentum eget tellus
          phasellus auctor elementum morbi, justo torquent egestas, nulla cursus
          tellus, per.
        </div>
        <button className="p-2 mt-4 font-medium text-black bg-white shadow-md w-36 rounded-2xl hover:text-primary-500 hover:shadow-lg">
          SEE MORE
        </button>
      </div>

      <FeaturedBlogs />
      <Newsletter />
    </div>
  );
};

export default Home;
