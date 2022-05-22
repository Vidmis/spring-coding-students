import React, { ReactNode } from "react";
import { Property } from "csstype";
import styled from "styled-components/macro";
import {
  compose,
  fontWeight,
  lineHeight,
  space,
  SpaceProps,
  textAlign,
  TypographyProps,
  textStyle,
  typography,
  minWidth,
  maxWidth,
  MinWidthProps,
  MaxWidthProps,
} from "styled-system";

import { Colors, Theme } from "styles/theme";

import { applyTextType } from "./TypographyHelpers";

export type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "ul"
  | "list"
  | "link"
  | "body14"
  | "body16"
  | "body18"
  | "body20"
  | "body24"
  | "body28"
  | "caption12"
  | "span";

export enum TextTag {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
  "h5" = "h5",
  "h6" = "h6",
  "span" = "span",
  "ul" = "ul",
  "list" = "li",
  "link" = "a",
  "body14" = "p",
  "body16" = "p",
  "body18" = "p",
  "body20" = "p",
  "body24" = "p",
  "body28" = "p",
  "caption12" = "p",
}

type AsAttributeType = string | React.ComponentType;

const typographyProperties = compose(
  textAlign,
  fontWeight,
  lineHeight,
  textStyle,
  typography,
  space,
  minWidth,
  maxWidth
);

export interface TextProps
  extends SpaceProps<Theme>,
    TypographyProps<Theme>,
    MinWidthProps<Theme>,
    MaxWidthProps<Theme> {
  color?: Colors;
  type?: TextType;
  to?: string;
  cursor?: string;
  textTransform?: Property.TextTransform;
  textDecoration?: Property.TextDecoration;
  onClick?: () => void;
  children: ReactNode;
}

export const Typography: React.FC<TextProps> = ({
  type = "body16",
  children,
  ...props
}) => {
  const as = TextTag[type] as AsAttributeType;

  return (
    <Text as={as} type={type} {...props}>
      {children}
    </Text>
  );
};

const Text = styled.p<TextProps>`
  padding: 0;

  ${({ type, theme }) =>
    type && applyTextType(type as TextType, theme as Theme)};

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  cursor: ${({ cursor }) => (cursor ? "pointer" : "auto")};

  && {
    ${typographyProperties}
  }
  text-transform: ${({ textTransform }) => textTransform || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
`;
