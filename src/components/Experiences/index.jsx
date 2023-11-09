import React from 'react';
import { Container } from '../Container';
import { Section, Stage, StagesContainer, Title, StageCard, StageImage, StageName, StageLocation, StageHover, StageButton } from './styles';
import ang from '../../images/experiences23/ang.jpg';
import cc from '../../images/experiences23/cc.jpg';
import koa from '../../images/experiences23/KOA.jpg';
import morph from '../../images/experiences23/morph.jpg';
import ms from '../../images/experiences23/ms.jpg';
import sc from '../../images/experiences23/sc.jpg';
import ss from '../../images/experiences23/ss.png';
import tc from '../../images/experiences23/tc.png';
import zg from '../../images/experiences23/zg.jpg';
import tpoko from '../../images/experiences23/tpoko.jpg';


const Experiences = () => (
    <Section id="experiences">
        <Container>
            <Title>
                E<span style={{'font-family': 'SaintRegular'}}>X</span>PERIENCES
            </Title>
            <StagesContainer>
                <Stage href="https://play.decentraland.org/?position=-63%2C54" target="_blank">
                    <StageCard>
                        <StageImage src={ss} />
                        <StageHover>
                            <StageButton>
                                Jump In
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Soundscape
                    </StageName>
                    <StageLocation>
                        [-63,54]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-57%2C59" target="_blank">
                    <StageCard>
                        <StageImage src={koa} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        The Knights of Antrom Music Quest 
                    </StageName>
                    <StageLocation>
                        [-57,59]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-67%2C59" target="_blank">
                    <StageCard>
                        <StageImage src={tpoko} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Metamorphic by House of Tang
                    </StageName>
                    <StageLocation>
                        [-67,59]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-61%2C68" target="_blank">
                    <StageCard>
                        <StageImage src={tc} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        TowerCraft
                    </StageName>
                    <StageLocation>
                        [-61,68]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-70%2C64" target="_blank">
                    <StageCard>
                        <StageImage src={morph} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Met-Art-Morphosis by Low Poly Models
                    </StageName>
                    <StageLocation>
                        [-61,68]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-67%2C63" target="_blank">
                    <StageCard>
                        <StageImage src={ang} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Anogenesis by OgiWorlds
                    </StageName>
                    <StageLocation>
                        [-67,63]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-54%2C58" target="_blank">
                    <StageCard>
                        <StageImage src={zg} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Zheinn Garden by InnKeeper
                    </StageName>
                    <StageLocation>
                        [-54,58]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-57%2C63" target="_blank">
                    <StageCard>
                        <StageImage src={cc} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Crystal Cortex by Micah Alhadeff
                    </StageName>
                    <StageLocation>
                        [-57,63]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-54%2C64" target="_blank">
                    <StageCard>
                        <StageImage src={sc} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        SONIC PLANET by Argent
                    </StageName>
                    <StageLocation>
                        [-54,64]
                    </StageLocation>
                </Stage>
                <Stage href="https://play.decentraland.org/?position=-70%2C58" target="_blank">
                    <StageCard>
                        <StageImage src={ms} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        First Time by Martinez Siesta 
                    </StageName>
                    <StageLocation>
                        [-70,58]
                    </StageLocation>
                </Stage>
            </StagesContainer>
        </Container>
    </Section>
)

export default Experiences;
