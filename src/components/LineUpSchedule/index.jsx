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

  const lineupRaw = ["Odeum Music", "Dead-Tones", "Cora Novoa", "Sebastian Mikael", "Teenear", "GucciToe", "Mr Swe", "DJTRAX", "FSODinero", "APROPOS", "DeepFake", "Trick Daddy", "CANDY TUNE", "D-Noise", "The Hollow Legs", "DJ Doodle", "Bufalo", "MetaDJ Live", "Steve Sai", "Trina", "KUTURAR", "PANS", "DadaYute", "StoneyEye", "GLITCH RAVE", "MA GAK PA", "NessyTheRilla", "Ladya", "Sound Desert Showcase", "Radyica", "Daniel Monaco", "Coconut Sunday", "Ryota", "ZOORAB", "VanRaven", "Skogur", "Makulatura", "0xPeter", "Bashir Khatsuk", "Phuture Music Live", "Merio Bras", "DeepMe", "Barret Wav", "Argent", "Soundscape Jam", "babiiJ", "AmPm", "Armina", "DVANOV", "Teya Flow", "Cosy", "Meladee", "Key Keepers", "BORG MUSIC", "Kosmodrom", "DJ FOUR", "Yala", "DJ SA", "UVIFREE", "Three Oscillators", "Medtronica", "Roman Flauns", "Nico Earnshaw", "Lesly and Kan Dina", "Losi", "Awake For Life", "Placeboys", "TYTE", "Mike Smiff", "Voroth", "bala", "Natsuki Kwanishi", "ME.N.U.", "UNISOL", "Red Albert", "Aiwaska", "KVMBL", "Furia", "RK", "OgiWorlds", "Kiramomo", "lmn3", "DJ Dex", "UNTZ King", "Beskonechnaya Zima", "Red Albert", "Pechatnaya Mashina"]

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
        <SaveTheDate
          href="https://events.decentraland.org/event/?id=97aff492-b4b9-4ba1-bd08-bfa7e32be036&utm_source=landingpage&utm_medium=organic&utm_campaign=DCLMF23"
          target="_blank"
        >
            <p style={{ fontSize: "20px", textAlign: "center", width: "100%" }}>JUMP IN <span><Polygon src={polygon} /></span></p>
        </SaveTheDate>
      </Container>
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

export default LineUpSchedule;
