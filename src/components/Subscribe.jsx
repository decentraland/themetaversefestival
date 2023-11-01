import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

const SubscribeBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Gothic;
  width: 50%;
  margin: auto;
`

const SubscriptionText = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`

export const Subscribe = () => {
  return (
  <Container>
    <SubscribeBox>
      <SubscriptionText>
        Sign up to the Decentraland Newsletter for the latest on the festival, product updates and more.
      </SubscriptionText>
      <iframe 
        src="https://embeds.beehiiv.com/15b3ad6a-7b5c-40b8-bac4-36b6045d876b?slim=true" 
        data-test-id="beehiiv-embed" 
        height="52" 
        frameborder="0" 
        scrolling="no" 
        style={{margin: 0, borderRadius: "0px !important", backgroundColor:"transparent", fontFamily: "Gothic"}}
      />
    </SubscribeBox>
  </Container>
  )
}

