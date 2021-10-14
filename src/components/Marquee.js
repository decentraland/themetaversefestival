import React, {useEffect, useState} from "react"
import Marquee from "react-fast-marquee";
import styled from 'styled-components';

const BannerMarquee = (props) => {
  return (
    <StyledBannerMarquee>
        <Marquee speed={100} delay={props.delay && props.delay}>
            → OCTOBER 7–10 → 8PM UTC → FESTIVAL LAND,[50, 70] → ©️DECENTRALAND → OCTOBER 7–10 → 8PM UTC → FESTIVAL LAND,[50, 70] → ©️DECENTRALAND →
        </Marquee>
    </StyledBannerMarquee>
  )
}

const StyledBannerMarquee = styled.div`
    background: black;
    font-size: 23px;
    position: relative;
    &:before,
    &:after {
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        background: #d53fc4;
        box-shadow: 0 0 2px 0.3px #d53fc4;
        content: '';
    }
    &:before {
        bottom: 0;
    }
    &:after {
        top: 0;
    }
    .marquee-container {
        padding: 12px 0;
        .overlay {
            display: none;
        }
        .marquee {
            min-width: unset;
        }
        * {
            color: white;
            font-weight: 400;
            letter-spacing: 1px;
        }
    }
`;

export default BannerMarquee
