import Image from "next/image";

type Props = {
  fullName: string;
  role: string;
  biography: string;
  facebook: string;
  id: string;
  image: string;
  instagram: string;
  linkedIn: string;
  twitter: string;
};

const PersonCard = (props: Props) => {
  return (
    <div className="flex flex-col w-64 max-w-xl p-6 bg-white shadow-md rounded-xl">
      <div className="mx-auto">
        <Image
          src={props.image || ""}
          alt={props.fullName + "profile image"}
          width={96}
          height={96}
          className="mb-4 rounded-full"
        />
      </div>
      <h1 className="mx-auto text-xl font-extrabold text-center">
        {props.fullName}
      </h1>
      <div className="mx-auto text-lg text-center"> {props.role}</div>
      <div className="mx-auto mt-4 text-center text-gray-400">
        {props.biography}
      </div>
    </div>
  );
};

export default PersonCard;
