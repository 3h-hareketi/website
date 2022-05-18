import { useTranslations } from "next-intl";
import Link from "next/link";
import BlurImage from "./BlurImage";
import logo from "/public/3h-vector.png";

const Footer = () => {
  const t = useTranslations("Footer");
  const tMenu = useTranslations("Navbar");

  return (
    <footer className="bg-primary-500">
      <div className="flex flex-col items-center mt-16 md:flex-row md:mx-64">
        <div className="space-y-3 text-center md:mr-auto">
          <BlurImage src={logo} height={128} width={128} />
          <ul className="text-white">
            <li className="font-normal">Istanbul / Turkey</li>
            <li className="font-thin">iletisim@3hhareketi.org</li>
            <li className="font-thin">(+90) 212 564 78 90</li>
          </ul>
        </div>
        <h1 className="text-4xl font-bold text-center text-white md:text-6xl">
          {t("motto")}
        </h1>
        <div className="flex flex-col mt-5 ml-10 mr-auto text-left md:mr-0 md:mt-0 md:ml-auto md:text-right">
          <ul className="text-white">
            <li className="uppercase">{t("learnMore")}</li>
            <Link href="/about" passHref>
              <li className="font-thin">
                <a>{tMenu("aboutUs")}</a>
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li className="font-thin">
                <a>{tMenu("contactUs")}</a>
              </li>
            </Link>
            <Link href="/projects" passHref>
              <li className="font-thin">
                <a>{tMenu("projects")}</a>
              </li>
            </Link>
            <li className="mt-16 uppercase">{t("support")}</li>
            <Link href="/terms" passHref>
              <li className="font-thin">
                <a>{t("tos")}</a>
              </li>
            </Link>
            <Link href="/privacy" passHref>
              <li className="font-thin">
                <a>{t("privacy")}</a>
              </li>
            </Link>
            <Link href="/cookies" passHref>
              <li className="font-thin">
                <a>{t("cookie")}</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex mb-3 text-sm text-gray-300 font-extralight">
        <div className="mx-auto">
          {"© " + new Date().getFullYear() + ` ${t("copyright")}`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
