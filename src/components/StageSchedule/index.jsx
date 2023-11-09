import React from "react";
import {
  StyledStageSchedule,
  StageTitle,
  StageDayInfo,
  StyledActInfo,
  StyledActInfoTitle,
  StyledActInfoTime,
} from "./styles";

const StageSchedule = (props) => {
  const { stageInfo } = props;
  return (
    <StyledStageSchedule className={`stage ${stageInfo.type}-stage`}>
      <StageTitle>⟶ {stageInfo.name}</StageTitle>
      <StageDayInfo>
        {stageInfo.acts.map((act, key) => (
          <StyledActInfo key={key}>
            <StyledActInfoTitle>{act.name}</StyledActInfoTitle>
            <StyledActInfoTime>/ {act.time}</StyledActInfoTime>
          </StyledActInfo>
        ))}
      </StageDayInfo>
    </StyledStageSchedule>
  );
};

export default StageSchedule;
