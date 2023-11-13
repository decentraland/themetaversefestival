import React from "react";
import { Section, Title, Map } from "./styles";
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";

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
        </Container>
    </Section>
)

export default Sitemap;
