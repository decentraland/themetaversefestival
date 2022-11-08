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
                #DCLMVMF22 is a four-day celebration of <TextHighlight>music</TextHighlight>, <TextHighlight>innovation</TextHighlight>, <TextHighlight>culture</TextHighlight> and <TextHighlight>creativity</TextHighlight>, held online in the virtual social world of Decentraland. The festival is open for any and all to attend, no ticket or VR headset required.
                <br />
                <br />
                Prepare yourself for a musical experience unlike any you’ve attended before:
                <ul>
                  <li><TextHighlight>Explore the futuristic</TextHighlight>, <TextHighlight>cyberpunk festival grounds </TextHighlight>and become familiar with 15 different stages of the like you’d never see IRL</li>
                  <li> Check the schedule of <TextHighlight>150+ global artists</TextHighlight> from across genres featuring names such as <TextHighlight>Ozzy Ozbourne</TextHighlight>, <TextHighlight>Soulja Boy</TextHighlight>, <TextHighlight>Dillon Fancis</TextHighlight>, and main headliner <TextHighlight>Björk</TextHighlight> who’s closing act you will NOT want to miss</li>
                  <li>Dive into numerous Decentraland <TextHighlight><a href="#experiences">experiences</a></TextHighlight> as you peek into portaloos, take on the quest for a backstage pass, chase a white rabbit, and feel connected at the Tower of Babel</li>
                  <li>And much more!</li>
                </ul>
                <br />
                <br />
                So get yourself some kaleidoscopic Wearables and killer dance Emotes in the Marketplace Festival Tab and jump into Decentraland on November 10.

              </AboutBodyParagraph>
            </AboutBodyText>
          </Aboutbody>
          <AboutButtonContainer href="https://events.decentraland.org/event/?id=7148716b-ff25-4d5f-8267-55fed7ab15bc" target="_blank">
            <AboutButtonLink>
              RSVP to the festival
              <ButtonDecorator src={Logo} />
            </AboutButtonLink>
          </AboutButtonContainer>
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
  object-fit: contain;
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
letter-spacing: 0.1em;
font-weight: 300;
margin-left: 8px;
@media screen and (min-width: ${breakpoints.md}) {
  margin-left: 120px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  padding-right: 64px;
  max-width: 700px;
}
`;

const AboutBodyParagraph = styled.p`
  font-family: "Gotham", sans-serif;
  font-size: 16px;
  line-height: 21px;

  ul {
    list-style: inside;
    padding: 16px;

    li {
      font-family: Gotham;
      padding: 16px 0;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }
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
  font-family: "Gotham", sans-serif;
  color: ${theme.accent};
  font-weight: 700;

  a {
    font-family: "Gotham", sans-serif;
    color: ${theme.accent};
    font-weight: 700;
    text-decoration: underline;
  }
`;

const AboutButtonContainer = styled.a`
  margin-top: 32px;
  width: 100%;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 165px;
  }
`;

const AboutButtonLink = styled.button`
  position: relative;
  width: 100%;
  text-transform: uppercase;
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
  margin-top: 48px;

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
    padding: 48px 72px;
    
    img {
      -webkit-animation: unset;
      -moz-animation: unset;
      -ms-animation: unset;
      -o-animation: unset;
      animation: unset;
    }
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
