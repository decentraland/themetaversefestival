import styled from "styled-components";
import theme, { breakpoints } from '../../../utils/theme';

export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 150px;
`;

export const Title = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 62px;
    @media screen and (min-width: ${breakpoints.md}) {
    width: 80%;
    }
    @media screen and (min-width: ${breakpoints.l}) {
    width: 70%;
    }
    @media screen and (min-width: ${breakpoints.xl}) {
    width: 60%;
    }
    @media screen and (min-width: ${breakpoints.xxl}) {
    width: 50%;
    }
`;