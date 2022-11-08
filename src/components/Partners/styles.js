import styled from "styled-components";
import theme, { breakpoints } from '../../../utils/theme';

export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 150px;
    background: black;
`;

export const Title = styled.img`
    height: 82px;
    width: auto;
    margin-bottom: 42px;
    display: inline-block;
`;

export const ThanksTitle = styled.img`
    height: 56px;
    width: auto;
    margin-bottom: 42px;
`;

export const InnerSection = styled.div`
    width: 100%;
    padding: 32px 0;
`;

export const PartnersSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: ${breakpoints.md}) {
       flex-direction: row;
    }
`
export const PartnersImage = styled.img`
    height: 100px;
    width: auto;
    display: inline-block;
`

export const CuratingSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-gap: 40;
`

export const CuratingImage = styled.img`
    height: 48px;
    margin: 24px 28px;
`

export const ThanksSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export const ThanksItem = styled.a`
    font-family: "Gotham";
    font-size: 24px;
    line-height: 58px;
    font-weight: 700;
    margin: 8px 16px 0;
    letter-spacing: 2px;
    transition: color 0.4s ease;

    :hover {
        color: ${theme.accent}
    }

    @media screen and (min-width: ${breakpoints.md}) {
        font-size: 33px;
    }
`
