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
} from "./styles.js";
import {
  StyledBodyBtnSection,
  StyledArrowBtn,
} from "../LineUpSchedule/styles.js";

const DaySchedule = (props) => {
  const { dayInfo, dayNumber } = props;

  return (
    <StyledDaySchedule>
      <StyledDayHeader>
        <StyledDayTitle>{`${dayInfo.date}`}</StyledDayTitle>
      </StyledDayHeader>
      <StyledDayBody>
        {dayInfo.stages.map((stageInfo, i) => (
          <StageSchedule key={i} stageInfo={stageInfo} />
        ))}
      </StyledDayBody>
    </StyledDaySchedule>
  );
};

export default DaySchedule;
