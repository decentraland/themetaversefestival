import React, {useEffect, useState} from "react"
import styled from 'styled-components';
import { breakpoints } from "../../utils/theme";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const Links = [
        {
          label: 'ABOUT',
          targetId: 'about'
        },
        {
          label: 'LINEUP',
          targetId: 'lineup'
        },
        {
          label: 'MAP',
          targetId: 'map'
        },
        // {
        //   label: 'MERCH',
        //   targetId: 'merch'
        // },
        {
          label: 'SPONSORS',
          targetId: 'sponsors'
        },
      ];
    
      const scrollTo = (targetId) => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView();
        }
      };
  return (
    <StyledNavbar className="navbar">
        <nav>
            <ul>
            {Links.map((link, i) => (
              <li key={i}>
                <a onClick={() => {scrollTo(link.targetId)}}>{link.label}</a>
              </li>
            ))}
            </ul>
        </nav>
        <div className="mobile-toggle" onClick={() => {setIsMobileMenuOpen(!isMobileMenuOpen)}}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`mobile-navbar ${isMobileMenuOpen ? 'open' : ''}`}>
          <StaticImage onClick={() => {setIsMobileMenuOpen(!isMobileMenuOpen)}} className="close-menu-icon" src={'./../images/close_menu_icon.png'} alt="close" title="close" />
          <ul>
            {Links.map((link, i) => (
                <li key={i}>
                <a onClick={() => {
                    scrollTo(link.targetId);
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}>{link.label}</a>
                </li>
            ))}
            </ul>
        </div>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.section`
    width: 100%;
    background: black;
    z-index: 100;
    position: fixed;
    @media screen and (max-width: ${breakpoints.md}) {
      bottom: 0;
      height: 52px;
      background: #EEFE56;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:before {
      position: absolute;
      bottom: 0;
      height: 1px;
      width: 100%;
      background: #d53fc4;
      box-shadow: 0 0 2px 0.3px #d53fc4;
      content: '';
      @media screen and (max-width: ${breakpoints.md}) {
        display: none;
      }
    }
    .mobile-toggle {
      display: none;
      width: 80px;
      @media screen and (max-width: ${breakpoints.md}) {
        display: unset;
      }
      div {
        width: 80px;
        height: 1px;
        background: black;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .mobile-navbar {
      width: 100vw;
      height: 100vh;
      bottom: -100vh;
      position: absolute;
      background: #EEFE56;
      opacity: 0;
      pointer-events: none;
      transition: 0.5s ease-in-out all;
      padding: 24px;
      .close-menu-icon {
        width: 50px;
        margin-bottom: 30px;
      }
      ul {
        li {
          font-size: 64px;
          padding: 10px 0;
          border-bottom: 1px solid black;
          @media screen and (max-width: ${breakpoints.md}) {
            font-size: 48px;
          }
          a {
            -webkit-text-stroke: 1px black;
            color: transparent;
            &:hover {
              color: black;
            }
          }
        }
      }
      &.open {
        bottom: 0;
        opacity: 1;
        pointer-events: unset;
      }
    }
    nav {
      ul {
        display: flex;
        justify-content: space-between;
        padding: 12px 80px;
        @media screen and (max-width: ${breakpoints.md}) {
          display: none;
        }
        li {
          font-size: 23px;
          a {
            cursor: pointer;
            font-family: 'SpaceMono';
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
              }
          }   
      }
  }
`;

export default Navbar;
