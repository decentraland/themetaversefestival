import React, { useState } from "react";
import { Container } from "../Container";
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
    //Thursday 16th
    "ODEUM MUSIC", 
    "DEAD-TONES", 
    "KUTURAR", 
    "PANS", 
    "DADAYUTE", 
    "STONEYEYE", 
    "GLITCH RAVE",
    "MA GAK PA", 
    "NESSYTHERILLA", 
    "LADYA", 
    "SOUND DESERT SHOWCASE", 
    "RADYICA", 
    "DANIEL MONACO", 
    "COCONUT SUNDAY", 
    "RYOTA", 
    "ZOORAB", 
    "VANRAVEN", 
    "SKOGUR", 
    "MAKULATURA", 
    "0XPETER", 
    "BASHIR KHATSUK", 
    "PHUTURE MUSIC LIVE", 
    "MERIO BRAS", 
    "DEEPME", 
    "BARRET WAV", 
    "ARGENT", 
    "SOUNDSCAPE JAM", 
    //Friday 17th
    "ORA NOVOA", 
    "SEBASTIAN MIKAEL", 
    "TEENEAR", 
    "GUCCITOE (LUCID DREAMS)", 
    "MR SWE", 
    "DJTRAX", 
    "FSODINERO", 
    "APROPOS", 
    "DEEPFAKE", 
    "BABIIJ", 
    "AMPM", 
    "ARMINA", 
    "DVANOV", 
    "TEYA FLOW", 
    "COSY", 
    "MELADEE", 
    "KEY KEEPERS", 
    "BORG MUSIC", 
    "KOSMODROM", 
    "DJ FOUR", 
    "YALA", 
    "DJ SA", 
    "UVIFREE", 
    "THREE OSCILLATORS", 
    "MEDTRONICA", 
    "ROMAN FLAUNS", 
    "NICO EARNSHAW", 
    "LESLY AND KAN DINA", 
    "LOSI", 
    "AWAKE FOR LIFE", 
    "PLACEBOYS",
    //Saturday 18th
    "TRICK DADDY", 
    "CANDY TUNE", 
    "D-NOISE", 
    "THE HOLLOW LEGS", 
    "DJ DOODLE", 
    "BUFALO", 
    "GUCCITOE", 
    "METADJ LIVE", 
    "STEVE SAI", 
    "TRINA", 
    "DJTRAX", 
    "TYTE", 
    "MIKE SMIFF", 
    "VOROTH", 
    "BALA", 
    "NATSUKI KWANISHI", 
    "ME.N.U.", 
    "UNISOL", 
    "RED ALBERT", 
    "AIWASKA", 
    "KVMBL", 
    "FURIA", 
    "RK", 
    "OGIWORLDS", 
    "KIRAMOMO", 
    "LMN3", 
    "DJ DEX", 
    "UNTZ KING", 
    "BESKONECHNAYA ZIMA", 
    "RED ALBERT", 
    "PECHATNAYA MASHINA"
  ];

  return (
    <StyledLineUpSchedule id="lineup">
      <Container>
        <Title>
          LINE <span style={{'font-family': 'SaintRegular'}}>U</span>P
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
          {currentSection === 'lineup' && (
            <>
              <StyledFullLineUpList className="raw-lineup">
                {lineupRaw.map((artist, key) => (
                  <>
                     <span key={key}>{artist.toUpperCase()}</span>
                     {key !== lineupRaw.length - 1 && <StyledSeparator src={EyeVector} />}
                  </>
                ))}
              </StyledFullLineUpList>              
            </>
          )}
          {currentSection === "schedule" && (
            <>
              <DaySchedule dayNumber={currentDay} dayInfo={days[currentDay - 1]} />              
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
