import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../components/Layout";
import { getSdk, Locale, ProjectsQuery } from "../interfaces";
import { client } from "../lib/graphCmsClient";

type Props = {
  projects: ProjectsQuery["projects"];
};

const Projects = ({ projects }: Props) => {
  const t = useTranslations("Projects");

  return (
    <Layout bgColor="bg-white" textColor="text-black" hamburgerColor="black">
      <NextSeo title={t("title")} description={t("description")} />
      <div className="mb-96 w-[90vw] mx-auto">
        <div className="flex flex-col w-full space-y-12 text-center bg-white">
          <h1 className="text-3xl font-semibold">{t("projects")}</h1>{" "}
          <div className="max-w-2xl mx-auto font-light text-gray-600">
            {t("projectsDescription")}
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
              className="w-full md:w-1/4 rounded-md h-[70vh] m-4 md:m-8 flex flex-col group"
            >
              <div className="md:hidden flex group-hover:flex flex-col items-center bg-white mt-auto justify-between rounded-t-md p-2 md:p-8 bg-opacity-90 backdrop-filter backdrop-blur-[50px]">
                <h1 className="mt-4 text-sm font-bold md:mb-0 md:mt-8 md:text-2xl">
                  {project.name}
                </h1>
                <div className="hidden text-xs md:block md:text-sm mt-4">
                  {project.description}
                </div>
                {project.link && (
                  <Link href={project.link as string} passHref>
                    <a className="p-1 mb-4 text-xs text-center text-white rounded-full md:mr-auto md:p-3 md:mb-4 md:w-1/3 bg-primary-500 md:text-base">
                      {t("readMore")}
                    </a>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {
  const sdk = getSdk(client);
  const { projects } = await sdk.Projects({
    locale: locale as Locale,
    fallbackLocale: locales?.filter((l) => l !== locale)[0] as Locale,
  });

  return {
    props: {
      projects,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

export default Projects;
