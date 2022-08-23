import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import BlurImage from "./BlurImage";
import logo from "/public/3h-vector.png";

const Footer = () => {
  const t = useTranslations("Footer");
  const tMenu = useTranslations("Navbar");
  const router = useRouter();

  return (
    <footer className="bg-primary-500">
      <div className="flex flex-col items-center px-2 mx-auto mt-16 max-w-7xl md:flex-row">
        <div className="space-y-3 text-center md:mr-auto">
          <BlurImage src={logo} height={128} width={128} />
          <ul className="text-white">
            <li className="font-normal">Istanbul / Turkey</li>
            <li className="font-thin">iletisim@3hhareketi.org</li>
            <li className="font-thin">(+90) 212 564 78 90</li>
          </ul>
          <div className="space-x-4">
            <Link href="https://www.facebook.com/3hhareketi/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white"
                  size="lg"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/3hhareketi/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white"
                  size="lg"
                />
              </a>
            </Link>
            <Link href="https://twitter.com/3hhareketi/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white"
                  size="lg"
                />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-3h-movement/about/"
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white"
                  size="lg"
                />
              </a>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCpNJRC7fCGASPkltHxGJesQ"
              passHref
            >
              <a href="">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white"
                  size="lg"
                />
              </a>
            </Link>
          </div>
        </div>
        <h1 className="text-xl font-bold text-center text-white md:text-6xl">
          {t("motto")}
        </h1>
        <div className="flex flex-col mt-5 ml-10 mr-auto text-left md:mr-0 md:mt-0 md:ml-auto md:text-right">
          <ul className="text-white">
            <li className="font-bold uppercase">{t("learnMore")}</li>
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
            <li className="mt-16 font-bold uppercase">{t("support")}</li>
            <Link
              href={router.locale === "tr" ? "/yasal-bildirim" : "/terms"}
              passHref
            >
              <li className="font-thin">
                <a>{t("tos")}</a>
              </li>
            </Link>
            <Link
              href={
                router.locale === "tr"
                  ? "/gizlilik-politikasi"
                  : "/privacy-policy"
              }
              passHref
            >
              <li className="font-thin">
                <a>{t("privacy")}</a>
              </li>
            </Link>
            {/* <Link href="/cookies" passHref>
              <li className="font-thin">
                <a>{t("cookie")}</a>
              </li>
            </Link> */}
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
