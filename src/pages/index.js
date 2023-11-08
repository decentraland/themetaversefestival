import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet";
import Layout from "./../components/Layout";
import Hero from "./../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BannerMarquee from "../components/Marquee";
import WatchTheTeaser from "../components/WatchTheTeaser";
import About from "../components/About";
import Faq from "../components/Faq";
import Sitemap from "../components/Sitemap";
import Stages from "../components/Stages";
import Partners from "../components/Partners";
import Experiences from "../components/Experiences";
import MerchBanner from "../components/MerchBanner";
import merchBanner from "../images/merch-banner.png";
import LineUpSchedule from "../components/LineUpSchedule";
import { Subscribe } from "../components/Subscribe";
import ReactPixel from "react-facebook-pixel";

const advancedMatching = {};
const options = {
  autoConfig: true,
  debug: false,
};

ReactPixel.init("291661748141710", advancedMatching, options);

const seo = {
  title: "Decentraland Music Festival | Decentraland",
  description:
    "A four-day celebration of music, culture and creativity in the virtual social world of Decentraland, the Metaverse Festival is a grand collision of light, sound and portable toilets.",
  image: "https://themetaversefestival.io/social.png",
};

const meta = {
  ...seo,
  "og:title": seo.title || "",
  "twitter:title": seo.title || "",
  "og:description": seo.description || "",
  "twitter:description": seo.description || "",
  "og:image": seo.image || "",
  "twitter:image": seo.image || "",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@decentraland",
  "og:type": "website",
};

// markup
const IndexPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("hasWatchedVideo")) {
      setShowVideo(true);
    }
  }, []);

  ReactPixel.pageView();

  return (
    <StyledIndexPage>
      <Helmet>
        {Object.keys(meta)
          .filter((name) => Boolean(meta[name]))
          .map((name) => {
            if (name === "title") {
              return <title key={name}>{meta[name]}</title>;
            }

            if (name.startsWith("og:")) {
              return <meta key={name} property={name} content={meta[name]} />;
            }

            return <meta key={name} name={name} content={meta[name]} />;
          })}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Layout>
        <header>
          <Navbar />
          <Hero />
        </header>
        <main>
          {showVideo && (
            <Banner
              muted={muted}
              setMuted={setMuted}
              setShowVideo={setShowVideo}
            />
          )}
          <BannerMarquee />
          <About />
          <BannerMarquee />
          <LineUpSchedule />
          <WatchTheTeaser setShowVideo={setShowVideo} setMuted={setMuted} />
          <Stages />
          <Experiences />
          <BannerMarquee />
          {/* <MerchBanner src={merchBanner} href="https://market.decentraland.org/MF23?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=recently_listed&onlyOnSale=true" target="_blank" /> */}
          {/* <BannerMarquee noBorderTop direction="right" /> */}
          <Sitemap />
          <BannerMarquee />
          <Faq />
          <Footer />
        </main>
      </Layout>
    </StyledIndexPage>
  );
};

const StyledIndexPage = styled.div`
  background: transparent;
`;

export default IndexPage;
