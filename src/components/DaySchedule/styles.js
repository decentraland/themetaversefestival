import styled from "styled-components";
import { breakpoints } from "../../../utils/theme";

export const StyledDaySchedule = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledDayBody = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledDayHeader = styled.section`
  border-bottom: 3px solid grey;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const StyledDayTitle = styled.h2`
  padding-bottom: 40px;
  line-height: 36px;
  font-family: "Yapari";
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.22em;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 40px;
    padding-bottom: 80px;
    letter-spacing: 0.22em;
  }
`;
