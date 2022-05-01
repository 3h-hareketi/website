import Link from "next/link";
import { Post } from "../interfaces";
import BASE_URL from "../lib/baseUrl";

type Props = {
  blog: Post;
  index: number;
};

const BlogCard = ({ blog, index }: Props) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            blog.coverImage.url || `${BASE_URL}}/placeholder.jpg`
          })`,
        }}
        className={`w-full h-36 md:w-3/4 md:mt-16 md:h-[50vh] rounded-xl flex my-8 md:mx-1 md:my-0 ${
          index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="w-5/6 p-2 mt-auto overflow-x-hidden bg-white md:w-2/3 md:p-6 rounded-tr-xl">
          <div className="flex flex-row">
            <h1 className="mr-auto text-sm font-semibold text-left md:text-xl">
              {blog.date + " - " + blog.title}{" "}
            </h1>
            {blog.tags.map((tag, tagIdx) => (
              <div
                key={tag}
                className={`text-white text-xs rounded-xl md:p-1.5 md:mx-1 uppercase md:max-h-8 max-h-6 p-0.5 ${
                  tagIdx === 0 ? "bg-purple-500" : "bg-red-500"
                }`}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm text-left">{blog.excerpt}</div>
          <div className="text-left">
            <Link href={`/blog/${blog.id}`}>
              <a href="#" className="text-sm text-left text-primary-500">
                Read more...
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
