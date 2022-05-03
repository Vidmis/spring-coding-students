import React, { StrictMode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { theme } from "styles/theme";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    list-style-type: none;
    text-decoration: none;
}
body {
    overflow: hidden auto;
}
html {
    font-family: ${theme.fontFamily.primary};
}
`;

export const wrapRootElement = ({ element }: any) => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </StrictMode>
);
