import React from "react";
import styled from "styled-components";
import Button from "./Button";
import theme, { breakpoints } from "../../utils/theme";
import dclLogo from "../images/logo-dcl.svg";
import starBust from "../images/Starbust1.png";
import polygon from "../images/STD-polygon.svg";
import stage1 from "../images/stage1.png"
import stage2 from "../images/stage2.png" 
import stage3 from "../images/stage3.png" 
import stage4 from "../images/stage4.png" 
import stage5 from "../images/stage5.png" 
import { Container } from "./Container";

const Hero = () => {
  return (
    <StyledHero sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container>
        <LogoContainer>
          <div style={{'justify-content': 'center', 'display': 'flex'}}>
            <img src={stage1} width="15%" />
            <img src={stage2} width="15%"/>
            <img src={stage3} width="15%"/>
            <img src={stage4} width="15%"/>
            <img src={stage5} width="15%"/>
          </div>
          <img src="dmf-logo-white.png" width="100%" />

        </LogoContainer>
        <EventDetails>
          <EventData>
            <EventDataItem>
              <DateComponent className="event-data">
                <p>
                  NOV. 16-18 • <DateHighlight>12PM UTC</DateHighlight> •
                </p>
                <DateLocation>FESTIVAL LAND, [-62,58]</DateLocation>
              </DateComponent>
            </EventDataItem>
          </EventData>
          <EventDataBottom>
            <EventDataItem>
              <a href="https://play.decentraland.org/" target="_blank">
                <StyledLogo alt={"Decentraland Logo"} src={dclLogo} />
              </a>
            </EventDataItem>
            <EventDataItem>
              <SaveTheDate
                href="https://events.decentraland.org/event/?id=97aff492-b4b9-4ba1-bd08-bfa7e32be036"
                target="_blank"
              >
                <p style={{ fontSize: "20px" }}>RSVP</p>{" "}
                <Polygon src={polygon} />
              </SaveTheDate>
            </EventDataItem>
          </EventDataBottom>
          <Decorator
            src={starBust}
            top="50%"
            left="-64px"
            height="62px"
          />
          <Decorator
            src={starBust}
            top="50%"
            right="-64px"
            height="62px"
          />
        </EventDetails>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
margin-bottom: 24px;
@media screen and (min-width: ${breakpoints.md}) {
  padding: 0 33px;
}
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const EventDetails = styled.div`
  position: relative;
  padding: 0 24px;
  border-left: 3px solid white;
  border-right: 3px solid white;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0 121px;
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
  color: ${theme.accent};
`;

const DateLocation = styled.span`
  font-family: "Gothic";
  font-size: 13px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: justify;
  
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 26px;
    line-height: 72px;
    letter-spacing: 5px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 32px;
    line-height: 72px;
    letter-spacing: 11px;
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
