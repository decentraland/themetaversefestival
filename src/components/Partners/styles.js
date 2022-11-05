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
    justify-content: center;
    align-items: center;
`
export const PartnersImage = styled.img`
    height: 50px;
    width: auto;
`

export const CuratingSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-gap: 40;
`

export const CuratingImage = styled.img`
    height: 50px;
    margin: 24px;
    width: auto;
`

export const ThanksSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ThanksItem = styled.a`
    font-family: "Yapari Expanded";
    font-size: 16px;
    font-weight: 700;
    margin: 8px 16px 0;
    text-transform: uppercase;
    line-height: 250%;
    letter-spacing: 2px;
    transition: color 0.4s ease;

    :hover {
        color: ${theme.accent}
    }

    @media screen and (min-width: ${breakpoints.md}) {
        font-size: 19px;
    }
`
