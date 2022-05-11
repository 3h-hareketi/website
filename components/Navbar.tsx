import Link from "next/link";
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
      className={`relative w-full flex justify-center`}
    >
      <nav className="w-3/4 flex items-center md:mx-auto flex-row">
        <svg
          viewBox="0 0 100 80"
          width="20"
          height="20"
          className="block mr-auto md:ml-0 fill-white md:hidden md:mr-0"
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
              <a href="#">ABOUT US</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/projects" passHref>
              <a href="#">PROJECTS</a>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link href="/blog" passHref>
              <a href="#">BLOG</a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/join" passHref>
              <a href="#">JOIN US</a>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link href="/contact" passHref>
              <a href="#">CONTACT US</a>
            </Link>
          </li>
        </ul>
        <a
          className="font-bold md:ml-0 text-primary-50 ml-auto"
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
