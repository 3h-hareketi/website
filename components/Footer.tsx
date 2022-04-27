import Link from "next/link";
import BlurImage from "./BlurImage";
import logo from "/public/3h-vector.png";

const Footer = () => {
  return (
    <section className="bg-primary-500">
      <div className="flex flex-col items-center mt-16 md:flex-row md:mx-64">
        <div className="space-y-3 text-center md:mr-auto">
          <BlurImage src={logo} height={128} width={128} className="" />
          <ul className="text-white">
            {" "}
            <li className="font-normal">Istanbul / Turkey</li>
            <li className="font-thin">iletisim@3hhareketi.org</li>
            <li className="font-thin">(+90) 212 564 78 90</li>
          </ul>
        </div>
        <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
          Reach out to us!
        </h1>

        <div className="flex flex-col mt-5 ml-10 mr-auto text-left md:mr-0 md:mt-0 md:ml-auto md:text-right">
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

export default Footer;
