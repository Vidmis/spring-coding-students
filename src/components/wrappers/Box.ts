import styled from "styled-components/macro";
import {
  alignItems,
  AlignItemsProps,
  grid,
  GridProps,
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
  FlexWrapProps,
  flexWrap,
} from "styled-system";

import { Theme } from "styles/theme";

const boxProps = compose(
  color,
  space,
  display,
  position,
  grid,
  zIndex,
  layout,
  border,
  shadow,
  textAlign,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  backgroundColor,
  fontSize
);

export interface IBoxStylesProps<T>
  extends BorderProps<T>,
    ColorProps<T>,
    PositionProps<T>,
    GridProps<T>,
    ZIndexProps<T>,
    DisplayProps<T>,
    BoxShadowProps<T>,
    LayoutProps<T>,
    ShadowProps<T>,
    TextAlignProps<T>,
    SpaceProps<T>,
    JustifyContentProps<T>,
    FlexDirectionProps<T>,
    FlexWrapProps<T>,
    AlignItemsProps<T>,
    BackgroundColorProps<T>,
    FontSizeProps<T> {
  onClick?: () => void;
}

export const Box = styled.div<IBoxStylesProps<Theme>>`
  && {
    ${boxProps};
  }
`;
