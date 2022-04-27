import type { NextPage } from "next";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen bg-gradient-radial from-primary-800 to-primary-400">
      {/* <FeaturedBlogs /> */}
      {/* <div className="m-auto">
          <Newsletter />
        </div> */}
    </div>
  );
};

export default Home;
