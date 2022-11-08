import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import StageSchedule from "../StageSchedule";
import { breakpoints } from "../../../utils/theme";

const DaySchedule = (props) => {
  const { dayInfo, dayNumber } = props;

  return (
    <StyledDaySchedule>
      <section className="day-header">
        <div className="header-block">
          <h2>{`Day 0${dayNumber} - ${dayInfo.name}`}</h2>
        </div>
        <h3 className="date">{dayInfo.date}</h3>
        <img
          className="header-image"
          src={dayInfo.headerImageUrl}
          alt={dayInfo.headerImageName}
        />
      </section>
      <section className="day-body">
        {dayInfo.stages.map((stageInfo, i) => (
          <StageSchedule key={i} stageInfo={stageInfo} />
        ))}
      </section>
    </StyledDaySchedule>
  );
};

const StyledDaySchedule = styled.div`
  display: flex;
  flex-direction: column;
  .day-header {
    display: inherit;
    flex-direction: column;
    position: relative;
    .header-block {
      border: 1px solid #b836a9;
      border-left: 0;
      border-right: 0;
      line-height: 60px;
      h2 {
        font-size: 24px;
        font-weight: 200;
        font-family: "Inter";
        color: white;
      }
    }
    .date {
      padding: 8px 0;
      font-size: 64px;
      -webkit-text-stroke: 1px white;
      color: transparent;
    }
    .header-image {
      width: 300px;
      position: absolute;
      top: -300px;
      right: 0;
      @media screen and (max-width: ${breakpoints.md}) {
        position: relative;
        top: unset;
        right: unset;
        width: 100%;
      }
    }
  }
  .day-body {
    display: grid;
    grid-template-columns: calc(50% - 15px) calc(50% - 15px);
    grid-template-rows: auto;
    grid-column-gap: 30px;
    margin-top: 80px;
    @media screen and (max-width: ${breakpoints.md}) {
      margin-bottom: 20px;
      grid-template-columns: 100%;
      grid-column-gap: unset;
    }
  }
`;

export default DaySchedule;
