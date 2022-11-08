import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../../utils/theme"
import { Container } from "../Container"

export const MerchBanner = ({ src, href }) => (
    <Link href={href} target="_blank">
    <Banner href={href} src={src}>
        <Wrapper>
            <Title>
                Metaverse Music Festival 2022 Collectibles
            </Title>
            <Subtitle>
            Category is... <b>Cyberpunk Meets Nature!</b>
            </Subtitle>
        </Wrapper>
    </Banner>
    </Link>
)

const Link = styled.a`
 cursor: crosshair;
`

const Banner = styled.div`
    width: 100%;
    height: 160px;
    object-fit: cover;
    font-family: "Yapari";
    background: ${props => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 72px;
    @media screen and (min-width: ${breakpoints.md}) {
        padding: 12px 72px;
    }
    

`

const Wrapper = styled(Container)`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

const Title = styled.h3`
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    margin-bottom: 6px;
    max-width: 600px;
    @media screen and (min-width: ${breakpoints.md}) {
        font-size: 30px;
        line-height: 36.31px;
      }
      
`

const Subtitle = styled.p`
    font-size: 9px;
    line-height: 12px;
    flex: 1;
    width: 100%;
    @media screen and (min-width: ${breakpoints.md}) {
        font-size: 13px;
        line-height: 18px;
      }
`

export default MerchBanner
