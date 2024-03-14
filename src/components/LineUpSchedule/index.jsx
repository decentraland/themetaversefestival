import React, { useState } from "react";
import { Container } from "../Container";
import Button from "../Button";
import polygon from "../../images/STD-polygon.svg";
import { breakpoints } from "../../../utils/theme";
import { days } from "../../../utils/days-data-2022";
import {
  StyledLineUpSchedule,
  StyledLineUpBody,
  StyledFullLineUpList,
  StyledSeparator,
  StyledLineUpHeader,
  StyledLineUpBtnSection,
  StyledLineUpBtn,
  Title,
} from "./styles";
import EyeVector from "../../images/Starbust3.png";
import heroPolygon from "../../images/hero/polygon2.svg";
import { motion } from "framer-motion";
import DaySchedule from "../DaySchedule/index.jsx";
import styled from "styled-components";
import BannerMarquee from "../Marquee.jsx";

// markup
const LineUpSchedule = (props) => {
  const [currentSection, setCurrentSection] = useState("schedule");
  const [currentDay, setCurrentDay] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDaySelection = (day) => {
    setCurrentSection("schedule");
    setCurrentDay(day);
    setIsMenuOpen(false);
  };

  return (
    <StyledLineUpSchedule id="lineup">
      <Container>
        <Title>SCHEDULE</Title>
        <StyledLineUpBtnSection>
          {days.map((dayInfo, i) => (
            <StyledLineUpBtn
              key={i}
              className={
                currentDay === i + 1 && currentSection === "schedule"
                  ? "selected"
                  : ""
              }
              onClick={() => {
                handleDaySelection(i + 1);
              }}
            >
              {`${dayInfo.date}`}
            </StyledLineUpBtn>
          ))}
        </StyledLineUpBtnSection>

        <MobileMenu>
          <SelectedDay onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {days[currentDay - 1].date}
          </SelectedDay>
          {isMenuOpen && (
            <DropdownMenu
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {days.map((dayInfo, i) => (
                <MenuItem key={i} onClick={() => handleDaySelection(i + 1)}>
                  {dayInfo.date}
                </MenuItem>
              ))}
            </DropdownMenu>
          )}
        </MobileMenu>

        <StyledLineUpBody>
          {currentSection === "schedule" && (
            <>
              <DaySchedule
                dayNumber={currentDay}
                dayInfo={days[currentDay - 1]}
              />
            </>
          )}
        </StyledLineUpBody>
        <SaveTheDate
          href="https://decentraland.org/events/event/?id=0f91b470-2d4a-4ecc-a619-8c682d872685"
          target="_blank"
        >
          <p style={{ fontSize: "20px", textAlign: "center", width: "100%" }}>
            JUMP IN{" "}
            <span>
              <Polygon src={heroPolygon} />
            </span>
          </p>
        </SaveTheDate>
      </Container>
      <div style={{ marginTop: "72px" }}>
        <BannerMarquee direction="right" />
      </div>
    </StyledLineUpSchedule>
  );
};

const SaveTheDate = styled(Button)`
  width: 100%;
`;

const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-left: 16px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: relative;
  @media screen and (max-width: ${breakpoints.md}) {
    display: block;
    width: 100%;
    margin-top: 90px;
  }
`;

const SelectedDay = styled.div`
  cursor: pointer;
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: black;
  border: 1px solid #ffa450;
  border-radius: 32px;
  font-size: 32px;
  font-family: "Helvetica";
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  width: 100%;
  background-color: black;
  border: 1px solid #ffa450;
  border-radius: 32px;
`;

const MenuItem = styled.div`
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: pointer;
  font-size: 32px;
  border-radius: 32px;
  font-family: "Helvetica";
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ffa450;
  }
`;

export default LineUpSchedule;
