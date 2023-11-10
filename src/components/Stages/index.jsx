import React from 'react';
import { Container } from '../Container';
import { Section, Stage, StagesContainer, Title, StageCard, StageImage, StageName, StageLocation, StageHover, StageButton } from './styles';
import stages from './stages';
import Carousel from "react-multi-carousel";

const Stages = () => (
    <Section id="stages">
        <Container>
            <Title>
                STA<span style={{'font-family': 'SaintRegular'}}>G</span>ES
            </Title>
            <StagesContainer>
            {
                stages.map(({ name, href, src, coord }) => (
                    <Stage>
                        <StageCard>
                            <StageImage src={src} />
                            <StageHover>
                                <a  href={href} target="_blank">
                                    <StageButton>
                                        Jump in
                                    </StageButton>
                                </a>
                            </StageHover>
                        </StageCard>
                        <StageName>
                            {name}
                        </StageName>
                        <StageLocation>
                            [{coord}]
                        </StageLocation>
                    </Stage>
                ))
            }
            </StagesContainer>
        </Container>
    </Section>
    
)



export default Stages;
