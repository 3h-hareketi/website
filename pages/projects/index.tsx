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
            className="w-1/4 rounded-md shadow-lg h-[60vh] m-8 flex flex-col group"
          >
            <div className="hidden group-hover:flex flex-col items-center h-[40vh] bg-white mt-auto rounded-t-md px-1 md:px-8 justify-between bg-opacity-90 backdrop-filter backdrop-blur-[50px]">
              <h1 className="mt-8 text-lg font-bold md:text-2xl">
                {project.name}
              </h1>
              <div className="">{project.description}</div>
              <Link href={project.link as string}>
                <a className="w-1/3 p-3 mb-4 mr-auto text-center text-white rounded-full bg-primary-500">
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
