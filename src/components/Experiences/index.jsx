import React from 'react';
import { Container } from '../Container';
import { Section, Stage, StagesContainer, Title, TextTitle, StageCard, StageImage, StageName, StageLocation, StageHover, StageButton } from './styles';
import title from '../../images/experiences-title.png';
import decentRally from '../../images/experiences/decent-rally.png';
import theVoice from '../../images/experiences/the-voice.png';
import backstageQuest from '../../images/experiences/backstage-quest.png';
import towerOfBabel from '../../images/experiences/tower-of-babel.png';
import whiteRabbit from '../../images/experiences/follow-rabbit.png';

const Experiences = () => (
    <Section id="experiences">
        <Container>
            <Title src={title} />
            <StagesContainer>

                <Stage href="https://play.decentraland.org/?position=-57%2C58&realm=marvel&island=Ic5t9" target="_blank">
                    <StageCard>
                        <StageImage src={whiteRabbit} />
                        <StageHover>
                            <StageButton>
                                Jump In
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Follow the white rabbit
                    </StageName>
                    <StageLocation>
                        [-57,58]
                    </StageLocation>
                </Stage>

                <Stage href="https://play.decentraland.org/?position=-63%2C54&realm=marvel&island=Ic5t9" target="_blank">
                    <StageCard>
                        <StageImage src={backstageQuest} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Backstage Pass Quest
                    </StageName>
                    <StageLocation>
                        [-63,54]
                    </StageLocation>
                </Stage>

                <Stage href="https://play.decentraland.org/?position=-63%2C71&realm=marvel&island=Ic5t9" target="_blank">
                    <StageCard>
                        <StageImage src={towerOfBabel} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Tower of Babel
                    </StageName>
                    <StageLocation>
                        [-63,71]
                    </StageLocation>
                </Stage>

                <Stage href="https://play.decentraland.org/?position=-54%2C66&realm=marvel&island=Ic9b0" target="_blank">
                    <StageCard>
                        <StageImage src={decentRally} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        Decent Rally
                    </StageName>
                    <StageLocation>
                        [-54,66]
                    </StageLocation>
                </Stage>

                <Stage href="https://play.decentraland.org/?position=-67%2C86&realm=marvel&island=Ic5t9" target="_blank">
                    <StageCard>
                        <StageImage src={theVoice} />
                        <StageHover>
                            <StageButton>
                                Jump in
                            </StageButton>
                        </StageHover>
                    </StageCard>
                    <StageName>
                        The Voice
                    </StageName>
                    <StageLocation>
                        [-67,86]
                    </StageLocation>
                </Stage>


            </StagesContainer>
        </Container>
    </Section>
)

export default Experiences;
