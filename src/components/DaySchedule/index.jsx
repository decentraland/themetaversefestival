import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import StageSchedule from "../StageSchedule";
import { breakpoints } from "../../../utils/theme";
import {
  StyledDaySchedule,
  StyledDayBody,
  StyledDayHeader,
  StyledDayTitle,
  StyledDayinfo,
  StyledDataItem,
  StyledDataItemText,
} from "./styles.js";
import {
  StyledBodyBtnSection,
  StyledArrowBtn,
} from "../LineUpSchedule/styles.js";
import scheduleSeparator from "../../images/schedule/scheduleseparator.png";

const DaySchedule = (props) => {
  const { dayInfo } = props;

  return (
    <StyledDaySchedule>
      {/* <StyledDayHeader>
        <StyledDayTitle>{dayInfo.date}</StyledDayTitle>
      </StyledDayHeader> */}
      <StyledDayBody>
        {dayInfo.artists.map((artist, index) => (
          <StyledDataItem key={index}>
            <StyledDataItemText>{artist}</StyledDataItemText>
            <img
              src={scheduleSeparator}
              width="32px"
              height="32px"
              alt="schedule"
            />
          </StyledDataItem>
        ))}
      </StyledDayBody>
    </StyledDaySchedule>
  );
};

export default DaySchedule;
