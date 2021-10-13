import React, {useEffect, useState} from "react"
import styled from 'styled-components';

const StageSchedule = (props) => {
  const { stageInfo } = props;
  return (
    <StyledStageSchedule className={`stage ${stageInfo.type}-stage`}>
      <h3>⟶ {stageInfo.name}</h3>
      {stageInfo.acts.map((act, key) => (
        <div className="act" key={key}>
          <span className="time">{act.time}</span>
          <span className="act-name">{act.name}</span>
        </div>
      ))}
    </StyledStageSchedule>
  )
}

const StyledStageSchedule = styled.div`
  margin-bottom: 80px;
  h3 {
    border: 1px solid #B836A9;
    border-left: 0;
    border-right: 0;
    line-height: 60px;
    font-size: 24px;
    font-weight: 600;
    font-family: 'Inter';
    color: white;
  }
  .act {
    border: 1px solid #B836A9;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    line-height: 40px;
    font-size: 16px;
    font-weight: 200;
    font-family: 'Inter';
    color: white;
    display: flex;
    justify-content: space-between;
    .act-name {
      text-align: right;
      font-size: 24px;
      max-width: 50%;
    }
  }
  &.main-stage {
    h3 {
      text-transform: uppercase;
      font-size: 30px;
      -webkit-text-stroke: 1px white;
      color: transparent;
    }
    .act {
      flex-direction: column;
      padding: 8px 0;
      .time {
        font-size: 24px;
      }
      .act-name {
        text-align: left;
        max-width: unset;
        font-size: 40px;
        line-height: 60px;
      }
    }
  }
`;

export default StageSchedule
