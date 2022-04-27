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
        style={{
          backgroundImage: `url(${props.image || "/placeholder.jpg"})`,
        }}
        className={`w-full h-36 md:w-[720px] md:h-[450px] rounded-xl flex my-8 mx-1 md:mx-0 md:my-0 ${
          props.index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="w-5/6 p-2 mt-auto bg-white md:w-2/3 md:p-6 rounded-tr-xl">
          <div className="flex flex-row">
            <h1 className="mr-auto text-sm font-semibold text-left md:text-xl">
              {props.date + " - " + props.title}{" "}
            </h1>
            {props.tags.map((tag, tagIdx) => (
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
          <div className="mt-2 text-sm text-left">{props.description}</div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
