import React, { useState, Fragment } from "react";
import Button from "../Button";
import { StaticImage } from "gatsby-plugin-image";
import { breakpoints } from "../../../utils/theme";
import styled from "styled-components";
import { days } from "../../../utils/days-data";
import DaySchedule from "../DaySchedule";
import { Container } from "../Container";
import {
  StyledLineUpSchedule,
  StyledLineUpHeader,
  StyledLineUpBody,
  StyledLineUpFooter,
  StyledLineUpBtn,
  StyledLineUpBtnSection,
  StyledLineUpLogo,
  StyledFullLineUpList,
  StyledEyeIcon,
  StyledTextHighLight,
  StyledArrowBtn,
  StyledBodyBtnSection,
  Decorator,
  StyledHeaderImg,
  StyledHeaderVector,
  StyledHighLight,
  Title,
} from "./styles";
import Logo from "../../images/logo-navbar.svg";
import EyeVector from "../../images/Eye-Vector.svg";
import ArrowUp from "../../images/arrowUp-vector.svg";
import ArrowDown from "../../images/arrowDown-vector.svg";
import star from "../../images/star.svg";
import LineUpHeaderSvgGroup from "../../images/LineUpHeader-svgGroup.svg";
import LineUpBarLine from "../../images/LineUpBarLine-Vector.svg";
import LineUpBarLineInverted from "../../images/LineUpBarLineInverted-Vector.svg";
import RectangleLine from "../../images/Rectangle-line.svg";
import LineUpTitle from "../../images/lineUpTitle-png.png";

// markup
const LineUpSchedule = (props) => {
  const [currentSection, setCurrentSection] = useState("schedule");
  const [currentDay, setCurrentDay] = useState(1);

  const handleDaySelection = (day) => {
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

  const lineupRawHighLights = [
    "Björk",
    "Ozzy Osbourne",
    "Dillon Francis",
    "Soulja Boy",
    "Izzy Bizu",
    "Megadeth",
  ];
  const lineupRaw = [
    "Vladimir Cauchemar",
    "SNH48",
    "Maia Wright",
    "Spottie WiFi",
    "Atarashii Gakko!",
    "Nicola Fasano",
    "Gramatik + Luxas",
    "Maija Kauhanen",
    "Stickmen Project",
    "Breland",
    "Akira the Don",
    "Losers",
    "Harrison First",
    "Steve Saiko",
    "Eliane Correa",
    "2AM + PIP",
    "Erika Krall",
    "Lian Gold",
    "and many more",
  ];

  // const lineupRaw = [
  //   "3LAU",
  //   "AARON SEVILLA",
  //   "ADAM BEATTIE",
  //   "AKIRA THE DON",
  //   "ALABASTER DE PLUME",
  //   "ALISON WONDERLAND",
  //   "ALUNA [OF ALUNAGEORGE]",
  //   "AMADIS AND THE AMBASSADORS",
  //   "AMBER VAN DAY",
  //   "AUTOGRAF",
  //   "AWALE",
  //   "BEMET",
  //   "BEN WALKER & KIRSTY MERRYN",
  //   "BENJI PATTERSON",
  //   "BERRY GALAZKA",
  //   "BOOMBOXHEAD",
  //   "BROOKE SHARKEY",
  //   "CHAIM",
  //   "CHARLIE G",
  //   "CHRISTIAN SMITH",
  //   "COCO MAMBA",
  //   "CODY FROST",
  //   "CONNIE DIGITAL",
  //   "CONOR BYRNE",
  //   "CROOKED COLOURS",
  //   "DAN KORN",
  //   "DANA IMMANUEL & THE STOLEN BAND",
  //   "DANNY TENAGLIA",
  //   "DEADMAU5",
  //   "DIZRAELI",
  //   "DJANAN TURAN",
  //   "DRUNKEN KONG",
  //   "EFFECTIVE",
  //   "EYES OF BEL",
  //   "FLATS & SHARPS",
  //   "HARRISON FIRST",
  //   "ICHI",
  //   "ILARIO FERRARI TRIO",
  //   "ISAK'S ISLAND",
  //   "KATE OZZ",
  //   "LÈA MONDO",
  //   "LEONIE EVANS",
  //   "LOKYII",
  //   "LOUIS III",
  //   "M G BOULTER",
  //   "MAGA",
  //   "MAGIT CACOON",
  //   "MAGNOS",
  //   "MAI WORLD",
  //   "MARCUS BONFANTI IN THE DELTA TRIO",
  //   "MIGHTY 33",
  //   "MIKEY KENNEY & FRIENDS",
  //   "MIYA MIYA",
  //   "MORSKI",
  //   "NANCY",
  //   "NICK HART & TOM DIPPER",
  //   "NINA NESBITT",
  //   "ORII",
  //   "OVY ON THE DRUMS",
  //   "PARIS HILTON",
  //   "RAY GELATO GIANTS",
  //   "RENU",
  //   "RIOGHNACH CONNOLLY & ELLIS DAVIES",
  //   "RIZ LA VIE",
  //   "SADANDSOLO",
  //   "SAMRA",
  //   "SAWLEAD",
  //   "SCRILLA",
  //   "SHAMA RAHMAN",
  //   "SOFIA CAMPOS",
  //   "STUDIO NOUVEAU",
  //   "THE BRITISH COLLECTIVE",
  //   "THE LUNA TAPES",
  //   "THE TURBANS",
  //   "THE TURBANS UNPLUGGED",
  //   "VANDAL",
  //   "VIRTUNAUT",
  //   "WILL JEURGENS",
  //   "YOUNG WATERS",
  // ];

  return (
    <StyledLineUpSchedule id="lineup">
      {/* <StyledLineUpHeader>
        <StyledHeaderImg src={LineUpHeaderSvgGroup} />
        <StyledLineUpLogo src={Logo} />
      </StyledLineUpHeader> */}
      <Container>
        <Title src={LineUpTitle} />
        <StyledLineUpBody>
          <StyledFullLineUpList className="raw-lineup">
            {lineupRawHighLights.map((artist, key) => (
              <>
                <span key={key}>{artist.toUpperCase()}</span>
                <StyledEyeIcon src={EyeVector} />
              </>
            ))}
            {lineupRaw.map((artist, key) => (
              <>
                <span key={key}>{artist.toUpperCase()}</span>
                <StyledEyeIcon src={EyeVector} />
              </>
            ))}
          </StyledFullLineUpList>
        </StyledLineUpBody>
      </Container>
    </StyledLineUpSchedule>
  );
};

export default LineUpSchedule;
