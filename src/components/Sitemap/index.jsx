import React from "react";
import { Section, Title, Map } from "./styles";
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";
import polygon from "../../images/STD-polygon.svg";
import { breakpoints } from "../../../utils/theme";
import Button from "../Button";
import styled from "styled-components";


const Sitemap = () => (
    <Section id="sitemap">
        <Container>
            <Title>
                SITE<span style={{'font-family': 'SaintRegular'}}>M</span>AP
            </Title>
            <Map>
                <StaticImage
                    src={'./../../images/map_export.png'}
                />
            </Map>
            <SaveTheDate
                href="https://events.decentraland.org/event/?id=97aff492-b4b9-4ba1-bd08-bfa7e32be036&utm_source=landingpage&utm_medium=organic&utm_campaign=DCLMF23"
                target="_blank"
            >
                <p style={{ fontSize: "20px", textAlign: "center", width: "100%" }}>JUMP IN <span><Polygon src={polygon} /></span></p>
            </SaveTheDate>
        </Container>
    </Section>
)


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

export default Sitemap;
