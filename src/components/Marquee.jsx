import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import theme from "../../utils/theme";

const BannerMarquee = (props) => {
  return (
    <StyledBannerMarquee {...props}>
      <Marquee
        direction={props.direction}
        speed={100}
        delay={props.delay && props.delay}
        gradient={false}
      >
        • [-62,70] ©️DECENTRALAND NOV. 10-13 •
        <DateHighlight> -12PM UTC </DateHighlight> • [-62,70] ©️DECENTRALAND
        NOV. 10-13 •<DateHighlight> -12PM UTC </DateHighlight>
      </Marquee>
    </StyledBannerMarquee>
  );
};

const StyledBannerMarquee = styled.div`
  background: black;
  font-size: 12px;
  position: relative;
  border-top: ${(props) =>
    !props.noBorderTop ? `solid 2px ${theme.accent}` : "none"};
  border-bottom: ${(props) =>
    !props.noBorderBottom ? `solid 2px ${theme.accent}` : "none"};
  line-height: 24px;
  .marquee-container {
    padding: 12px 0;
    .overlay {
      display: none;
    }
    .marquee {
      min-width: unset;
    }
    * {
      font-family: "Yapari expanded";
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
    }
  }
`;

const DateHighlight = styled.span`
  color: ${theme.accent};
  padding-right: 8px;
  padding-left: 8px;
`;

export default BannerMarquee;
