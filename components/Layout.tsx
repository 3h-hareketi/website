import React, { useState } from "react";
import Navbar from "./Navbar";
import { DefaultSeo, LogoJsonLd, OrganizationJsonLd } from "next-seo";
import { useRouter } from "next/router";
import Footer from "./Footer";
import BASE_URL from "../lib/baseUrl";
import { useSwipeable } from "react-swipeable";

type Props = {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  logo?: string;
  hamburgerColor: string;
};

const Layout = ({
  children,
  bgColor,
  textColor,
  logo,
  hamburgerColor,
}: Props) => {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const defaultTitle = `3H ${router.locale === "tr" ? "Hareketi" : "Movement"}`;
  const handlers = useSwipeable({
    onSwipedLeft: () => setNavbarOpen(false),
    onSwipedRight: () => setNavbarOpen(true),
  });

  return (
    <div
      className={`flex flex-col justify-between ${
        router.pathname === "/" ? "h-screen" : ""
      } subpixel-antialiased`}
      style={
        router.pathname === "/" || router.pathname === "/join"
          ? {
              background:
                "radial-gradient(50% 50% at 50% 50%, #1BC3D5 2.1%, #1696BE 100%), #12ABBB",
              backgroundImage: `url("${
                router.pathname === "/" ? "/background.svg" : "/joinus.svg"
              }")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "fit",
              backgroundPosition: `${
                router.pathname === "/" ? "right" : "left"
              }`,
            }
          : {}
      }
      {...handlers}
    >
      <DefaultSeo
        titleTemplate={`%s | ${defaultTitle}`}
        defaultTitle={defaultTitle}
        openGraph={{
          type: "website",
          url: router.pathname,
          locale: router.locale == "tr" ? "tr_TR" : "en_US",
          site_name: defaultTitle,
          images: [
            {
              url: `${BASE_URL}/logo.png`,
              width: 1200,
              height: 1200,
              alt: `${defaultTitle} logo`,
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@3hhareketi",
          site: "@3hhareketi",
          cardType: "summary_large_image",
        }}
      />
      <LogoJsonLd logo={`${BASE_URL}/logo.png`} url={BASE_URL!} />
      <OrganizationJsonLd
        type="NGO"
        id="https://www.3hhareketi.org/"
        logo={`${BASE_URL}/logo.png`}
        legalName="Hürriyet Hukuk Hoşgörü Hareketi Derneği"
        name="3H Hareketi"
        address={{
          streetAddress: "Emirgan Sokak",
          addressLocality: "Sarıyer",
          addressRegion: "İstanbul",
          postalCode: "34467",
          addressCountry: "TR",
        }}
        sameAs={[
          "https://www.facebook.com/3hhareketi/",
          "https://www.instagram.com/3hhareketi/",
          "https://twitter.com/3hhareketi",
          "https://www.youtube.com/channel/UCpNJRC7fCGASPkltHxGJesQ",
          "https://www.linkedin.com/company/the-3h-movement/about/",
        ]}
        url="https://www.3hhareketi.org/"
        email="info@3hhareketi.org"
        memberOf={[{ "@type": "NGO", name: "IFLRY" }]}
        funder={[
          { "@type": "NGO", name: "Friedrich Naumann Foundation" },
          { "@type": "NGO", name: "Atlas Network" },
        ]}
      />
      <Navbar
        bgColor={bgColor || ""}
        textColor={textColor || ""}
        logo={logo || "base"}
        hamburgerColor={hamburgerColor || ""}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
