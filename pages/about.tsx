import { Tab } from "@headlessui/react";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import PersonCard from "../components/PersonCard";
import Reports from "../components/Reports";
import { getSdk, Person, Report } from "../interfaces";
import { client } from "../lib/graphCmsClient";

type Props = {
  directors: Array<Person>;
  supervisors: Array<Person>;
  reports: Array<Report>;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const About = ({ directors, supervisors, reports }: Props) => {
  return (
    <Layout bgColor="bg-white" textColor="text-black" hamburgerColor="black">
      <NextSeo title="About us" description="Meet the minds behind 3H" />
      <div className="flex flex-col mx-auto bg-primary-500">
        <h1 className="mx-auto text-2xl font-extrabold text-center text-white md:text-8xl">
          Meet the minds <br /> behind 3H
        </h1>
      </div>
      <div className="flex flex-col bg-gray-100">
        <h1 className="mx-auto text-3xl font-semibold mt-36">Our Team</h1>
        <div className="max-w-3xl mx-auto mt-8 font-thin text-center">
          Ornare aptent aenean tristique tortor egestas habitasse, netus
          praesent taciti sagittis nulla proin vivamus habitasse, non aptent
          neque curabitur cubilia habitasse taciti, id vulputate quis
          consectetur turpis, blandit cursus aenean interdum.{" "}
        </div>
        <strong className="mx-auto mt-3 text-center">
          Believe in yourself!
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
                {"All"}
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
                {"Board of Directors"}
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
                {"Board of Supervisors"}
              </Tab>
            </Tab.List>
            <Tab.Panels className="w-11/12 mx-auto mt-2">
              <Tab.Panel
                className={classNames(
                  "bg-gray-100 rounded-xl p-3",
                  "flex flex-wrap md:justify-between justify-center"
                )}
              >
                {supervisors.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
                {directors.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-gray-100 rounded-xl p-3",
                  "flex flex-wrap md:justify-between justify-center"
                )}
              >
                {directors.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-gray-100 rounded-xl p-3",
                  "flex flex-wrap md:justify-between justify-center"
                )}
              >
                {supervisors.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <Reports reports={reports} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const sdk = getSdk(client);
  const { people: directors } = await sdk.BoardOfDirectorsMembers();
  const { people: supervisors } = await sdk.BoardOfSupervisorsMembers();
  const { reports } = await sdk.Reports();

  return {
    props: {
      directors,
      supervisors,
      reports,
    },
  };
}

export default About;
