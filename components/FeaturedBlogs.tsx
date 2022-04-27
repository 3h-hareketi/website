import Image from "next/image";
import BlogCard from "./BlogCard";

const FeaturedBlogs = () => {
  return (
    <div className="flex flex-col w-full space-y-12 text-center bg-white">
      <h1 className="text-3xl font-semibold">Blog Posts</h1>{" "}
      <div className="max-w-2xl mx-auto font-light text-gray-600">
        Ornare aptent aenean tristique tortor egestas habitasse, netus praesent
        taciti sagittis nulla proin vivamus habitasse, non aptent neque
        curabitur cubilia habitasse taciti, id vulputate quis consectetur
        turpis, blandit cursus aenean interdum.
      </div>
      <div>
        <BlogCard
          title={"Blogging"}
          image={""}
          tags={["Art", "Food"]}
          description={
            "Diam vivamus a hac eleifend ut, habitasse hac eget tristique fringilla lacus interdum magna duis hendrerit, eget interdum integer cras suspendisse quis nulla eleifend aenean maecenas, dapibus interdum magna orci erat, magna tristique vehicula class rhoncus aenean suspendisse aptent, purus ante at, porttitor pretium, augue nec et semper ligula ad quam consequat aliquet neque interdum purus arcu, feugiat blandit nunc euismod imperdiet aptent metus, quis praesent ullamcorper magna vel iaculis proin in nisi imperdiet."
          }
          date={"2021"}
        />
      </div>
    </div>
  );
};

export default FeaturedBlogs;
