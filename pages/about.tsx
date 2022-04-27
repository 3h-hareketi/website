import { Tab } from "@headlessui/react";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import { getSdk, Person, Post } from "../interfaces";
import { client } from "../lib/graphCmsClient";

type Props = {
  directors: Array<Person>;
  supervisors: Array<Person>;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home = ({ directors, supervisors }: Props) => {
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
      </div>
    </>
  );
};

export async function getStaticProps() {
  const sdk = getSdk(client);
  const { people: directors } = await sdk.BoardOfDirectorsMembers();
  const { people: supervisors } = await sdk.BoardOfSupervisorsMembers();
  return {
    props: {
      directors,
      supervisors,
    },
  };
}

export default Home;
