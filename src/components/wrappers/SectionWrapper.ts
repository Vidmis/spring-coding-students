import styled from "styled-components/macro";
import {
  position,
  PositionProps,
  space,
  SpaceProps,
  minHeight,
  MinHeightProps,
  color,
  BackgroundColorProps,
  compose,
  border,
  BorderProps,
  AlignItemsProps,
  alignItems,
  alignContent,
  AlignContentProps,
  TextAlignProps,
  textAlign,
  minWidth,
  maxWidth,
  MinWidthProps,
  MaxWidthProps,
} from "styled-system";

import { Theme } from "styles/theme";

const sectionProps = compose(
  position,
  space,
  minHeight,
  color,
  border,
  alignItems,
  alignContent,
  textAlign,
  minWidth,
  maxWidth
);
interface SectionWrapperProps<T>
  extends PositionProps<T>,
    SpaceProps<T>,
    MinHeightProps<T>,
    BackgroundColorProps<T>,
    BorderProps<T>,
    AlignItemsProps<T>,
    AlignContentProps<T>,
    TextAlignProps<T>,
    MinWidthProps<T>,
    MaxWidthProps<T> {}

export const SectionWrapper = styled.section<SectionWrapperProps<Theme>>`
  && {
    ${sectionProps}
  }
`;
