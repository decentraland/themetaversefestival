import React from "react";
import styled from "styled-components";
import dreamverse from "./../images/sponsors/dreamverse.png";
import genies from "./../images/sponsors/genies.png";
import metakey from "./../images/sponsors/metakey.png";
import kraken from "./../images/sponsors/kraken.png";
import monkey from "./../images/sponsors/monkey-shoulder.png";
import polygon from "./../images/sponsors/polygon.png";
import soundr from "./../images/sponsors/soundr.png";
import yahoo from "./../images/sponsors/yahoo.png";
import { breakpoints } from "../../utils/theme";

const sponsors = [
  { name: "Dreamverse", logoFile: dreamverse },
  { name: "Genies", logoFile: genies },
  { name: "Kraken", logoFile: kraken },
  { name: "MetaKey", logoFile: metakey, style: { width: "80%" } },
  { name: "Monkey Shoulder", logoFile: monkey, style: { width: "80%" } },
  { name: "Polygon", logoFile: polygon },
  { name: "Soundr", logoFile: soundr },
  { name: "Yahoo", logoFile: yahoo },
];

const Sponsors = React.memo(() => {
  if (sponsors.length === 0) {
    return null;
  }

  return (
    <StyledSponsors id="sponsors" className="what-is-metaverse">
      <h2>PROUDLY SUPPORTED BY</h2>
      <ul className="sponsor-list">
        {sponsors.map((sponsor, i) => (
          <li className="sponsor" key={i}>
            <img
              title={sponsor.name}
              alt={sponsor.name}
              src={sponsor.logoFile}
              style={sponsor.style}
            />
          </li>
        ))}
      </ul>
    </StyledSponsors>
  );
});

const StyledSponsors = styled.div`
  background: #f7f2ed;
  display: flex;
  flex-direction: column;
  padding: 52px 70px 100px;
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 52px 24px;
  }
  h2,
  p {
    color: black;
  }
  h2 {
    font-size: 81px;
    margin-bottom: 72px;
    font-family: "SpaceMono";
    text-transform: uppercase;
    font-weight: 400;
    @media screen and (max-width: ${breakpoints.md}) {
      margin-bottom: 24px;
      font-size: 62px;
    }
  }
  .sponsor-list {
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: ${breakpoints.md}) {
      margin-bottom: 100px;
    }
    .sponsor {
      width: calc(100% / 4);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2em;
      @media screen and (max-width: ${breakpoints.md}) {
        width: calc(100% / 2);
      }
      img {
        max-width: 100%;
      }
    }
  }
`;

export default Sponsors;
