import React, { useState } from "react";
import { Container } from "../Container";
import { days } from "../../../utils/days-data-2022";
import {
  StyledLineUpSchedule,
  StyledLineUpBody,
  StyledFullLineUpList,
  StyledEyeIcon,
  StyledLineUpHeader,
  StyledLineUpBtnSection,
  StyledLineUpBtn,
  Title,
} from "./styles";
import EyeVector from "../../images/Eye-Vector.svg";
import LineUpTitle from "../../images/lineUpTitle-png.png";
import DaySchedule from "../DaySchedule/index.jsx";
import styled from "styled-components";

// markup
const LineUpSchedule = (props) => {
  const [currentSection, setCurrentSection] = useState("lineup");
  const [currentDay, setCurrentDay] = useState(1);

  const handleDaySelection = (day) => {
    setCurrentSection("schedule")
    setCurrentDay(day);
  };

  const lineup = [
    {
      stageName: "The Evolution Stage (main stage)",
      artists: [
        "3LAU",
        "Akira the Don",
        "ALISON WONDERLAND",
        "Aluna (of AlunaGeorge)",
        "Amber van Day",
        "AUTOGRAF",
        "Benji Patterson",
        "Berry Galazka",
        "Chet Porter",
        "Cody Frost",
        "Conor Byrne",
        "Crooked Colours",
        "DEADMAU5",
        "Eyes Of Bel",
        "Harrison First",
        "Louis III",
        "Miya Miya",
        "NINA NESBITT",
        "PARIS HILTON + Special Guest",
        "PNAU",
        "RAC",
        "RUFUS DU SOL",
        "Russ",
        "SPOTTIE WIFI",
        "The Luna Tapes",
      ],
    },
    {
      stageName: "The Harrison Acoustic Stage",
      artists: [
        "ADAM BEATTIE",
        "ALABASTER De PLUME",
        "Amadis and The Ambassadors",
        "BEN WALKER & KIRSTY MERRYN",
        "DANA IMMANUEL & THE STOLEN BAND",
        "DIZRAELI",
        "Dan Korn",
        "Djanan Turan",
        "FLATS & SHARPS",
        "ICHI",
        "LEONIE EVANS",
        "LÈA MONDO",
        "M G BOULTER",
        "MARCUS BONFANTI IN THE DELTA TRIO",
        "MIKEY KENNEY & FRIENDS",
        "NICK HART & TOM DIPPER",
        "RIOGHNACH CONNOLLY & ELLIS DAVIES",
        "SHAMA RAHMAN",
        "The Turbans unplugged",
        "YOUNG WATERS",
      ],
    },
    {
      stageName: "Pychedelic Techno Stage",
      artists: [
        "Aaron Sevilla",
        "Bemet",
        "Chaim",
        "Christian Smith",
        "Drunken Kong",
        "Effective",
        "Kate Ozz",
        "MAGA",
        "Magit Cacoon",
        "ORII",
        "SAMRA",
        "Sawlead",
      ],
    },
    {
      stageName: "World Stage",
      artists: [
        "Brooke Sharkey",
        "Charlie G",
        "Isak's Island",
        "Lokyii",
        "Magnos",
        "Morski",
        "Nancy",
        "Ovy on the drums",
        "RENU",
        "Salmo",
        "Sofia Campos",
        "The Turbans",
      ],
    },
    {
      stageName: "Jazz Club",
      artists: [
        "Awale",
        "Ilario Ferrari trio",
        "Ray Gelato giants",
        "The British Collective",
      ],
    },
    {
      stageName: "OG Smash Stage",
      artists: [
        "BoomboxHead",
        "COCO MAMBA",
        "Connie Digital",
        "MAI World",
        "Mighty 33",
        "Sadandsolo",
        "Scrilla",
        "Studio Nouveau",
        "Vandal",
        "Virtunaut",
        "Will Jeurgens",
      ],
    },
  ];

  const lineupRaw = [
    "BJÖRK",
    "OZZY OSBOURNE",
    "DILLON FRANCIS",
    "SOULJA BOY",
    "MOTORHEAD",
    "DJ REGARD",
    "MEGADETH",
    "AKIRA THE DON",
    "VLADIMIR CAUCHEMAR",
    "MAIA WRIGHT",
    "IZZY BIZU",
    "BRELAND",
    "KYARY PAMYU PAMYU",
    "HARRISON FIRST",
    "MORGAN",
    "MIYA MIYA",
    "THE STICKMEN PROJECT",
    "ELLYSE MASON",
    "ELIJAH BLAKE",
    "IZZY BIZU",
    "ATARASHII GAKKO",
    "MANON",
    "A$AP TYY",
    "FRUITS ZIPPER",
    "SNH48",
    "NICOLA FASANO",
    "GRAMATIK + LUXAS",
    "YOTAM AVNI",
    "APE RAVE CLUB",
    "JAMIS",
    "AND MANY MORE",
  ];

  return (
    <StyledLineUpSchedule id="lineup">
      <Container>
        <Title>
          LINE UP
        </Title>
        <StyledLineUpHeader>
          <StyledLineUpBtnSection>
            <StyledLineUpBtn
              onClick={() => setCurrentSection("lineup")}
              label={"⟶ Full Lineup"}
              className={currentSection === "lineup" ? "selected" : ""}
            >
              {"FULL LINE UP"}
            </StyledLineUpBtn>
            {days.map((dayInfo, i) => (
              <StyledLineUpBtn
                className={currentDay === i + 1 && currentSection === "schedule" ? "selected" : ""}
                onClick={() => {
                  handleDaySelection(i + 1);
                }}
                label={`⟶ Day 0${i + 1}`}
              >
                {`${dayInfo.date}`}
              </StyledLineUpBtn>
            ))}
          </StyledLineUpBtnSection>
        </StyledLineUpHeader>
        <StyledLineUpBody>
          {
            currentSection === 'lineup' &&
              // <StyledFullLineUpList className="raw-lineup">
              //   {lineupRaw.map((artist, key) => (
              //     <>
              //       <span key={key}>{artist.toUpperCase()}</span>
              //       <StyledEyeIcon src={EyeVector} />
              //     </>
              //   ))}
              // </StyledFullLineUpList>
              <ComingSoon>Coming soon...</ComingSoon>
          }
          {currentSection === "schedule" && (
            <>
              {/* <DaySchedule
                dayNumber={currentDay}
                dayInfo={days[currentDay - 1]}
              /> */}
              <ComingSoon>Coming soon...</ComingSoon>
            </>
          )}
        </StyledLineUpBody>
      </Container>
    </StyledLineUpSchedule>
  );
};

const ComingSoon = styled.p`
  font-family: Gothic;
  font-size: 40px;
  font-weight: 700
`;

export default LineUpSchedule;
