import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../utils/theme";
import { StaticImage } from "gatsby-plugin-image";
import { Twitter } from "../components/icons/Vector-Twitter.js";
import { Discord } from "../components/icons/Vector-Discord.js";
import { OpenSea } from "../components/icons/Vector-openSea.js";
import { Instagram } from "../components/icons/Vector-Instagram.js";
import border from "../images/navbar-border.png";

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const Links = [
    {
      label: "ABOUT",
      targetId: "about",
    },
    {
      label: "LINE UP",
      targetId: "lineup",
    },
    {
      label: "STAGES",
      targetId: "stages",
    },
    {
      label: "EXPERIENCES",
      targetId: "experiences",
    },
    {
      label: "SITEMAP",
      targetId: "sitemap",
    },
    {
      label: "FAQ",
      targetId: "faq",
    },
    // {
    //   label: 'SPONSORS',
    //   targetId: 'sponsors'
    // },
  ];

  const scrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView();
    }
  };
  return (
    <Header>
      <StyledNavbar className="navbar">
        <Nav>
          <LogoContainer href="#">
            <StaticImage src={"./../images/logo-navbar.svg"} height={140} />
          </LogoContainer>

          <div>
            <MenuList>
              {Links.map((link, i) => (
                <MenuItem key={i}>
                  <a
                    onClick={() => {
                      scrollTo(link.targetId);
                    }}
                  >
                    {link.label}
                  </a>
                </MenuItem>
              ))}
            </MenuList>
          </div>
          <div>
            <SocialIcon
              href="https://twitter.com/decentraland"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/decentraland_foundation/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </SocialIcon>
            <SocialIcon
              href="https://decentraland.org/discord/"
              target="_blank"
              rel="noreferrer"
            >
              <Discord />
            </SocialIcon>
          </div>
        </Nav>
      </StyledNavbar>
      <StyledBorder src={border} />
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 100;
`

const StyledNavbar = styled.section`
  position: relative;
  border-bottom: solid 5px ${theme.white};
  display: flex;
  justify-content: space-between;
`;

const SocialIcon = styled.a`
  margin-left: 24px;
  cursor: crosshair;
  svg {
    width: 24px;
    height: 24px;

    path {
      transition: fill 0.4s ease;
    }

    :hover {
      path {
        fill: ${theme.accent};
      }
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 18px 62px;
  }
`;

const LogoContainer = styled.a`
  cursor: crosshair;
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
`

const MenuItem = styled.li`
  font-family: "Gothic";
  font-size: 16px;
  font-weight: 700;
  padding-left: 40px;
  letter-spacing: 2px;
  cursor: crosshair;

  a {
    transition: color 0.5s ease;
  }

  a:hover {
    color: ${theme.accent};
  }
`;

const MenuList = styled.ul`
  display: none;
  justify-content: space-between;
  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  background-image: url('/navbar-border.png');
`

export default Navbar;