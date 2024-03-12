import * as React from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../utils/theme";

const Button = ({
  onClick,
  type,
  className,
  href,
  download,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      onClick={onClick && onClick}
      href={href}
      download={download}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  font-family: Gothic;
  border: 2px solid #FFA450;
  border-radius: 32px;
  height: 60px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 60px;
  font-weight: 600;
  letter-spacing: 0.165rem;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  transition: 0.1s ease-in-out all;
  white-space: nowrap;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media screen and (max-width: ${breakpoints.md}) {
      font-size: 14px;
      height: 48px;
      line-height: 48px;
      padding: 0 18px;
  };
  @media screen and (min-width: ${breakpoints.md}) {
    min-width: 350px;
};
  :hover {
    color: ${theme.accent};
  }
  img {
    path {
      fill: ${theme.accent};
    }
  }
`;

export default Button;
