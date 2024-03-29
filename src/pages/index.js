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
import Experiences from "../components/Experiences";
import LineUpSchedule from "../components/LineUpSchedule";
import MerchBanner from "../components/MerchBanner"
import merchBanner from "../images/merchbanner-23.png"

const advancedMatching = {};
const options = {
  autoConfig: true,
  debug: false,
};

const seo = {
  title: "Decentraland Music Festival | Decentraland",
  description:
    "A three-day celebration of music, culture and creativity in the virtual social world of Decentraland, the Music Festival is a grand collision of light, sound and portable toilets.",
  image: "https://musicfestival.decentraland.org/dmf-logo-white.png",
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
    // if (!localStorage.getItem("hasWatchedVideo")) {
    //   setShowVideo(true);
    // }
    if (typeof window !== "undefined") {
      initTwitter()
    }
    
    import("react-facebook-pixel")
      .then((module) => module.default)
      .then((ReactPixel) => {
        if (typeof window !== "undefined") {
          ReactPixel.init("291661748141710", advancedMatching, options);
          ReactPixel.pageView();
        }
      });

  }, []);

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
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-23.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-23-16x16.png"
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
          <MerchBanner src={merchBanner} href="https://market.decentraland.org/DCLMF23?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=recently_listed&onlyOnSale=true" target="_blank" />
          <BannerMarquee noBorderTop direction="right" />
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

export const initTwitter = () => {
  const head = document.querySelector('head');
  const addTwitterScript = () => {
    const twitterScript = document.createElement('script');
    twitterScript.type = 'text/javascript';
    twitterScript.src = 'https://static.ads-twitter.com/uwt.js';
    head.appendChild(twitterScript);
  };

  const initializeTwq = (windowObj, documentObj, elementType) => {
    if (!windowObj.twq) {
      const twitterEventTracker = (windowObj.twq = (...args) => {
        twitterEventTracker.exe
          ? twitterEventTracker.exe.apply(twitterEventTracker, args)
          : twitterEventTracker.queue.push(args);
      });
      twitterEventTracker.version = '1.1';
      twitterEventTracker.queue = [];
      const twitterScriptElement = documentObj.createElement(elementType);
      twitterScriptElement.async = true;
      twitterScriptElement.src = 'https://static.ads-twitter.com/uwt.js';
      const a = documentObj.getElementsByTagName(elementType)[0];
      a.parentNode.insertBefore(twitterScriptElement, a);
    }
  };
  addTwitterScript();
  initializeTwq(window, document, 'script');
  window.twq('config', "oa4sn");
}

export default IndexPage;
