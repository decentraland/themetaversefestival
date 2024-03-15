import React from "react";
import { Container } from "../Container";
import {
  Section,
  Stage,
  StagesContainer,
  Title,
  StageCard,
  StageImage,
  StageName,
  StageLocation,
  StageHover,
  StageButton,
  TitlesContainer,
} from "../Experiences/styles";
import stages from "./stages";

const Stages = () => (
  <Section id="galleries">
    <Container>
      <Title>GALLERIES</Title>
      <StagesContainer>
        {stages.map(({ name, href, src, coord }) => (
          <Stage>
            <StageCard>
              <StageImage src={src} />
              <StageHover>
                <a href={href} target="_blank">
                  <StageButton>Jump in</StageButton>
                </a>
              </StageHover>
            </StageCard>
            <TitlesContainer>
              <StageName>{name}</StageName>
              <StageLocation>[{coord}]</StageLocation>
            </TitlesContainer>
          </Stage>
        ))}
      </StagesContainer>
    </Container>
  </Section>
);

export default Stages;
