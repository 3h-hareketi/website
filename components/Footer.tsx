import { useRouter } from "next/router";
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
            <li className="font-thin">About Us</li>
            <li className="font-thin">Contact Us</li>
            <li className="font-thin">Projects</li>
            <li className="mt-16">SUPPORT</li>
            <li className="font-thin">Terms and Services</li>
            <li className="font-thin">Privacy</li>
            <li className="font-thin">Cookies</li>
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
