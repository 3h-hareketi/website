import Link from "next/link";
import { useRouter } from "next/router";
import BlurImage from "./BlurImage";
import logo from "/public/logo-alt.png";

const Navbar = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <section
      className={`relative w-full flex justify-center z-50 ${
        router.pathname === "/blog"
          ? "backdrop-filter backdrop-blur-md bg-white bg-opacity-60"
          : router.pathname !== "/"
          ? "bg-primary-500"
          : ""
      }`}
      // className={`relative w-full flex justify-center`}
    >
      <nav className="w-3/4 flex items-center md:mx-auto flex-row">
        <svg
          viewBox="0 0 100 80"
          width="20"
          height="20"
          className="block mr-auto md:ml-0 md:hidden md:mr-0"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
        <Link href="/" passHref>
          <BlurImage
            className="h-12"
            src={logo}
            alt="3H Logo"
            width={150}
            height={150}
          />
        </Link>
        <ul className="items-center hidden h-12 mx-auto space-x-10 font-bold text-primary-50 md:flex">
          <li>
            {" "}
            <Link href="/about" passHref>
              <a className={`${isHome ? "" : "text-black"}`} href="#">
                ABOUT US
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/projects" passHref>
              <a className={`${isHome ? "" : "text-black"}`} href="#">
                PROJECTS
              </a>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link href="/blog" passHref>
              <a className={`${isHome ? "" : "text-black"}`} href="#">
                BLOG
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/join" passHref>
              <a className={`${isHome ? "" : "text-black"}`} href="#">
                JOIN US
              </a>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link href="/contact" passHref>
              <a className={`${isHome ? "" : "text-black"}`} href="#">
                CONTACT US
              </a>
            </Link>
          </li>
        </ul>
        <a
          className={`font-bold md:ml-0 ml-auto ${
            isHome ? "text-primary-50" : "text-black"
          }`}
          href="#"
          onClick={() => {
            console.log("Language changed");
          }}
        >
          TR/ENG
        </a>
      </nav>
    </section>
  );
};

export default Navbar;
