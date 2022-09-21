import { useTranslations } from "next-intl";
import Link from "next/link";
import { FeaturedPostsQuery, Post } from "../interfaces";
import BASE_URL from "../lib/baseUrl";

type Props = {
  blog: FeaturedPostsQuery["posts"][0];
  index: number;
};

const PostCard = ({ blog, index }: Props) => {
  const t = useTranslations("PostCard");

  return (
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
        <div className="flex flex-row ıtems-center">
          <Link href={`/blog/${blog.slug}`} passHref>
            <a className="mr-auto text-sm font-semibold text-left md:text-xl">
              <h1>{blog.title}</h1>
            </a>
          </Link>
          {blog.tags.map((tag, tagIdx) => (
            <div
              key={tag}
              className={`text-white text-xs p-2 rounded-xl md:mx-1 uppercase ${
                tagIdx === 0 ? "bg-purple-500" : "bg-red-500"
              }`}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="mt-2 text-sm text-left">{blog.excerpt}</div>
        <div className="text-left">
          <Link href={`/blog/${blog.slug}`} passHref>
            <a className="text-sm text-left text-primary-500">
              {t("readMore")}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
