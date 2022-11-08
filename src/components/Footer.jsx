import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Discord } from "./icons/Vector-Discord.js";
import { Twitter } from "./icons/Vector-Twitter.js";
import { OpenSea } from "./icons/Vector-openSea";
import theme, { breakpoints } from "../../utils/theme";
import dclLogo from "../images/logo-dcl.svg";
import { Instagram } from "./icons/Vector-Instagram.js";

const Footer = (props) => {
  const pages = [
    {
      name: "TERMS & SERVICES",
      url: "https://decentraland.org/terms/",
    },
    {
      name: "PRIVACY POLICIES",
      url: "https://decentraland.org/privacy/"
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      file: Twitter,
      url: "https://twitter.com/decentraland",
    },
    {
      name: "Instagram",
      file: Instagram,
      url: "https://www.instagram.com/decentraland_foundation/",
    },
    {
      name: "Discord",
      file: Discord,
      url: "https://decentraland.org/discord",
    },
  ];
  
  return (
    <StyledFooter>
      <StyledLogoContainer>
        <a href="https://play.decentraland.org/" target="_blank">
          <StyledLogo alt={"Decentraland Logo"} src={dclLogo} />
        </a>
      </StyledLogoContainer>
      <StyledLinks>
        <StyledLinksList>
          {pages.map((page) => (
            <PageLink key={page.name}>
              <a target="_blank" href={page.url}>
                {page.name}
              </a>
            </PageLink>
          ))}
        </StyledLinksList>
      </StyledLinks>
      <StyledSocialLinksContainer>
        <StyledSocialLinks>
          {socialLinks.map(({ name, url, file: File }) => (
            <StyledSocialLink key={name}>
              <a height={100} target="_blank" href={url}>
                <File />
                {/* <img src={socialLink.file} width={24} height={24} /> */}
              </a>
            </StyledSocialLink>
          ))}
        </StyledSocialLinks>
      </StyledSocialLinksContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 24px;
  backdrop-filter: blur(32px);
  @media screen and (min-width: ${breakpoints.l}) {
    padding: 48px 62px 40px;
    flex-direction: row;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 35px;
  margin-bottom: 32px;
  @media screen and (min-width: ${breakpoints.l}) {
    margin-bottom: unset;
    margin-right: 78px;
  }
`;

const StyledSocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
`;

const StyledLinks = styled.div`
  display: flex;
  flex: 1;
`;

const StyledLinksList = styled.ul`
  display: flex;
  align-items: center;
  vertical-align: center;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.l}) {
    flex-direction: row;
  }
`;

const PageLink = styled.li`
  font-family: "Yapari";
  text-align: center;
  line-height: 22px;
  margin: 16px 0;

  a {
    transition: all 0.4s ease;
    cursor: crosshair;
  }
  a:hover {
    color: ${theme.accent};
  }
  
  @media screen and (min-width:${breakpoints.l}) {
    margin: unset;
    max-width: 160px;
    margin-right: 67px;
    text-align: left;
  }
`;

const StyledSocialLinks = styled.ul`
  display: flex;
  vertical-align: center;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;

  a svg {
    width: 25px;
    height: 25px;
  }

  @media screen and (min-width: )
`;

const StyledSocialLink = styled.li`
margin-left: 20px;
margin-right: 20px;

svg path {
  transition: all 0.4s ease;
}
svg:hover {
  path {
    fill: ${theme.accent};
  }
}
a {
  cursor: crosshair;
}

@media screen and (min-width: ${breakpoints.md}) {
  margin-right: unset;
  margin-left: 40px;
}
`;

export default Footer;
