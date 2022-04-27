import Link from "next/link";
import BlurImage from "./BlurImage";
import logo from "/public/3h-vector.png";
const Navbar = () => {
  return (
    <section className="bg-primary-500">
      <div className="flex flex-row items-center mx-64 mt-16">
        <div className="mr-auto space-y-3 text-center">
          <BlurImage src={logo} height={128} width={128} className="" />
          <ul className="text-white">
            {" "}
            <li>Istanbul / Turkey</li>
            <li className="font-thin">iletisim@3hhareketi.org</li>
            <li className="font-thin">(+90) 212 564 78 90</li>
          </ul>
        </div>
        <h1 className="text-6xl font-bold text-center text-white">
          Reach out to us!
        </h1>

        <div className="flex flex-col items-end ml-auto">
          <ul className="text-white">
            {" "}
            <li>LEARN MORE</li>
            <Link href="/about" passHref>
              <li className="font-thin">
                <a href="#">About Us</a>
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li className="font-thin">
                <a href="#">Contact Us</a>
              </li>
            </Link>
            <Link href="/projects" passHref>
              <li className="font-thin">
                <a href="#">Projects</a>
              </li>
            </Link>{" "}
            <li className="mt-16">SUPPORT</li>
            <Link href="/terms" passHref>
              <li className="font-thin">
                <a href="#">Terms and Services</a>
              </li>
            </Link>{" "}
            <Link href="/privacy" passHref>
              <li className="font-thin">
                <a href="#">Privacy</a>
              </li>
            </Link>
            <Link href="/cookies" passHref>
              <li className="font-thin">
                <a href="#"> Cookies </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex text-sm text-gray-300 font-extralight">
        <div className="mx-auto">© 2022 All rights reserved.</div>{" "}
      </div>
    </section>
  );
};

export default Navbar;
