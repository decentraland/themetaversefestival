import React from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import Logo from "../../images/logo-navbar.svg";
import EyeTriengleIcon from "../../images/eye-triangle-icon.svg";
import sideIcon from "../../images/stage3.png";
import starBust5 from "../../images/Starbust5.png";
import starBust6 from "../../images/Starbust6.png";
import starBust7 from "../../images/Starbust7.png";
import { Container } from "../Container";
import { StaticImage } from 'gatsby-plugin-image'; 

const About = (props) => {
  return (
    <Section id="about">
      <Container>        
        <StyledAbout>          
          <AboutHeader>
            <AboutTitle>DECENTRALAND M<MVFont>U</MVFont>SIC F<MVFont>E</MVFont>STIVAL</AboutTitle>            
          </AboutHeader>
          <Aboutbody>
            <AboutBodyImgContainer>             
                <StarBustSideIcon src={starBust5} width="80px" height="80px" />
                <StarBustSideIcon src={starBust6} width="80px" height="80px" />
                <StarBustSideIcon src={starBust7} width="80px" height="80px" />             
            </AboutBodyImgContainer>
            <AboutBodyText>
              <AboutBodyParagraph>
                Prepare to discover an alternative reality inspired by the themes of <TextHighlight>radical self-expression, communal growth, and artistic renewal</TextHighlight> in the 3rd, most innovative edition of Decentraland Music Festival yet!
                <br />
                <br />
                With stages and experiences built by <TextHighlight>16 award-winning teams</TextHighlight> of virtual creators and game designers, #DCLMF23 will showcase the latest in immersive music experience, defining what music can be in the virtual world.
                <br />
                <br />
                Stepping boldly towards the future, <TextHighlight>#DCLMF23</TextHighlight> leaves behind the banner of Metaverse Music Festival and traditional mainstream artists to offer only the most pioneering, digital-native performances with the spotlight fully on Decentraland’s community.
                <br />
                <br />
                Free for all to attend with no VR headset required, #DCLMF23 will feature:
                <ul>
                  <li><TextHighlight>80+ interactive performances</TextHighlight> over 3 days from the world’s most innovative artists & independent labels</li>
                  <li><TextHighlight>5 main stages & 10 new games and immersive experiences</TextHighlight> designed by award-winning virtual creators</li>
                  <li>Headline sets by OG digital pioneers like Cora Novoa, Trick Daddy, GuccieToe, Bufalo, Glitch Rave, Steve Sai, and others</li>
                  <li>And much more!</li>
                </ul>
                <br />
              </AboutBodyParagraph>
            </AboutBodyText>
          </Aboutbody>
          <AboutButtonContainer href="https://decentraland.beehiiv.com/subscribe?utm_source=musicfestival.decentraland.org&utm_medium=organic&utm_campaign=DCLMF23" target="_blank">
            <AboutButtonLink>
              Sign up for the Decentraland Newsletter
            </AboutButtonLink>
          </AboutButtonContainer>
        </StyledAbout>
      </Container>
    </Section>
  );
};

const MVFont = styled.span `
  font-family: 'SaintRegular';
}`

const AboutTitle = styled.h2`
  font-family: Gothic;
  font-size: 40px;
  text-align: center;
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 60px;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 60px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 60px;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    font-size: 60px;
  }
`

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
  align-items: center;
  margin-bottom: 56px;
`;

const SideIcon = styled.img`
  width: 150px;
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`

const Aboutbody = styled.section`
  display: flex;
`;

const StarBustSideIcon = styled.img`
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
  font-family: "Gothic", sans-serif;
  font-size: 16px;
  line-height: 21px;

  ul {
    list-style: inside;
    padding: 16px;

    li {
      font-family: Gothic;
      padding: 16px 0;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }
`;

const AboutBodyImgContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;  
  margin: 45px 0;
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
  font-family: "Gothic", sans-serif;
  color: ${theme.accent};
  font-weight: 700;

  a {
    font-family: "Gothic", sans-serif;
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
  font-family: "Gothic";
  padding: 16px 32px;
  border: 4px solid ${theme.white};
  border-radius: 120px;
  font-weight: 700;
  transition: all 0.4s ease;
  backdrop-filter: blur(2px);
  cursor: pointer;
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
    background-color: #f37877;
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
