import styled from "styled-components"
import { breakpoints } from "../../utils/theme"

export const Container  = styled.div`
    max-width: 100%;
    padding: 0 16px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: ${breakpoints.sm}) {
        max-width: 540px;
    };
    @media screen and (min-width: ${breakpoints.md}) {
        max-width: 720px;
    };
    @media screen and (min-width: ${breakpoints.l}) {
        max-width: 900px;
    };
    @media screen and (min-width: ${breakpoints.xl}) {
       max-width: 1140px;
    };
`