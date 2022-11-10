import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";

export const StyledStageSchedule = styled.div`
  border-bottom: 3px solid grey;
`;

export const StageTitle = styled.h3`
  font-family: "Yapari";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  padding-top: 40px;
  color: ${theme.accent};

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 32px;
    line-height: 28px;
    padding-top: 80px;
  }
`;

export const StageDayInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 42px;
  padding-left: 32px;
  width: 100%;
  @media screen and (min-width: ${breakpoints.md}) {
    padding-left: 100px;
  }
`;

export const StyledActInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: ${breakpoints.md}) {
    margin-bottom: 64px;
  }
`;

export const StyledActInfoTitle = styled.div`
  font-family: "Yapari";
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.22em;
  width: auto;
  margin-bottom: 8px;
  
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 32px;
    line-height: 28px;
    margin-bottom: 16px;
  }
`;

export const StyledActInfoTime = styled.div`
  font-family: "Yapari";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.22em;
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 24px;
    line-height: 21px;
  }
`;
