import React from 'react';
import { Container } from '../Container';
import { Section, Stage, StyledBannerMarquee, Title, StageCard, StageImage, StageName, StageLocation, StageHover, StageButton } from './styles';
import title from '../../images/stages-title.png';
import stages from './stages';
import Marquee from 'react-fast-marquee';
import genericStages from './genericStages';

const Stages = () => (
    <Section id="stages">
        <Container>
            <Title src={title} />
            <StyledBannerMarquee>
                <Marquee>
                    {
                        stages.map(({ name, href, src, coord }) => (
                            <Stage href={href} target="_blank">
                                <StageCard>
                                    <StageImage src={src} />
                                    <StageHover>
                                        <StageButton>
                                            Jump in
                                        </StageButton>
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
                </Marquee>
                <Marquee direction="right">
                    {
                        genericStages.map(({ name, href, src, coord }) => (
                            <Stage href={href} target="_blank">
                                <StageCard>
                                    <StageImage src={src} />
                                    <StageHover>
                                        <StageButton>
                                            Jump in
                                        </StageButton>
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
                </Marquee>
            </StyledBannerMarquee>
        </Container>
    </Section>
)

export default Stages;
