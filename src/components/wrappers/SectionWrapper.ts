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
} from "styled-system";

import { mobile, tablet } from "styles/breakpoints";
import { Theme } from "styles/theme";

const sectionProps = compose(position, space, minHeight, color);
interface SectionWrapperProps<T>
  extends PositionProps<T>,
    SpaceProps<T>,
    MinHeightProps<T>,
    BackgroundColorProps<T> {}

export const SectionWrapper = styled.section<SectionWrapperProps<Theme>>`
  position: relative;
  padding: 4rem;
  background-color: #fff;

  @media ${tablet} {
    padding: 3rem;
  }

  @media ${mobile} {
    padding: 1rem;
  }

  && {
    ${sectionProps}
  }
`;
