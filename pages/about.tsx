import { Tab } from "@headlessui/react";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import PersonCard from "../components/PersonCard";
import ReportCard from "../components/ReportCard";
import { getSdk, Locale, PeopleQuery, ReportsQuery } from "../interfaces";
import { client } from "../lib/graphCmsClient";

type Props = {
  people: PeopleQuery["people"];
  reports: ReportsQuery["reports"];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const About = ({ people, reports }: Props) => {
  const t = useTranslations("About");

  return (
    <Layout bgColor="bg-white" textColor="text-black" hamburgerColor="black">
      <NextSeo title={t("title")} description={t("description")} />
      <div className="flex flex-col mx-auto bg-primary-500">
        <h1 className="mx-auto text-2xl font-extrabold text-center text-white md:text-8xl">
          {t("heroTitle1")} <br /> {t("heroTitle2")}
        </h1>
      </div>
      <div className="flex flex-col bg-gray-100">
        <h1 className="mx-auto text-3xl font-semibold mt-36">{t("ourTeam")}</h1>
        <div className="max-w-3xl mx-auto mt-8 font-thin text-center">
          {t("teamDescription")}{" "}
        </div>
        <strong className="mx-auto mt-3 text-center">
          {t("teamSubtitle")}
        </strong>
        <div className="py-16 mx-auto md:px-2 md:w-7/12 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex justify-between w-screen max-w-md mx-auto mb-6 overflow-scroll bg-white shadow-md md:w-auto md:p-1 md:space-x-1 md:rounded-3xl md:overflow-auto">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium rounded-3xl",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-primary-500 shadow text-white"
                      : "text-black hover:text-primary-200"
                  )
                }
              >
                {t("all")}
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium rounded-3xl",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-primary-500 shadow text-white"
                      : "text-black hover:text-primary-200"
                  )
                }
              >
                {t("boardOfDirectors")}
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium rounded-3xl",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-primary-500 shadow text-white"
                      : "text-black hover:text-primary-200"
                  )
                }
              >
                {t("boardOfSupervisors")}
              </Tab>
            </Tab.List>
            <Tab.Panels className="w-11/12 mx-auto mt-2">
              <Tab.Panel
                className={classNames(
                  "bg-gray-100 rounded-xl p-3",
                  "flex flex-wrap md:justify-between justify-center"
                )}
              >
                {people.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-gray-100 rounded-xl p-3",
                  "flex flex-wrap md:justify-between justify-center"
                )}
              >
                {people
                  .filter((person) => person.boardOfDirectorsMember)
                  .map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-gray-100 rounded-xl p-3",
                  "flex flex-wrap md:justify-between justify-center"
                )}
              >
                {people
                  .filter((person) => person.boardOfSupervisorsMember)
                  .map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex flex-col">
          {" "}
          <h1 className="mx-auto text-3xl font-semibold mt-36">
            {t("reports")}
          </h1>
          <div className="max-w-3xl mx-auto mt-8 font-thin text-center">
            {t("reportsDescription")}
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-2/3 mx-auto">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {
  const sdk = getSdk(client);
  const { people: people } = await sdk.People({
    locale: locale as Locale,
    fallbackLocale: locales?.filter((l) => l !== locale)[0] as Locale,
  });
  const { reports } = await sdk.Reports();

  return {
    props: {
      people,
      reports,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};

export default About;
