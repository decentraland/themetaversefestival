import React from "react"
import styled from 'styled-components'
import Button from './Button'
import Countdown from './Countdown'
import theme, { breakpoints } from "../../utils/theme"
import mvmfLogo from '../images/logo-metaverse.png'
import dclLogo from '../images/logo-dcl.svg'
import qrSeparator from '../images/qr-separator.svg'
import decorator from '../images/corner_decoration.svg'
import whiteRabbit from '../images/rabbit.svg'
import gitHub from '../images/Vector-1.svg'
import twitter from '../images/Vector-3.svg'
import reddit from '../images/Vector-2.svg'
import discord from '../images/Vector.svg'
import { Container } from "./Container"

const Hero = () => {
    return (
        <StyledHero sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <div>
                    <StyledImage
                        placeholder={'none'}
                        backgroundColor={'black'}
                        objectFit={'contain'}
                        loading={'eager'}
                        className="index-hero-logo"
                        alt={'Metaverse Music Festival'}
                        src={mvmfLogo}
                    />
                </div>
                <div>
                    <StyledImage
                        placeholder={'none'}
                        backgroundColor={'black'}
                        objectFit={'contain'}
                        loading={'eager'}
                        className="index-hero-logo"
                        alt={'Metaverse Music Festival'}
                        src={qrSeparator}
                    />
                </div>
                <EventData>
                    <EventDataItem>
                        <Countdown />
                    </EventDataItem>
                    <EventDataItem>
                        <DateComponent className="event-data">
                            <p>NOV. 10-13 <DateHighlight>-12PM UTC-</DateHighlight></p>
                            <p>FESTIVAL LAND, [-62,70]</p>
                        </DateComponent>
                    </EventDataItem>
                </EventData>
                <EventDataBottom>
                    <EventDataItem>
                        <StyledLogo
                            alt={'Decentraland Logo'}
                            src={dclLogo}
                        />
                    </EventDataItem>
                    <EventDataItem>
                        <SaveTheDate href="https://events.decentraland.org/event/?id=7148716b-ff25-4d5f-8267-55fed7ab15bc" target="_blank">
                            <WhiteRabbit src={whiteRabbit} /> Save the date
                        </SaveTheDate>
                    </EventDataItem>
                </ EventDataBottom>
            </Container>
            <Decorator
                src={decorator}
                top={40}
                left={40}
            />
            <Decorator
                src={decorator}
                bottom={40}
                left={40}
            />
            <Decorator
                src={decorator}
                top={40}
                right={40}
            />
            <Decorator
                src={decorator}
                bottom={40}
                right={40}
            />
            <Socials>
                <a href='https://github.com/decentraland' target="_blank" rel="noreferrer">
                    <SocialIcon
                        src={gitHub}
                    />
                </a>
                <a href='https://twitter.com/decentraland' target="_blank" rel="noreferrer">
                    <SocialIcon
                        src={twitter}
                    />
                </a>
                <a href='https://www.reddit.com/r/decentraland/' target="_blank" rel="noreferrer">
                    <SocialIcon
                        src={reddit}
                    />
                </a>
                <a href='https://decentraland.org/discord/' target="_blank" rel="noreferrer">
                    <SocialIcon
                        src={discord}
                    />
                </a>
            </Socials>
        </StyledHero >
    )
}

const StyledHero = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;   
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    padding: 8px 0;
`

const EventData = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 0;
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
    }
`

const EventDataBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
    }
`

const EventDataItem = styled.div`
    flex: 0 0 100%;
    margin: 8px 0;
    width: 100%;
    text-align: center;

    @media screen and (min-width: ${breakpoints.md}) {
        flex: 1 0 50%;
        text-align: left;
    }
 `

const DateComponent = styled.section`
    font-size: 16px;
    line-height: 32px;
    padding-left: 0;
    width: 100%;
    text-align: center;
    letter-spacing: 2px;

    @media screen and (min-width: ${breakpoints.md}) {
        letter-spacing: 0;
        text-align: center;
    }

    @media screen and (min-width: ${breakpoints.l}) {
        font-size: 22px;
        line-height: 36px;
        padding-left: 16px;
        text-align: justify;
        width: 100%;
    }

    @media screen and (min-width: ${breakpoints.xl}) {
        font-size: 28px;
        line-height: 40px;
    }

 `

const DateHighlight = styled.span`
    color: ${theme.accent}
`

const StyledLogo = styled.img`
    max-width: 70%;

    @media screen and (max-width: ${breakpoints.md}) {
        max-width: 50%;
        margin: 0 auto;
        text-align: center;
    }
`

const SaveTheDate = styled(Button)`
    width: 100%;
    background-image: url(../images/boton.png);
`

const Decorator = styled.img`
    position: absolute;
    width: 16px;
    height: 18px;
    left: ${props => `${props.left}px` || null};
    top: ${props => `${props.top}px` || null};
    bottom: ${props => `${props.bottom}px` || null};
    right: ${props => `${props.right}px` || null};
`

const WhiteRabbit = styled.img`
    width: 52px;
    height: 30px;
    box-sizing: border-box;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 16px;
    margin-right: 16px;
    border-right: 4px solid ${theme.accent};
`

const Socials = styled.footer`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
    @media screen and (max-width: ${breakpoints.md}) {
        display: none;
    }
`

const SocialIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-bottom: 24px;
    :hover {
        path {
            fill: red;
        };
    };
`

export default Hero
