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
    case "h2":
      return css`
        font-size: ${theme.typography.h2.fontSize};
        line-height: ${theme.typography.h2.lineHeight};
        font-weight: ${theme.typography.h2.fontWeight};
        @media ${mobile} {
          font-size: ${theme.typography.h2.fontSizeMobile};
          line-height: ${theme.typography.h2.lineHeightMobile};
          font-weight: ${theme.typography.h2.fontWeightMobile};
        }
      `;
    case "h3":
      return css`
        font-size: ${theme.typography.h3.fontSize};
        line-height: ${theme.typography.h3.lineHeight};
        font-weight: ${theme.typography.h3.fontWeight};
        @media ${mobile} {
          font-size: ${theme.typography.h3.fontSizeMobile};
          line-height: ${theme.typography.h3.lineHeightMobile};
          font-weight: ${theme.typography.h3.fontWeightMobile};
        }
      `;
    case "h4":
      return css`
        font-size: ${theme.typography.h4.fontSize};
        line-height: ${theme.typography.h4.lineHeight};
        font-weight: ${theme.typography.h4.fontWeight};
        @media ${mobile} {
          font-size: ${theme.typography.h4.fontSizeMobile};
          line-height: ${theme.typography.h4.lineHeightMobile};
          font-weight: ${theme.typography.h4.fontWeightMobile};
        }
      `;
    case "h5":
      return css`
        font-size: ${theme.typography.h5.fontSize};
        line-height: ${theme.typography.h5.lineHeight};
        font-weight: ${theme.typography.h5.fontWeight};
        @media ${mobile} {
          font-size: ${theme.typography.h5.fontSizeMobile};
          line-height: ${theme.typography.h5.lineHeightMobile};
          font-weight: ${theme.typography.h5.fontWeightMobile};
        }
      `;
    case "h6":
      return css`
        font-size: ${theme.typography.h6.fontSize};
        line-height: ${theme.typography.h6.lineHeight};
        font-weight: ${theme.typography.h6.fontWeight};
        @media ${mobile} {
          font-size: ${theme.typography.h6.fontSizeMobile};
          line-height: ${theme.typography.h6.lineHeightMobile};
          font-weight: ${theme.typography.h6.fontWeightMobile};
        }
      `;
    case "body14":
      return css`
        font-size: ${theme.typography.body14.fontSize};
        line-height: ${theme.typography.body14.lineHeight};
        font-weight: ${theme.typography.body14.fontWeight};
        color: ${theme.typography.body14.color};
      `;
    case "body16":
      return css`
        font-size: ${theme.typography.body16.fontSize};
        line-height: ${theme.typography.body16.lineHeight};
        font-weight: ${theme.typography.body16.fontWeight};
        color: ${theme.typography.body16.color};
      `;
    case "body18":
      return css`
        font-size: ${theme.typography.body18.fontSize};
        line-height: ${theme.typography.body18.lineHeight};
        font-weight: ${theme.typography.body18.fontWeight};
        color: ${theme.typography.body18.color};
      `;
    case "body20":
      return css`
        font-size: ${theme.typography.body20.fontSize};
        line-height: ${theme.typography.body20.lineHeight};
        font-weight: ${theme.typography.body20.fontWeight};
        color: ${theme.typography.body20.color};
      `;
    case "body24":
      return css`
        font-size: ${theme.typography.body24.fontSize};
        line-height: ${theme.typography.body24.lineHeight};
        font-weight: ${theme.typography.body24.fontWeight};
        color: ${theme.typography.body24.color};
      `;
    case "body28":
      return css`
        font-size: ${theme.typography.body28.fontSize};
        line-height: ${theme.typography.body28.lineHeight};
        font-weight: ${theme.typography.body28.fontWeight};
        color: ${theme.typography.body28.color};
      `;
    case "link":
      return css`
        font-size: ${theme.typography.link.fontSize};
        font-weight: ${theme.typography.link.fontWeight};
        line-height: ${theme.typography.link.lineHeight};
        color: ${theme.typography.link.color};
        cursor: ${theme.typography.link.cursor};
      `;
    default:
      return;
  }
};
