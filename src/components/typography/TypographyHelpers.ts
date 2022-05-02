import { css } from "styled-components/macro";

import { mobile } from "styles/breakpoints";
import { Theme } from "styles/theme";
import { TextType } from "./Typography";

export const applyTextType = (type: TextType, theme: Theme) => {
  switch (type) {
    case "h1":
      return css`
        font-size: ${theme.typography.h1.fontSize};
        line-height: ${theme.typography.h1.lineHeight};
        font-weight: ${theme.typography.h1.fontWeight};
        @media ${mobile} {
          font-size: ${theme.typography.h1.fontSizeMobile};
          line-height: ${theme.typography.h1.lineHeightMobile};
          font-weight: ${theme.typography.h1.fontWeightMobile};
        }
      `;
  }
};
