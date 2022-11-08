import React from 'react';
import { Container } from '../Container';
import { Section, Stage, StyledBannerMarquee, Title, StageCard, StageImage, StageName, StageLocation, StageHover, StageButton } from './styles';
import title from '../../images/stages-title.png';
import stages from './stages';
import Carousel from "react-multi-carousel";
import Marquee from 'react-fast-marquee';
import genericStages from './genericStages';

const Stages = () => (
    <Section id="stages">
        <Container>
            <Title src={title} />
            <StyledBannerMarquee>
                <Carousel
                    centerMode={false}
                    infinite={true}
                    draggable={true}
                    autoplay={true}
                    autoPlaySpeed={1}
                    customTransition="all 1s linear"
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={true}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1240
                            },
                            items: 4,
                            partialVisibilityGutter: 20
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 60
                        },
                        tablet: {
                            breakpoint: {
                                max: 1240,
                                min: 464
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewindWithAnimation={false}
                    rtl={true}
                    shouldResetAutoplay={true}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
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
                </Carousel>
                <Carousel
                    centerMode={false}
                    infinite={true}
                    draggable={true}
                    autoplay={true}
                    autoPlaySpeed={1}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={true}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1240
                            },
                            items: 4,
                            partialVisibilityGutter: 20
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 60
                        },
                        tablet: {
                            breakpoint: {
                                max: 1240,
                                min: 464
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewindWithAnimation={false}
                    rtl={true}
                    shouldResetAutoplay={true}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    transitionDuration={300}
                >
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
                </Carousel>
            </StyledBannerMarquee>
        </Container>
    </Section>
)

export default Stages;
