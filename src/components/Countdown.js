import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../../utils/theme"

const Countdown = () => {

  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMins, setRemainingMins] = useState(0);
  const [remainingSecs, setRemainingSecs] = useState(0);

  let festivalDate = new Date('Oct 21, 2021 20:00:00');
  festivalDate = new Date(festivalDate);
  festivalDate.setUTCHours(8);
  const UTCFestivalDate = new Date(festivalDate.toUTCString()).getTime();

  useEffect(() => {
    let interval = setInterval(() => {
      let now = new Date().getTime();
      let t = UTCFestivalDate - now;
      // console.log(t);
      let days, hours, mins, secs;
      if (t >= 0) {

          days = Math.floor(t / (1000 * 60 * 60 * 24));
          hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
          secs = Math.floor((t % (1000 * 60)) / 1000);

          days = ("0" + days).slice(-2)
          hours = ("0" + hours).slice(-2)
          mins = ("0" + mins).slice(-2)
          secs = ("0" + secs).slice(-2)

          setRemainingDays(days);
          setRemainingHours(hours);
          setRemainingMins(mins);
          setRemainingSecs(secs);
          // console.log(days, hours, mins, secs);
      }
    }, 1000);
  }, [])

  return (
    <StyledCountdown>
      <div className="time-block days-wrapper">
        <span className="number">{remainingDays}:</span>
        <span className="label">DAYS</span>
      </div>
      <div className="time-block hours-wrapper">
        <span className="number">{remainingHours}:</span>
        <span className="label">HOURS</span>
      </div>
      <div className="time-block minutes-wrapper">
        <span className="number">{remainingMins}:</span>
        <span className="label">MINUTES</span>
      </div>
      <div className="time-block seconds-wrapper">
        <span className="number">{remainingSecs}</span>
        <span className="label">SECONDS</span>
      </div>
    </StyledCountdown>
  )
}

const StyledCountdown = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media screen and (max-width: ${breakpoints.md}) {
      margin-bottom: 42px;
  }
  .time-block {
    display: flex;
    flex-direction: column;
    .number {
      font-size: 58px;
      color: white;
      margin-bottom: 6px;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 50px;
      }
    }
    .label {
      color: white;
      font-size: 16px;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 12px;
      }
    }
  }
`;

export default Countdown
