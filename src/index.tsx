import React, { StrictMode } from "react";

import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { theme } from "styles/theme";
import { store, persistor } from "state/store";
import { PersistGate } from "redux-persist/integration/react";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    list-style-type: none;
    text-decoration: none;
    color: ${theme.colors.dark};
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
