import React, { StrictMode } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components/macro";
import { persistor, store } from "state/store";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { theme } from "styles/theme";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    list-style-type: none;
    text-decoration: none;
    color: ${theme.colors.dark};
}
html, body {
    overflow: hidden auto;
    font-family: ${theme.fontFamily.primary};
}
`;

export const wrapRootElement = ({ element }: any) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {element}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
