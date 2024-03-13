import styled from "styled-components";
import { breakpoints } from '../../../utils/theme';

export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 150px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: HackerNoon;
  text-align: center;
  letter-spacing: 10px;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 80px;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 100px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 100px;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    font-size: 100px;
  }
`;

export const Map = styled.div`
`