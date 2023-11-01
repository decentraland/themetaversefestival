import React from "react";
import { Section, Title, ComingSoon ,Map } from "./styles";
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";

const Sitemap = () => (
    <Section id="sitemap">
        <Container>
            <Title>
                SITEMAP
            </Title>
            <ComingSoon>
                Coming soon...
            </ComingSoon>
            {/* <Map>
                <StaticImage
                    src={'./../../images/sitemap.svg'}
                />
            </Map> */}
        </Container>
    </Section>
)

export default Sitemap;
