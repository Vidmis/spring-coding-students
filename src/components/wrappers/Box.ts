import styled from "styled-components/macro";
import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  flexDirection,
  FlexDirectionProps,
  fontSize,
  FontSizeProps,
  justifyContent,
  JustifyContentProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  zIndex,
  ZIndexProps,
} from "styled-system";

import { Theme } from "styles/theme";

const boxProps = compose(
  space,
  color,
  display,
  position,
  zIndex,
  layout,
  border,
  shadow,
  textAlign,
  flexDirection,
  justifyContent,
  alignItems,
  backgroundColor,
  fontSize
);

export interface IBoxStylesProps<T>
  extends BorderProps<T>,
    ColorProps<T>,
    PositionProps<T>,
    ZIndexProps<T>,
    DisplayProps<T>,
    BoxShadowProps<T>,
    LayoutProps<T>,
    ShadowProps<T>,
    TextAlignProps<T>,
    SpaceProps<T>,
    JustifyContentProps<T>,
    FlexDirectionProps<T>,
    AlignItemsProps<T>,
    BackgroundColorProps<T>,
    FontSizeProps<T> {}

export const Box = styled.div<IBoxStylesProps<Theme>>`
  && {
    ${boxProps};
  }
`;
