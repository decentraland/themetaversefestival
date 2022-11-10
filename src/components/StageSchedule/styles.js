import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";

export const StyledStageSchedule = styled.div`
  border-bottom: 3px solid grey;
`;

export const StageTitle = styled.h3`
  font-family: "Yapari";
  font-weight: 600;
  font-size: 32px;
  line-height: 28px;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  padding-top: 80px;
  color: ${theme.accent};
`;

export const StageDayInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 42px;
  padding-left: 100px;
  width: 100%;
`;

export const StyledActInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledActInfoTitle = styled.div`
  font-family: "Yapari";
  font-weight: 600;
  font-size: 32px;
  line-height: 28px;
  letter-spacing: 0.22em;
  width: auto;
  margin-bottom: 16px;
`;

export const StyledActInfoTime = styled.div`
  font-family: "Yapari";
  font-weight: 400;
  font-size: 24px;
  line-height: 21px;
  letter-spacing: 0.22em;
`;
