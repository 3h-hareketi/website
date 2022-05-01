import Link from "next/link";
import { getSdk, Project } from "../../interfaces";
import { client } from "../../lib/graphCmsClient";

type Props = {
  projects: Array<Project>;
};

const Blog = ({ projects }: Props) => {
  return (
    <div className="mb-96 w-[90vw] mx-auto">
      <div className="flex flex-col w-full space-y-12 text-center bg-white">
        <h1 className="text-3xl font-semibold">Projects</h1>{" "}
        <div className="max-w-2xl mx-auto font-light text-gray-600">
          Ornare aptent aenean tristique tortor egestas habitasse, netus
          praesent taciti sagittis nulla proin vivamus habitasse, non aptent
          neque curabitur cubilia habitasse taciti, id vulputate quis
          consectetur turpis, blandit cursus aenean interdum.
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between mx-auto mt-24">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundImage: `url("${project.image[0].url}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-1/3 md:w-1/4 rounded-md h-[60vh] m-4 md:m-8 flex flex-col group"
          >
            <div className="md:hidden group-hover:flex flex-col items-center h-[20vh] md:h-[40vh] bg-white mt-auto rounded-t-md px-2 md:px-8 justify-between bg-opacity-90 backdrop-filter backdrop-blur-[50px]">
              <h1 className="mb-8 text-sm font-bold md:mb-0 md:mt-8 md:text-2xl">
                {project.name}
              </h1>
              <div className="hidden text-xs md:block md:text-base text-ellipsis">
                {project.description}
              </div>
              <Link href={project.link as string}>
                <a className="p-1 text-xs text-center text-white rounded-full md:mr-auto md:p-3 md:mb-4 md:w-1/3 bg-primary-500 md:text-base">
                  Read more{" "}
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const sdk = getSdk(client);
  const { projects } = await sdk.Projects();

  return {
    props: {
      projects,
    },
  };
}

export default Blog;
