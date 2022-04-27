import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, Fragment, SetStateAction } from "react";
import BlurImage from "./BlurImage";
// import UserDropdown from "./UserDropdown";
import HLogo from "/public/3h-logo.svg";
import logo from "/public/logo-alt.png";
const Navbar = () => {
  const router = useRouter();

  return (
    <section
      className={`relative w-full ${
        router.pathname !== ""
          ? "backdrop-filter backdrop-blur-md bg-opacity-0"
          : null
      }`}
    >
      <nav className="relative flex">
        <div className="flex items-center mx-auto space-x-60">
          <BlurImage
            className="h-12"
            src={logo}
            alt="3H Logo"
            width={150}
            height={150}
          />
          <ul className="flex items-center h-12 mx-auto space-x-10 font-bold text-primary-50">
            <li>
              {" "}
              <Link href="/about" passHref>
                <a href="#">ABOUT US</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/about" passHref>
                <a href="#">PROJECTS</a>
              </Link>
            </li>{" "}
            <li>
              {" "}
              <Link href="/about" passHref>
                <a href="#">BLOG</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/about" passHref>
                <a href="#">JOIN US</a>
              </Link>
            </li>{" "}
            <li>
              {" "}
              <Link href="/about" passHref>
                <a href="#">CONTACT US</a>
              </Link>
            </li>
          </ul>
          <a
            className="font-bold text-primary-50"
            href="#"
            onClick={() => {
              console.log("Language changed");
            }}
          >
            TR/ENG
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
