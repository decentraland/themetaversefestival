import styled from "styled-components";
import theme, { breakpoints } from '../../../utils/theme';

export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 150px;
    background: black;
`;

export const Title = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 62px;
    @media screen and (min-width: ${breakpoints.md}) {
    width: 80%;
    }
    @media screen and (min-width: ${breakpoints.l}) {
    width: 70%;
    }
    @media screen and (min-width: ${breakpoints.xl}) {
    width: 60%;
    }
    @media screen and (min-width: ${breakpoints.xxl}) {
    width: 50%;
    }
`;

export const StagesContainer = styled.div`
    margin: 32px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 16px;
    justify-content: center;
    flex-wrap: no-wrap;
    justify-items: center;
`;

export const Stage = styled.div`
    margin-bottom: 32px;
    margin-left: 8px;
    margin-right: 16px;
    margin: 0 8px;
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    :active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
  }
`

export const StageCard = styled.div`
    position: relative;
    border-top-right-radius: 8px;
    border: 3px solid white;
    margin-bottom: 8px;
    overflow: hidden;
    transition: box-shadow 0.4s ease;
    margin-bottom: 32px;

    :hover {
        box-shadow:
          0 0 14px #fff,
          0 0 9px violet,
          0 0 3px blue;
          div {
            display: flex;
          }
    }

    div {
        display: none;
    }
`

export const StageImage = styled.img`
    aspect-ratio: 1 / 1.5;
    object-fit: cover;
    height: 400px;
`

export const StageName = styled.p`
    font-family: 'Yapari Expanded';
    font-size: 16px;
    line-height: 120%;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 8px;
    max-width: 170px;
    min-height: 42px;
`
export const StageLocation = styled.caption`
    font-family: 'Yapari';
    font-size: 16px;
    line-height: 16px
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 32px;
    color: ${theme.accent};
`

export const StageHover = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    animation: fedeIn 0.4ss linear;

    @keyframes fadeIn {
        0% { opacity: 0; }
        50% { opacity: 50%; }
        100% { opacity: 1; }
      }
`

export const StageButton = styled.button`
      border: unset;
      box-shadow: unset;
      border-radius: 58px;
      padding: 8px 16px;
      font-weight: 700;
      color: black;
      font-size: 14px;
      cursor: crosshair;
`

export const StyledBannerMarquee = styled.div`
  .marquee-container {
    margin: 32px 0;
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