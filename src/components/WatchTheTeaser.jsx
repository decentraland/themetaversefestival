import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../utils/theme";
import BannerMarquee from "./Marquee";

const WatchTheTeaser = ({ setShowVideo, setMuted }) => {
  return (
    <>
      <BannerMarquee noBorderBottom />
      <WatchTeaser
        onClick={() => {
          setMuted(false)
          setShowVideo(true)
        }}
      >
        <p>
          <TextHighlight>→</TextHighlight>
          Watch Last Year's Recap
          <TextHighlight>←</TextHighlight>
        </p>
      </WatchTeaser>
      <BannerMarquee noBorderTop direction="right" />
    </>
  );
};

const TextHighlight = styled.span`
  color: ${theme.accent};
`;

const WatchTeaser = styled.div`
  display: flex;
  backdrop-filter: blur(12px);
  justify-content: center;
  line-height: 22px;
  font-family: "Gothic";
  font-weight: 500;
  letter-spacing: 0.11em;
  padding: 120px 0;
  cursor: pointer;
  background-position: center; 
  background-attachment: fixed; 

  p {
    font-size: 10px;
  }
  transition: background 0.5s ease;

  span {
    padding-right: 8px;
    padding-left: 8px;
    transition: padding 0.4s ease;
  }

  &:hover {
    span {
      padding-right: 4px;
      padding-left: 4px;
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    p {
      font-size: 24px;
    }
  }
`;

export default WatchTheTeaser;
