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
        {dayInfo.events.map((event, index) => (
          <StyledDataItem key={index}>
            <img
              src={scheduleSeparator}
              width="24px"
              height="24px"
              alt="schedule"
              style={{ marginTop: "2px"}}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <StyledDataItemText>
                {event.time} - {event.title}
              </StyledDataItemText>
              <StyledDataItemText>{event.coordinates}</StyledDataItemText>
            </div>
          </StyledDataItem>
        ))}
      </StyledDayBody>
    </StyledDaySchedule>
  );
};

export default DaySchedule;
