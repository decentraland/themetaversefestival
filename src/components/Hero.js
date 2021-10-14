import React, {useEffect, useState} from "react"
import styled from 'styled-components';
import {StaticImage} from 'gatsby-plugin-image';
import Button from './Button';
import Countdown from './Countdown';
import { breakpoints } from "../../utils/theme";
import { RiMailSendLine } from 'react-icons/ri'

const Hero = (props) => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        postEmail('https://decentraland.org/subscribe', {
            'email': email
        }).then(data => {
            console.log(data);
        })
        console.log('Email submitted');
    };

    const onInputChange = (e) => {
        setEmail(e.target.value);
    };

    async function postEmail(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return response.json();
    };



  return (
    <StyledHero>
        <StaticImage placeholder={'none'} backgroundColor={'black'} objectFit={'contain'} loading={'eager'} className="index-hero-logo" alt={'Metaverse Festival'} src={'./../images/logo-metaverse.png'} />
        <div className="hero-content">
            <Countdown />
            <section className="event-data">
            <p>OCT. 21-24 <br/>•08PM UTC•</p>
            <p>FESTIVAL LAND,<br/>[50, 70]</p>
            <p>©DECENTRALAND</p>
            </section>
            <form onSubmit={handleSubmit}>
                <input placeholder={'Get the latest festival news'} value={email} onChange={onInputChange} type={'email'} required />
                <button type={'submit'}>
                    <RiMailSendLine size={25}/>
                </button>
            </form>
        </div>
    </StyledHero>
  )
}

const StyledHero = styled.div`
    min-height: 590px;
    padding: calc(69px + 54px) 0 69px;
    display: flex;
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
        padding: 0 24px 69px;
    }
    .index-hero-logo {
        width: 50%;
        @media screen and (max-width: ${breakpoints.md}) {
            margin: 0 auto;
            min-width: 300px;
            max-width: 440px;
            margin-bottom: 30px;
        }
    }
    .hero-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 33px;
        align-items: baseline;
        margin: 0 auto;
        @media screen and (max-width: ${breakpoints.md}) {
            text-align: center;
            /* align-items: center; */
            width: 100%;
            max-width: 440px;
            align-items: center;
        }
        .event-data {
            font-size: 52px;
            p {
                -webkit-text-stroke: 1px white;
                line-height: 64px;
                color: white;
                white-space: nowrap;
                br {
                    display: none;
                }
                @media screen and (max-width: ${breakpoints.l}) {
                    /* text-align: center; */
                    min-width: unset;
                    font-size: 33px;
                    line-height: 46px;
                }
                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: 26px;
                    line-height: 40px;
                    br {
                        display: none;
                    }
                }
            }
        }
        .latest-news-wrapper {
          display: flex;
          justify-content: center;
          padding: 36px 0 74px;
        }
        form {
            display: flex;
            margin-top: 30px;
            input {
                background: black;
                height: 60px;
                border-radius: 100px;
                outline: none;
                border: 1px solid #B836A9;
                margin-right: 16px;
                width: 300px;
                font-family: 'Inter';
                font-size: 16px;
                padding: 0 32px;
                z-index: 99;
                transition: 0.2s ease-in-out all;
                &:focus {
                    box-shadow: 0 0 5px 0px #d53fc4;
                }
                &::placeholder {
                    font-family: 'Inter';
                    color: white;
                    text-align: center;
                    font-size: 16px;
                }
            }
            button {
                width: fit-content;
                border: 1px solid #B836A9;
                white-space: nowrap;
                background: #B836A9;
                align-items: center;
                display: flex;
                border-radius: 60px;
                width: 60px;
                justify-content: center;
                cursor: pointer;
            }
        }
    }
`;

export default Hero
