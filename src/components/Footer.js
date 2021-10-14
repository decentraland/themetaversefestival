import React, {useEffect, useState} from "react"
import styled from 'styled-components';
import Discord from './../images/social_links/logo_discord.png';
import Reddit from './../images/social_links/logo_reddit.png';
import Github from './../images/social_links/logo_github.png';
import Twitter from './../images/social_links/logo_twitter.png';
import { breakpoints } from "../../utils/theme";

const Footer = (props) => {
    const socialLinks = [
        {
            name: 'Discord',
            file: Discord,
            url: 'https://discord.com/invite/JV8CbCx'
        },
        {
            name: 'Reddit',
            file: Reddit,
            url: 'https://www.reddit.com/r/decentraland/'
        },
        {
            name: 'Github',
            file: Github,
            url: 'https://github.com/decentraland'
        },
        {
            name: 'Twitter',
            file: Twitter,
            url: 'https://twitter.com/decentraland'
        },
    ]
  return (
    <StyledFooter>
        <div className="primary-links">
            <a href="MusicFestivalGeneralInfo.pdf" download>Legal Information</a>
            <a href="MusicFestivalGeneralInfo.pdf" download>Press Kit</a>

        </div>
        <div className="social-links">
            <ul className="social-links-list">
                {socialLinks.map((socialLink) => (
                    <li key={socialLink.name} className="">
                        <a target="_blank" href={socialLink.url}>
                            <img src={socialLink.file} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="copyright">
            <a href="https://decentraland.org/">
                © 2021 Decentraland
            </a>
        </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    background: #F7F2ED;
    padding: 38px 80px 38px;
    display: flex;
    color: black;
    width: 100%;
    align-items: center;
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
        align-items: baseline;
        padding: 12px 24px 52px;
    }
    a {
        font-family: 'Inter';
        color: black;
    }
    .primary-links {
        a {
            margin-right: 30px;
        }
        @media screen and (max-width: ${breakpoints.md}) {
            margin-bottom: 24px;
        }
    }
    .social-links {
        margin-left: auto;
        @media screen and (max-width: ${breakpoints.md}) {
            margin-left: unset;
        }
        .social-links-list {
            display: flex;
            li {
                margin-left: 30px;
                @media screen and (max-width: ${breakpoints.md}) {
                    margin-left: unset;
                    margin-right: 24px;
                }
                a {
                    img {
                        width: 32px;
                        opacity: 0.7;
                    }
                }
            }
        }
    }
    .copyright {
        margin-left: 77px;
        color: black;
        font-family: 'Inter';
        @media screen and (max-width: ${breakpoints.md}) {
            margin-left: unset;
            margin-top: 24px;
            margin-bottom: 24px;
        }
    }
`;

export default Footer;
