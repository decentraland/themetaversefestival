import React from "react";
import { Container } from "../Container";
import { Section, Title, ThanksTitle, InnerSection, PartnersSection, PartnersImage, CuratingSection, CuratingImage, ThanksSection, ThanksItem } from "./styles";
import presenting from '../../images/partners-title-presenting.svg';
import curating from '../../images/partners-title-curating.svg';
import kraken from '../../images/logo-kraken.png';
import thanks from '../../images/partners-title-thanks.svg';
import meta from '../../images/logo-metatokyo.png';
import district from '../../images/logo-district.png';
import limewire from '../../images/logo-limewire.png';
import ozz from '../../images/logo-ozz.png';
import ravers from '../../images/logo-ravers.png';
import unpaired from '../../images/logo-unpaired.png';
import over from '../../images/logo-over.png';
import soundr from '../../images/logo-soundr.png';
import vegas from '../../images/logo-vegas.png';


const Partners = () => {
    return (
        <Section id="partners">
            <Container>
                <InnerSection>
                    <Title src={presenting} />
                    <PartnersSection>
                        <PartnersImage src={kraken} />
                    </PartnersSection>
                </InnerSection>
                <InnerSection>
                    <Title src={curating} />
                    <CuratingSection>
                        <CuratingImage src={soundr} />
                        <CuratingImage src={limewire} />
                        <CuratingImage src={meta} />
                        <CuratingImage src={district} />
                        <CuratingImage src={ozz} />
                        <CuratingImage src={ravers} />
                        <CuratingImage src={unpaired} />
                        <CuratingImage src={over} />
                        <CuratingImage src={vegas} />
                    </CuratingSection>
                </InnerSection>
                <InnerSection>
                    <ThanksTitle src={thanks} />
                    <ThanksSection>
                        <ThanksItem href="http://move.ai/">
                            Move.ai -
                        </ThanksItem>
                        <ThanksItem href="https://www.kinetix.tech/">
                            Kinetix -
                        </ThanksItem>
                        <ThanksItem>
                            Burble -
                        </ThanksItem>
                        <ThanksItem>
                            Klezma -
                        </ThanksItem>
                        <ThanksItem>
                            Music Finland -
                        </ThanksItem>
                        <ThanksItem>
                            Beam Studio -
                        </ThanksItem>
                        <ThanksItem>
                            DappCraft -
                        </ThanksItem>
                        <ThanksItem>
                            Polygonal Mind -
                        </ThanksItem>
                        <ThanksItem>
                            Vroomway
                        </ThanksItem>
                    </ThanksSection>
                </InnerSection>
            </Container>
        </Section>
    )
}

export default Partners;
