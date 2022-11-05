import React from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import AboutThinIcon from "../../images/about-thin-icon.png";
import Logo from "../../images/logo-navbar.svg";
import AboutMobileThinIcon from "../../images/about-mobile-thin-icon.png";
import EyeTriengleIcon from "../../images/eye-triangle-icon.svg";
import AboutTitleImg from "../../images/about-title.png";
import Rabbit from "../../images/rabbit.gif";
import { Container } from "../Container";
import ThreeDee from '../ThreeDee';

const About = (props) => {
  return (
    <Section id="about">
      <Container>
        <StyledAbout>
          <AboutHeader>
            {" "}
            <AboutTitle src={AboutTitleImg} />
            <RabbitAnimation src={Rabbit} alt="Follow the white rabbit" width={200} />
          </AboutHeader>
          <Aboutbody>
            <AboutBodyImgContainer>
              <AboutBodyImg>
                <AboutBodyCodebar src={AboutThinIcon} />
                <AboutMobileBodyCodebar src={AboutMobileThinIcon} />
                <AboutBodyIlluminati src={EyeTriengleIcon} width="76px" height="76px" />
              </AboutBodyImg>
            </AboutBodyImgContainer>
            <AboutBodyText>
              <AboutBodyParagraph>
                #DCLMVMF22 is a four-day celebration of{" "}
                <TextHighlight>
                  music, innovation, culture, and creativity,
                </TextHighlight>{" "}
                held online in the virtual social world of Decentraland. The festival is open for any and all to attend, no ticket or VR headset required.
              </AboutBodyParagraph>
              <br />
              <AboutBodyParagraph>
                Prepare yourself for a musical experience unlike any you’ve attended before:
                  <br />
                  <br />
                  -Check the schedule of{" "}<TextHighlight>150+ global artists </TextHighlight> the futuristic, cyberpunk festival grounds and become familiar with 15 different stages of the like you’d never see IRL. 
                  <br />
                  <br />
                  -<TextHighlight>Explore</TextHighlight> from across genres featuring names such as{" "} <TextHighlight>Ozzy Ozbourne, Soulja Boy, Dillon Fancis</TextHighlight>nd main headliner <TextHighlight>Björk</TextHighlight> who’s closing act you will NOT want to miss
                  <br />
                  -<TextHighlight>Explore</TextHighlight> the futuristic, cyberpunk festival grounds and become familiar with 15 different stages of the like you’d never see IRL
                  <br />
                  -Dive into numerous Decentraland <TextHighlight>experiences</TextHighlight> as you peek into portaloos, take on the quest for a backstage pass, chase a white rabbit, and feel connected at the Tower of Babel.
                  <br />
                  -And much more!
              </AboutBodyParagraph>
              <br />
              <AboutBodyParagraph>
                So get yourself some kaleidoscopic Wearables and killer dance Emotes in the Marketplace Festival Tab and jump into Decentraland on <TextHighlight>November 10.</TextHighlight>
              </AboutBodyParagraph>
            </AboutBodyText>
          </Aboutbody>
          <AboutFooter>
            <AboutButtonContainer>
              <AboutButtonLink href="https://play.decentraland.org/?position=-62%2C63&realm=marvel&island=Ic5t9" target="_blank">
                SEE YOU IN THE METAVERSE!
                <ButtonDecorator src={Logo} />
              </AboutButtonLink>
            </AboutButtonContainer>
          </AboutFooter>
        </StyledAbout>
      </Container>
    </Section>
  );
};

const Section = styled.section`
position: relative;
`;

const StyledAbout = styled.div`
  margin: auto;
  padding: 96px 0;
`;

const AboutHeader = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 56px;
`;

const AboutTitle = styled.img`
  width: 100%;
  height: auto;
  @media screen and (min-width: ${breakpoints.md}) {
    width: 90%;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    width: 80%;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    width: 80%;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    width: 70%;
  }
`;

const RabbitAnimation = styled.img`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`

const Aboutbody = styled.section`
  display: flex;
  justify-content: space-between;
`;

const AboutBodyCodebar = styled.img`
  display: none;
  height: 100%;
  padding-bottom: 38px;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

const AboutMobileBodyCodebar = styled.img`
  height: 62vh;
  display: block;

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const AboutBodyIlluminati = styled.img`
  display: none;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
    padding
  }
`;

const AboutBodyText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  line-height: 22.5px;
  letter-spacing: 0.1em;
  @media screen and (min-width: ${breakpoints.md}) {
      font-size: 18px;
      line-height: 27px;
      font-weight: 400;
      padding-right: 64px;
  }
`;

const AboutBodyParagraph = styled.p`
  font-family: "Roboto", sans-serif;
  max-width: 464px;
`;

const AboutBodyImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AboutBodyImg = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 100%;
  padding-right: 40px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 5px 0;
    width: 70px;
    height: 479px;
    margin-left: 8px;
  }
`;

const TextHighlight = styled.span`
  color: ${theme.accent};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const AboutFooter = styled.section`
`;

const AboutButtonContainer = styled.div`
  margin-top: 32px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 72px;
  }
`;

const AboutButtonLink = styled.a`
  unset: all;
  position: relative;
  width: 100%;
  height: auto;
  background: transparent;
  font-size: 12px;
  letter-spacing: 120%;
  font-family: "Yapari Expanded";
  padding: 16px 32px;
  border: 4px solid ${theme.white};
  border-radius: 120px;
  font-weight: 700;
  transition: all 0.4s ease;
  backdrop-filter: blur(2px);
  cursor: crosshair;

  img {
    -webkit-animation: rotating 10s linear infinite;
    -moz-animation: rotating 10s linear infinite;
    -ms-animation: rotating 10s linear infinite;
    -o-animation: rotating 10s linear infinite;
    animation: rotating 10s linear infinite;
  }

  &:hover {
    color: black;
    background: url('/texture.png');
    box-shadow:
          0 0 20px #fff,
          0 0 10px violet,
          0 0 5px blue;

    img {
      -webkit-animation: rotating 10s linear infinite;
      -moz-animation: rotating 10s linear infinite;
      -ms-animation: rotating 10s linear infinite;
      -o-animation: rotating 10s linear infinite;
      animation: rotating 10s linear infinite;
    
      @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 22px;
    padding: 32px 42px;

    img {
      -webkit-animation: unset;
      -moz-animation: unset;
      -ms-animation: unset;
      -o-animation: unset;
      animation: unset;
    }
  }

  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 26px;
    padding: 48px 60px;
  }
`;

const ButtonDecorator = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 27px;
  @media screen and (min-width: ${breakpoints.md}) {
    width: 47px;
    height: 52px;
    top: 0;
    right: -5px;
}
`

export default About;
