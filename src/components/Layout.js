import * as React from "react"
import theme from './../../utils/theme';
import styled, { ThemeProvider } from 'styled-components';
import './../css/stylesheet.css';

// markup
const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout id="layout-root">
        {props.children}
      </StyledLayout>
    </ThemeProvider>
  )
}

const StyledLayout = styled.div`
  background: ${(props) => (props.theme.black)};
  min-height: 100vh;
`;

export default Layout
