import { setTags } from "@sentry/nextjs";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

type BlogProps = {
  title: string;
  image: string;
  tags: string[];
  description: string;
  date: string;
};

const BlogCard = (props: BlogProps) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.image || "/placeholder.jpg"})` }}
        className="w-[720px] h-[450px] rounded-xl flex"
      >
        <div className="w-2/3 p-6 mt-auto bg-white rounded-tr-xl">
          <h1 className="text-xl font-semibold text-left">
            {props.date + ", " + props.title}
          </h1>
          <div className="mt-2 text-sm text-left">{props.description}</div>
          {/* <div>
            {" "}
            {props.tags.map((tag) => {
              <div className="text-sm text-gray-600">{tag}</div>;
            })}
          </div> */}
        </div>
      </div>
      {/* <Image
        src={props.image || "/placeholder.jpg"}
        height={450}
        width={720}
        alt="blog-post"
        className="absolute rounded-xl"
      /> */}
    </>
  );
};

export default BlogCard;
