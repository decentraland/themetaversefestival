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
} from "../Experiences/styles";
import stages from "./stages";

const Stages = () => (
  <Section id="stages">
    <Container>
      <Title>
        GALLERIES
      </Title>
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
            <StageName>{name}</StageName>
            <StageLocation>[{coord}]</StageLocation>
          </Stage>
        ))}
      </StagesContainer>
    </Container>
  </Section>
);

export default Stages;
