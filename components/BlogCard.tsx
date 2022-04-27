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
          <div className="flex flex-row">
            <h1 className="mr-auto text-xl font-semibold text-left">
              {props.date + ", " + props.title}{" "}
            </h1>
            {props.tags.map((tag, tagIdx) => (
              <div
                key={tag}
                className={`text-white text-xs rounded-xl p-1.5 mx-1 uppercase max-h-8 ${
                  tagIdx === 0 ? "bg-purple-500" : "bg-red-500"
                }`}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm text-left">{props.description}</div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
