import React from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import starBust5 from "../../images/Starbust5.png";
import starBust6 from "../../images/Starbust6.png";
import starBust7 from "../../images/Starbust7.png";
import aboutIcon from "../../images/about/abouticon.svg";
import { Container } from "../Container";

const About = (props) => {
  return (
    <Section id="about">
      <Container>
        <StyledAbout>
          <AboutHeader>
            <AboutTitle>DECENTRALAND ART WEEK</AboutTitle>
          </AboutHeader>
          <Aboutbody>
            {/* <AboutBodyImgContainer>
              <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
              <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
              <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
              <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
              <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
            </AboutBodyImgContainer> */}
            <AboutBodyText>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                  Join us for the <ParagraphSpan>5th edition of Decentraland Art Week</ParagraphSpan> to
                  explore art beyond reality.
                </p>
              </AboutParagraphItem>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                  From <ParagraphSpan>March 26-29</ParagraphSpan>, 2024, you'll discover the infinite potential
                  of art and creativity in new realities. As this year’s
                  festival takes on the theme of "exploration", expect to enter
                  a realm where virtual environments become journeys of
                  discovery... with new Wearables and Emotes to collect on the
                  way!
                </p>
              </AboutParagraphItem>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                  A highlight of Decentraland Art Week is <ParagraphSpan>MESHfair</ParagraphSpan>, the renowned
                  virtual art fair for 3D, metaverse, and VR creators. Curated
                  by leading galleries including Unit London and OFFICE IMPART,
                  MESHfair showcases thirty new immersive works by international
                  artists. On Thursday, March 28, join us for a sparkling Awards
                  Gala to see which MESHfair artist will be awarded the
                  Decentraland Prize.
                </p>
              </AboutParagraphItem>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                  What's more, at Decentraland Art Week you'll experience the
                  unveiling of four new, large-scale galleries. Developed by
                  award-winning teams in response to the theme of exploration,
                  the galleries will host a diverse array of virtual art,
                  interactive installations, and live performances. The full
                  schedule will be announced soon, so stay tuned.
                </p>
              </AboutParagraphItem>
              <AboutParagraphItem>
                <StarBustSideIcon src={aboutIcon} width="40px" height="40px" />
                <p>
                  Join us to explore art beyond the constraints of reality. See
                  you there!
                </p>
              </AboutParagraphItem>
              {/* <AboutBodyParagraph>
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
              </AboutBodyParagraph> */}
            </AboutBodyText>
          </Aboutbody>
          <AboutButtonContainer
            href="https://decentraland.beehiiv.com/subscribe?utm_source=musicfestival.decentraland.org&utm_medium=organic&utm_campaign=DCLMF23"
            target="_blank"
          >
            <AboutButtonLink>
              Sign up for the Decentraland Newsletter
            </AboutButtonLink>
          </AboutButtonContainer>
        </StyledAbout>
      </Container>
    </Section>
  );
};

const AboutParagraphItem = styled.div`
  font-family: "Helvetica";
  display: flex;
  gap: 32px;

  @media screen and (min-width: ${breakpoints.md}) {
    gap: 112px;
  }
`;

const ParagraphSpan = styled.span`
  color: ${theme.accent};
`;

const MVFont = styled.span`
  font-family: 'SaintRegular';
}`;

const AboutTitle = styled.h2`
  font-family: HackerNoon;
  text-shadow: 0px 0px 31px #393939;
  font-size: 32px;
  text-align: center;
`;

const Section = styled.section`
  position: relative;
`;

const StyledAbout = styled.div`
  margin: auto;
  padding: 96px 0;
`;

const AboutHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;
`;

const SideIcon = styled.img`
  width: 150px;
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

const Aboutbody = styled.section`
  display: flex;
`;

const StarBustSideIcon = styled.img`
  display: none;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

const AboutBodyText = styled.div`
  letter-spacing: 0.1em;
  display: flex;
  flex-direction: column;
  gap: 46px;
  font-weight: 300;
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    max-width: 850px;
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
  margin-top: 46px;
  width: 100%;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 10px;
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
  margin-top: 64px;

  img {
    -webkit-animation: rotating 10s linear infinite;
    -moz-animation: rotating 10s linear infinite;
    -ms-animation: rotating 10s linear infinite;
    -o-animation: rotating 10s linear infinite;
    animation: rotating 10s linear infinite;
  }

  &:hover {
    color: black;
    background-color: ${theme.accent};
    box-shadow: 0 0 20px #fff, 0 0 10px violet, 0 0 5px blue;

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
    padding: 29px 72px;

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
`;

export default About;
