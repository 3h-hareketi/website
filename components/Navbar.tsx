import Link from "next/link";
import { useRouter } from "next/router";
import BlurImage from "./BlurImage";

type Props = {
  bgColor: string;
  textColor: string;
  logo: string;
};

const Navbar = ({ bgColor, textColor, logo }: Props) => {
  const router = useRouter();
  return (
    <section className={`relative w-full flex justify-center z-50 ${bgColor}`}>
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
          <a href="#">
            {" "}
            <BlurImage
              className=""
              src={logo === "alt" ? `/logo-alt.svg` : `/logo.svg`}
              alt="3H Logo"
              width={150}
              height={150}
            />
          </a>
        </Link>
        <ul className="items-center hidden h-12 mx-auto space-x-10 font-bold text-primary-50 md:flex">
          <li>
            {" "}
            <Link href="/about" passHref>
              <a className={`${textColor}`} href="#">
                ABOUT US
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/projects" passHref>
              <a className={`${textColor}`} href="#">
                PROJECTS
              </a>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link href="/blog" passHref>
              <a className={`${textColor}`} href="#">
                BLOG
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/join" passHref>
              <a className={`${textColor}`} href="#">
                JOIN US
              </a>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link href="/contact" passHref>
              <a className={`${textColor}`} href="#">
                CONTACT US
              </a>
            </Link>
          </li>
        </ul>
        <a
          className={`font-bold md:ml-0 ml-auto ${textColor}`}
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
