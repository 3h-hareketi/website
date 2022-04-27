import { setTags } from "@sentry/nextjs";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Person } from "../interfaces";

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
  return <div className="mx-auto text-3xl text-black"> {props.fullName}</div>;
};

export default PersonCard;
