import Link from "next/link";
import { useRouter } from "next/router";
import BlurImage from "./BlurImage";
import logo from "/public/logo-alt.png";

const Navbar = () => {
  return (
    <section
      // className={`relative w-full ${
      //   router.pathname !== ""
      //     ? "backdrop-filter backdrop-blur-md bg-opacity-0"
      //     : null
      // }`}
      className={`relative w-full bg-primary-500`}
    >
      <nav className="relative flex">
        <div className="flex items-center flex-grow md:grow-0 md:space-x-60 md:mx-auto">
          <svg
            viewBox="0 0 100 80"
            width="20"
            height="20"
            className="block ml-6 mr-auto md:ml-0 fill-white md:hidden md:mr-0"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
          <BlurImage
            className="h-12"
            src={logo}
            alt="3H Logo"
            width={150}
            height={150}
          />
          <ul className="items-center hidden h-12 mx-auto space-x-10 font-bold text-primary-50 md:flex">
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
            className="ml-auto mr-6 font-bold md:ml-0 text-primary-50 md:mr-0 "
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
