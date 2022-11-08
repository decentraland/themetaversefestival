import React, {useEffect, useState} from "react"
import styled from 'styled-components';

const Component = (props) => {
  return (
    <StyledComponent>
      {props.children}
    </StyledComponent>
  )
}

const StyledComponent = styled.div`

`;

export default Component
