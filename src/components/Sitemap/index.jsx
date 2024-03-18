import React from "react";
import { Section, Title, Map } from "./styles";
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";
import polygon from "../../images/STD-polygon.svg";
import { breakpoints } from "../../../utils/theme";
import Button from "../Button";
import styled from "styled-components";
import heroPolygon from "../../images/hero/polygon2.svg";


const Sitemap = () => (
    <Section id="sitemap">
        <Container>
            <Title>
                SITEMAP
            </Title>
            <Map>
                <StaticImage
                    src={'../../images/new_map.png'}
                />
            </Map>
            <SaveTheDate
                href="https://play.decentraland.org/?position=61%2C60"
                target="_blank"
            >
                <p style={{ fontSize: "20px", textAlign: "center", width: "100%" }}>JUMP IN <span><Polygon src={heroPolygon} /></span></p>
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
