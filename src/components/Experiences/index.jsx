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
} from "./styles";
import highlights from "./highlights";

const Highlights = () => (
  <Section id="experiences">
    <Container>
      <Title>HIGHLIGHTS</Title>
      <StagesContainer>
        {highlights.map((experience, index) => (
          <Stage key={index} href={experience.href} target="_blank">
            <StageCard>
              <StageImage src={experience.src} />
              <StageHover>
                <StageButton>Jump in</StageButton>
              </StageHover>
            </StageCard>
            <StageName>{experience.name}</StageName>
            <StageLocation>{experience.location}</StageLocation>
          </Stage>
        ))}
      </StagesContainer>
    </Container>
  </Section>
);

export default Highlights;
