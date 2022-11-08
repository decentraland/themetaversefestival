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
                    <PartnersSection>
                        <Title src={presenting} />
                        <a href="https://www.kraken.com/" target="_blank">
                            <PartnersImage src={kraken} />
                        </a>
                    </PartnersSection>
                </InnerSection>
                <InnerSection>
                    <Title src={curating} />
                    <CuratingSection>
                        <a href="https://www.soundr.space/" target="_blank">
                            <CuratingImage src={soundr} />
                        </a>
                        <a href="https://limewire.com/" target="_blank">
                            <CuratingImage src={limewire} />
                        </a>
                        <a href="https://www.ozzfest.com/welcome.html" target="_blank">
                            <CuratingImage src={ozz} />
                        </a>
                        <a href="https://www.overthereality.ai/" target="_blank">
                            <CuratingImage src={over} />
                        </a>
                        <a href="https://metatokyo.xyz/" target="_blank">
                            <CuratingImage src={meta} />
                        </a>
                        <a href="https://randomravers.com/" target="_blank">
                            <CuratingImage src={ravers} />  
                        </a>
                        <a target="_blank" href="https://partydegenerates.com">
                            <CuratingImage src={unpaired} />
                        </a>
                        <div style={{ width: '160px'}}></div>
                        <a href="https://partydegenerates.com/" target="_blank">
                            <CuratingImage src={district} />
                        </a>
                        <a href="https://www.vegascity.org/about" target="_blank">
                            <CuratingImage src={vegas} />
                        </a>
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
