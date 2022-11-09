import React, { useState } from "react";
import { Container } from "../Container";
import {
  StyledLineUpSchedule,
  StyledLineUpBody,
  StyledFullLineUpList,
  StyledEyeIcon,
  Title,
} from "./styles";
import EyeVector from "../../images/Eye-Vector.svg";
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

  const lineupRaw = ["BJÖRK", "OZZY OSBOURNE", "DILLON FRANCIS", "SOULJA BOY", "MOTORHEAD", "DJ REGARD", "MEGADETH", "AKIRA THE DON", "VLADIMIR CAUCHEMAR", "MAIA WRIGHT", "IZZY BIZU", "BRELAND", "KYARY PAMYU PAMYU", "HARRISON FIRST", "MORGAN", "MIYA MIYA", "THE STICKMEN PROJECT", "ELLYSE MASON", "ELIJAH BLAKE", "IZZY BIZU", "ATARASHII GAKKO", "MANON", "A$AP TYY", "FRUITS ZIPPER", "SNH48", "NICOLA FASANO", "GRAMATIK + LUXAS", "YOTAM AVNI", "APE RAVE CLUB", "JAMIS"];

  return (
    <StyledLineUpSchedule id="lineup">
      <Container>
        <Title src={LineUpTitle} />
        <StyledLineUpBody>
          <StyledFullLineUpList className="raw-lineup">
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
