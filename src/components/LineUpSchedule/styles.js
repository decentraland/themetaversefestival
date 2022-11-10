import styled from "styled-components";
import { breakpoints } from "../../../utils/theme";

export const StyledLineUpSchedule = styled.div`
  padding-top: 150px;
  padding-bottom: 75px;
`;

// --------------  HEADER --------------------
export const StyledLineUpHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHeaderImg = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 38px;
  margin-right: 38px;
  color: white;
`;

export const Title = styled.img`
  width: 100%;
  height: auto;
  /* margin-bottom: 62px; */
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

export const StyledHeaderVector = styled.img`
  position: ${(props) => `${props.position}` || "static"};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  align-self: ${(props) => `${props.alignSelf}` || null};
  justify-self: ${(props) => `${props.justifySelf}` || null};
  margin-top: ${(props) => `${props.marginTop}` || null};
  left: ${(props) => `${props.left}` || null};
  color: white;
`;

export const StyledLineUpBtnSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 72px;
  overflow-x: auto;
  align-items: center;
`;

export const StyledLineUpBtn = styled.button`
  cursor: crosshair;
  box-sizing: border-box;
  font-family: "Yapari wide";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 29px 8px;
  gap: 10px;
  height: 70px;
  background: #000000;
  border: 3px solid #ffffff;
  
  border-radius: 58px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  color: #ffffff;
  transition: all 0.5s ease;
  &.selected {
    background: url("/texture.png");
    color: black;
    box-shadow: 0px 0px 20px rgba(211, 207, 255, 0.7);
  }
  &:hover, .selected {
    /* background: #ffffff; */
    background: url("/texture.png");
    color: black;
    box-shadow: 0px 0px 20px rgba(211, 207, 255, 0.7);
  }
`;

//---------------- BODY  -----------------------
export const StyledLineUpBody = styled.section`
  height: auto;
  margin-bottom: 135px;
  margin-top: 90px;

  display: flex;
  flex-direction: row;
`;

export const StyledFullLineUpList = styled.p`
  font-family: "Yapari Wide";
  font-weight: 600;
  line-height: 62px;
  font-size: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 32px;
    line-height: 80px;
  }

  span {
    transition: text-shadow 0.2s ease;
    
  }
    span:hover {
      text-shadow: 0 0 6px #fff;
    }
`;

export const StyledHighLight = styled.span`
  font-family: "Yapari Wide";
  font-weight: 800;
  &:hover {

  }
  text-shadow: 0 0 6px #fff;
`;

export const StyledTextHighLight = styled.span`
  font-family: "Yapari Expanded";
  font-weight: 700;
`;

export const StyledBodyBtnSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledArrowBtn = styled.button`
  width: 70px;
  height: 70px;
  margin-top: 21px;
  margin-bottom: 21px;
  background-color: black;
  background-image: url(${(props) => `${props.src}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

// ------------ FOOTER  --------------------
export const StyledLineUpFooter = styled.section`
  display: flex;
  flex-direction: column;
`;

// ----------- EXTRA  -----------------
export const StyledLineUpLogo = styled.img`
  width: 44px;
  height: 50px;
  margin-bottom: 29px;
`;

export const StyledEyeIcon = styled.img`
  width: 44px;
  height: 25px;
  margin-left: 16px;
  margin-right: 16px;
`;

// ------------ LINE UP DECORATOR --------------
export const Decorator = styled.img`
  display: none;
  position: absolute;
  transform: translateY(-50%);
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  left: ${(props) => `${props.left}` || null};
  top: ${(props) => `${props.top}` || null};
  bottom: ${(props) => `${props.bottom}` || null};
  right: ${(props) => `${props.right}` || null};
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;
