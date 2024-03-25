import React from "react";
import styled from "styled-components";
import Button from "./Button";
import theme, { breakpoints } from "../../utils/theme";
import dclLogo from "../images/logo-dcl.svg";
import heroPolygon from "../images/hero/polygon2.svg";
import hero1 from "../images/hero/hero1.svg" 
import hero2 from "../images/hero/hero2.svg" 
import hero3 from "../images/hero/hero3.svg" 
import hero4 from "../images/hero/hero4.svg" 
import hero5 from "../images/hero/hero5.svg" 
import herobg from "../images/hero/herobg.png"
import herotitle from "../images/hero/logohero.png"
import new_logo from "../images/logo_new.png"
import { Container } from "./Container";

const Hero = () => {
  return (
    <StyledHero sx={{ height: "100vh", display: "flex", alignItems: "center", }}>
      <Container>
        <LogoContainer>
          <div style={{'justify-content': 'center', 'display': 'flex', gap: "24px"}}>
            <HeroIcon src={hero1} />
            <HeroIcon src={hero2} />
            <HeroIcon src={hero3} />
            <HeroIcon src={hero4} />
            <HeroIcon src={hero5} />
          </div>
          {/* <img src="dmf-logo-white.png" width="100%" /> */}
          <img src={herotitle} width="100%" />
        </LogoContainer>
        <EventDetails>
        <EventData>
            <EventDataItem>
              <DateComponent className="event-data">
                <DateHighlight>
                  MAR. 26-29 • 
                </DateHighlight>
                <DateLocation> ART WEEK PLAZA, [61,61]</DateLocation>
              </DateComponent>
            </EventDataItem>
          </EventData>
          {/* <EventData>
            <EventDataItem>
              <DateComponent className="event-data">
                <p>
                  NOV. 16-18 • <DateHighlight>12PM UTC</DateHighlight> •
                </p>
                <DateLocation>FESTIVAL LAND, [-62,58]</DateLocation>
              </DateComponent>
            </EventDataItem>
          </EventData> */}
          <EventDataBottom>
            <EventDataItem>
              <a href="https://play.decentraland.org/" target="_blank">
                <StyledLogo alt={"Decentraland Logo"} src={new_logo} />
              </a>
            </EventDataItem>
            <EventDataItem>
              <SaveTheDate
                href="https://decentraland.org/play/?position=61%2C60&utm_org=dcl&utm_source=landing&utm_campaign=dclaw24"
                target="_blank"
              >
                <p style={{ fontSize: "20px" }}>JUMP IN</p>{" "}
                <Polygon src={heroPolygon} />
              </SaveTheDate>
            </EventDataItem>
          </EventDataBottom>
        </EventDetails>
      </Container>
    </StyledHero>
  );
};

const HeroIcon = styled.img`
  width: 72px;
  height: 72px;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(${herobg});
  background-size: cover;
  background-position: center;
`;

export const LogoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 72px;
@media screen and (min-width: ${breakpoints.md}) {
  
}
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const EventDetails = styled.div`
  position: relative;
  // border-left: 3px solid white;
  // border-right: 3px solid white;

  @media screen and (min-width: ${breakpoints.md}) {
    
  }
`;

const EventData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 9px;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

const EventDataBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 32px;
    flex-direction: row;
  }
`;

const EventDataItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  text-align: center;

  @media screen and (min-width: ${breakpoints.md}) {
    flex: 1 0 50%;
    text-align: left;
  }
`;

const DateComponent = styled.section`
  font-size: 9px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 24px;
  font-family: "Gothic";
  padding-left: 0;
  width: 100%;
  text-align: justify;
  
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 19px;
    text-align: justify;
  }
  
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 24px;
    letter-spacing: 4px;
    line-height: 120%;
    width: 100%;
  }
`;

const DateHighlight = styled.span`
  // color: ${theme.accent};
  color: #FFA450;
  font-family: "HackerNoon";
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: justify;
  
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 5px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 42px;
    line-height: 46px;
    letter-spacing: 7px;
  }
`;

const DateLocation = styled.span`
  font-family: "Gothic";
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: justify;
  
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 5px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 42px;
    line-height: 46px;
    letter-spacing: 7px;
  }
`;

const StyledLogo = styled.img`
  display: none;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
    max-width: 60%;
    text-align: center;
  }
`;

const SaveTheDate = styled(Button)`
padding: 16px 24px;
  width: 100%;
`;

const Decorator = styled.img`
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

const WhiteRabbit = styled.img`
  width: 48px;
  box-sizing: border-box;
  padding-right: 8px;
  margin-right: 8px;
  border-right: 4px solid ${theme.accent};
  
  @media screen and (min-width: ${breakpoints.md}) {
    width: 52px;
    padding-right: 16px;
    margin-right: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-left: 16px;
  }
`;

export default Hero;
