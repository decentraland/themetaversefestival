import React from "react"
import styled from 'styled-components';
import Button from './../components/Button';
import AboutImage from './../images/about.png'
import { breakpoints } from "../../utils/theme";

const About = (props) => {
  return (
    <StyledAbout id="about" className="what-is-metaverse">
        <div className="about-content">
            <h2>Welcome to the <br/>Metaverse Festival</h2>
            <p>
                A four-day celebration of music, culture and creativity in the virtual social world of Decentraland, the Metaverse Festival is a grand collision of light, sound and portable toilets.
            </p>
            <p>
                It’s the first event of its kind – a fully decentralized celebration of music that offers a weird and wonderful brew of world-class headline acts, mind blowing stages, games, exclusive artist merch, collectibles and more.               
            </p>
            <p>
                So, on October 21, dress your avatar in your very best wearables and jump into an experience like no other.
            </p>
            <p>
                And if this is your first time in the virtual world, be sure to take a look at our Festival FAQs, which explain how you can be a part of the fun.
            </p>
            <p>
                We can’t wait to see you in the metaverse!
            </p>
            <Button download href={'MusicFestivalFAQs.pdf'} label={'⟶ Festival FAQ'} type={'black'}/>
        </div>
        <div className="about-image-container">
            <div className="about-image" style={{backgroundImage: `url('${AboutImage}')`}}/>
            {/* <img src={AboutImage} alt="Welcome to Metaverse"/> */}
        </div>
    </StyledAbout>
  )
}

const StyledAbout = styled.div`
    background: #F7F2ED;
    padding: 52px 70px;
    display: flex;
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
        padding: 52px 24px;
    }
    .about-content {
        width: 50%;
        position: relative;
        z-index: 1;
        @media screen and (max-width: ${breakpoints.md}) {
            width: 100%;
        }
        h2, p {
            color: black;
        }
        h2 {
            font-size: 81px;
            margin-bottom: 72px;
            font-family: 'SpaceMono';
            text-transform: uppercase;
            font-weight: 400;
            @media screen and (max-width: ${breakpoints.l}) {
                font-size: 62px;
            }
            @media screen and (max-width: ${breakpoints.md}) {
                font-size: 54px;
            }
        }
        p {
            font-size: 16px;
            line-height: 23px;
            margin-bottom: 22px;
            font-family: 'Inter';
        }
        .button {
            margin-top: 120px;
            border: 1px solid #B836A9;
        }
    }
    .about-image-container {
        width: 50%;
        display: flex;
        align-items: baseline;
        justify-content: center;
        position: relative;
        @media screen and (max-width: ${breakpoints.md}) {
            height: 300px;
            width: 100%;
            left: 20px;
        }
        .about-image {
            width: 100%;
            height: 100%;
            position: absolute;
            background-size: 90%;
            background-repeat: no-repeat;
            background-position: top right;
            position: relative;
            top: 30px;
            right: 30px;
            @media screen and (max-width: ${breakpoints.md}) {
                background-size: contain;
                background-position: center;
            }
        }
        @media screen and (max-width: ${breakpoints.md}) {
            margin-top: 80px;
        }
    }
`;

export default About
