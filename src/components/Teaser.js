import React, {isValidElement, useEffect, useState, useRef} from "react"
import styled from 'styled-components';
import {StaticImage} from 'gatsby-plugin-image';
import ReactPlayer from 'react-player';
import { breakpoints } from "../../utils/theme";


const Teaser = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <StyledTeaser id="teaser">
      <div className={`video-container`}>
        <h1 
          onClick={() => {setIsPlaying(true)}} 
          className={`${isPlaying ? 'hidden' : ''}`}>→ Watch the teaser</h1>
        <ReactPlayer
          url={'teaser.m4v'}
          playing={isPlaying}
          width={'100%'}
          height={'900px'}
          controls={isPlaying}
        />
      </div>
    </StyledTeaser>
  )
}

const StyledTeaser = styled.div`
    /* height: 100vw; */
    position: relative;
    h1 {
      font-size: 80px;
      position: absolute;
      height: 100%;
      width: 100%;
      text-align: center;
      cursor: pointer;
      opacity: 0.8;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 54px;
      }
      &:hover {
        opacity: 1;
      }
      &.hidden {
        display: none;
      }
    }
`;

export default Teaser
