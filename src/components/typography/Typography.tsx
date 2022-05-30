import {
  BorderProps,
  ColorProps,
  MaxWidthProps,
  MinWidthProps,
  SpaceProps,
  TypographyProps,
  borders,
  color,
  compose,
  fontWeight,
  lineHeight,
  maxWidth,
  minWidth,
  space,
  textAlign,
  textStyle,
  typography,
} from "styled-system";
import { Colors, Theme } from "styles/theme";
import React, { ReactNode } from "react";

import { Property } from "csstype";
import { applyTextType } from "./TypographyHelpers";
import styled from "styled-components/macro";

export type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "ul"
  | "list"
  | "Link"
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
  "Link" = "a",
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
  color,
  textAlign,
  fontWeight,
  lineHeight,
  textStyle,
  typography,
  space,
  minWidth,
  maxWidth,
  borders
);

export interface TextProps
  extends SpaceProps<Theme>,
    TypographyProps<Theme>,
    MinWidthProps<Theme>,
    MaxWidthProps<Theme>,
    ColorProps<Theme>,
    BorderProps<Theme> {
  className?: string;
  type?: TextType;
  to?: string;
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

  && {
    ${typographyProperties}
  }
  text-transform: ${({ textTransform }) => textTransform || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
`;
