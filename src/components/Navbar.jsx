import React, { useState } from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../utils/theme";
import { Twitter } from "../components/icons/Vector-Twitter.js";
import { Discord } from "../components/icons/Vector-Discord.js";
import { Instagram } from "../components/icons/Vector-Instagram.js";
import border from "../images/navbar-border.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Links = [
    {
      label: "ABOUT",
      targetId: "about",
    },
    {
      label: "SCHEDULE",
      targetId: "lineup",
    },
    {
      label: "GALLERIES",
      targetId: "galleries",
    },
    {
      label: "EXPERIENCES",
      targetId: "experiences",
    },
    {
      label: "MAP",
      targetId: "sitemap",
    },
    {
      label: "FAQ",
      targetId: "faq",
    },
  ];

  const scrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView();
    }
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Header>
      <Nav>
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
        <MenuMobile>
          {isMobileMenuOpen ? (
            <CloseMenuIcon onClick={handleMobileMenu} size={32} />
          ) : (
            <OpenMenuIcon onClick={handleMobileMenu} size={32} />
          )}
          {isMobileMenuOpen && (
            <MenuListMobile
              initial={{ x: 180 }}
              animate={{ x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {Links.map((link, i) => (
                <MenuItemMobile key={i}>
                  <a
                    onClick={() => {
                      scrollTo(link.targetId);
                      handleCloseMobileMenu();
                    }}
                  >
                    {link.label}
                  </a>
                </MenuItemMobile>
              ))}
            </MenuListMobile>
          )}
        </MenuMobile>
      </Nav>
    </Header>
  );
};

const MenuListMobile = styled(motion.ul)`
  display: flex;
  background-color: black;
  border: 2px solid ${theme.accent};
  border-top: none;
  width: 250px;
  height: 30vh;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 16px;
  position: fixed;
  top: 85px;
  padding: 16px;
  right: 0;
`;

const MenuItemMobile = styled.li`
  font-family: "Gothic";
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;

  a {
    transition: color 0.5s ease;
  }

  a:hover {
    color: ${theme.accent};
  }
`;

const MenuMobile = styled.div`
  display: block;

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const OpenMenuIcon = styled(AiOutlineMenu)`
  cursor: pointer;
`;

const CloseMenuIcon = styled(AiOutlineClose)`
  cursor: pointer;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  z-index: 100;
  border-bottom: solid 3px ${theme.accent};
`;

const SocialIcon = styled.a`
  margin-left: 24px;
  cursor: pointer;
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
  justify-content: end;
  align-items: center;
  padding: 24px 24px;
  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: center;
    padding: 28px 62px;
  }
`;

const LogoContainer = styled.a`
  cursor: pointer;
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
`;

const MenuItem = styled.li`
  font-family: "Gothic";
  font-size: 16px;
  font-weight: 700;
  padding-left: 40px;
  letter-spacing: 2px;
  cursor: pointer;

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
  background-image: url("/navbar-border.png");
`;

export default Navbar;
