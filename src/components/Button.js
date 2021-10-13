import * as React from "react"
import styled from 'styled-components';
import { breakpoints } from "../../utils/theme";

const Button = (props) => {
  return (
    <StyledButton 
      onClick={props.onClick && props.onClick} 
      className={`${props.type ? props.type : 'default'} ${props.className ? props.className : ''} button`} 
      href={props.href}
      download={props.download}
    >
      {props.label}
    </StyledButton>
  )
}

const StyledButton = styled.a`
  font-family: 'Inter';
  height: 60px;
  line-height: 60px;
  border: 1px solid white;
  border-radius: 80px;
  padding: 0 36px;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.1s ease-in-out all;
  white-space: nowrap;
  @media screen and (max-width: ${breakpoints.md}) {
      font-size: 14px;
      height: 48px;
      line-height: 48px;
      padding: 0 18px;
  }
  &.black {
    color: black;
    border-color: black;
    &:hover {
      background: black;
      color: white;
    }
  }
  &.default {
    color: white;
    &:hover {
      background: white;
      color: black;
    }
  }
`;

export default Button
