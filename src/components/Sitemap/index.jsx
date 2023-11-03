import React from "react";
import { Section, Title, ComingSoon ,Map } from "./styles";
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";

const Sitemap = () => (
    <Section id="sitemap">
        <Container>
            <Title>
                SITE<span style={{'font-family': 'SaintRegular'}}>M</span>AP
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
