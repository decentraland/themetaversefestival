import React from "react";
import { Section, Title, Map } from "./styles";
import title from '../../images/sitemap-title.png';
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";

const Sitemap = () => (
    <Section id="sitemap">
        <Container>
            <Title src={title} />
            <Map>
                <StaticImage
                    src={'./../../images/sitemap.svg'}
                />
            </Map>
        </Container>
    </Section>
)

export default Sitemap;
