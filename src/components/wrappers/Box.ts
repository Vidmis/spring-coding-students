import {
  AlignItemsProps,
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
