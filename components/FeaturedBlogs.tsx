import Image from "next/image";
import BlogCard from "./BlogCard";

const FeaturedBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The End of the World",
      image: "/placeholder.jpg",
      tags: ["politics", "history"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2021",
    },
    {
      id: 2,
      title: "The Beginning of the World",
      image: "/placeholder.jpg",
      tags: ["politics", "history"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2022",
    },
  ];
  return (
    <div className="flex flex-col w-full space-y-12 text-center bg-white">
      <h1 className="text-3xl font-semibold">Blog Posts</h1>{" "}
      <div className="max-w-2xl mx-auto font-light text-gray-600">
        Ornare aptent aenean tristique tortor egestas habitasse, netus praesent
        taciti sagittis nulla proin vivamus habitasse, non aptent neque
        curabitur cubilia habitasse taciti, id vulputate quis consectetur
        turpis, blandit cursus aenean interdum.
      </div>
      <div className="mx-48">
        {blogs.map((blog, blogIdx) => (
          <BlogCard
            key={blog.id}
            title={blog.title || ""}
            image={blog.image || ""}
            tags={blog.tags || []}
            description={blog.description || ""}
            date={blog.date || ""}
            index={blogIdx}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
