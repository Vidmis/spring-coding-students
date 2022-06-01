import {
  AlignItemsProps,
  BackgroundColorProps,
  BorderProps,
  BordersProps,
  BoxShadowProps,
  ColorProps,
  DisplayProps,
  FlexDirectionProps,
  FlexWrapProps,
  FontSizeProps,
  GridProps,
  JustifyContentProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TextAlignProps,
  ZIndexProps,
  alignItems,
  backgroundColor,
  border,
  borders,
  color,
  compose,
  display,
  flexDirection,
  flexWrap,
  fontSize,
  grid,
  justifyContent,
  layout,
  position,
  shadow,
  space,
  textAlign,
  zIndex,
} from "styled-system";

import { Theme } from "styles/theme";
import styled from "styled-components/macro";

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
  fontSize,
  borders
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
    FontSizeProps<T>,
    BorderProps<T>,
    BordersProps<T> {
  onClick?: () => void;
}

export const Box = styled.div<IBoxStylesProps<Theme>>`
  && {
    ${boxProps};
  }
`;
