import React from "react";
import Navbar from "./Navbar";
import { DefaultSeo, LogoJsonLd, OrganizationJsonLd } from "next-seo";
import { useRouter } from "next/router";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col justify-between h-screen subpixel-antialiased "
      style={
        router.pathname === "/"
          ? {
              background:
                "radial-gradient(50% 50% at 50% 50%, #1BC3D5 2.1%, #1696BE 100%), #12ABBB",
              backgroundImage: `url("/background.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "fit",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <DefaultSeo
        titleTemplate="%s | 3H Akademi"
        defaultTitle="3H Akademi"
        openGraph={{
          type: "website",
          url: router.pathname,
          locale: "tr_TR",
          site_name: "3H Akademi",
          images: [
            {
              url: `${process.env.NEXTAUTH_URL}/3h-logo.jpg`,
              width: 1200,
              height: 1200,
              alt: "3H Akademi",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          handle: "@3hhareketi",
          site: "@3hhareketi",
          cardType: "summary_large_image",
        }}
      />
      <LogoJsonLd
        logo={`${process.env.NEXTAUTH_URL}/3h-logo.png`}
        url={process.env.NEXTAUTH_URL!}
      />
      <OrganizationJsonLd
        type="NGO"
        id="https://www.3hhareketi.org/"
        logo={`${process.env.NEXTAUTH_URL}/3h-logo.png`}
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
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
