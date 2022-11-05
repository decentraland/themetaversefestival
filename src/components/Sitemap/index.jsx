import React from "react";
import { Section, Title } from "./styles";
import title from '../../images/sitemap-title.png';
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";

const Sitemap = () => (
    <Section id="sitemap">
        <Container>
            <Title src={title} />
            <StaticImage
                src={'./../../images/sitemap.svg'}
            />
        </Container>
    </Section>
)

export default Sitemap;
