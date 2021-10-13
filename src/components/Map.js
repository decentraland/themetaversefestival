import React, {useEffect, useState} from "react"
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import { breakpoints } from "../../utils/theme";

const Map = (props) => {
  return (
    <StyledMap id="map">
      <h2 className="show-desktop">SITEMAP</h2>
      <StaticImage className="map show-desktop" src={'./../images/mapa_desktop.png'} title="Metaverse Festival Map" alt="Metaverse Festival Map" />
      <StaticImage className="map show-mobile" src={'./../images/mapa_mobile.png'} title="Metaverse Festival Map" alt="Metaverse Festival Map" />
    </StyledMap>
  )
}

const StyledMap = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    h2 {
      font-size: 81px;
      margin: 24px 70px;
      font-family: 'SpaceMono';
      text-transform: uppercase;
      font-weight: 400;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 54px;
      }
  }
  area {
    border: 1px solid white;
    background: blue;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 100px;
      background: white;
    }
  }
  .show-mobile {
    display: none;
    @media screen and (max-width: ${breakpoints.md}) {
      display: unset;
    }
  }
  .show-desktop {
    @media screen and (max-width: ${breakpoints.md}) {
      display: none;
    }
  }

`;

export default Map;
