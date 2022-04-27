import { setTags } from "@sentry/nextjs";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

type BlogProps = {
  title: string;
  image: string;
  tags: string[];
  description: string;
  date: string;
  index: number;
};

const BlogCard = (props: BlogProps) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.image || "/placeholder.jpg"})` }}
        className={`w-[720px] h-[450px] rounded-xl flex ${
          props.index % 2 === 0 ? "mr-auto" : "ml-auto"
        }`}
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
    </>
  );
};

export default BlogCard;
