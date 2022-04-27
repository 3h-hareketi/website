import { Tab } from "@headlessui/react";
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
    <>
      <div className="flex flex-col mx-auto bg-primary-500">
        <h1 className="mx-auto text-2xl font-extrabold text-center text-white md:text-8xl">
          Meet the minds <br /> behind 3H
        </h1>
      </div>
      <div className="flex flex-col">
        {" "}
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
        <div className="w-full max-w-md px-2 py-16 mx-auto sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-white shadow-md rounded-xl">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-3xl",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-primary-500 shadow"
                      : "text-black hover:text-primary-200"
                  )
                }
              >
                {"All"}
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-3xl",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-primary-500 shadow"
                      : "text-black hover:text-primary-200"
                  )
                }
              >
                {"Board of Directors"}
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-3xl",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-primary-500 shadow"
                      : "text-black hover:text-primary-200"
                  )
                }
              >
                {"Board of Supervisors"}
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                )}
              >
                <div className="flex flex-wrap mx-auto space-x-5 space-y-5">
                  {supervisors.map((person) => (
                    <PersonCard
                      key={person.id}
                      fullName={person.fullName}
                      biography={person.biography || ""}
                      twitter={person.twitter || ""}
                      facebook={person.facebook || ""}
                      linkedIn={person.linkedIn || ""}
                      role={person.role}
                      id={person.id}
                      image={person.image?.url || ""}
                      instagram={person.instagram || ""}
                    />
                  ))}
                  {directors.map((person) => (
                    <PersonCard
                      key={person.id}
                      fullName={person.fullName}
                      biography={person.biography || ""}
                      twitter={person.twitter || ""}
                      facebook={person.facebook || ""}
                      linkedIn={person.linkedIn || ""}
                      role={person.role}
                      id={person.id}
                      image={person.image?.url || ""}
                      instagram={person.instagram || ""}
                    />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                )}
              >
                <div className="flex flex-wrap mx-auto space-x-5 space-y-5">
                  {directors.map((person) => (
                    <PersonCard
                      key={person.id}
                      fullName={person.fullName}
                      biography={person.biography || ""}
                      twitter={person.twitter || ""}
                      facebook={person.facebook || ""}
                      linkedIn={person.linkedIn || ""}
                      role={person.role}
                      id={person.id}
                      image={person.image?.url || ""}
                      instagram={person.instagram || ""}
                    />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                )}
              >
                <div className="flex flex-wrap mx-auto space-x-5 space-y-5">
                  {supervisors.map((person) => (
                    <PersonCard
                      key={person.id}
                      fullName={person.fullName}
                      biography={person.biography || ""}
                      twitter={person.twitter || ""}
                      facebook={person.facebook || ""}
                      linkedIn={person.linkedIn || ""}
                      role={person.role}
                      id={person.id}
                      image={person.image?.url || ""}
                      instagram={person.instagram || ""}
                    />
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <Reports reports={reports} />
      </div>
    </>
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
