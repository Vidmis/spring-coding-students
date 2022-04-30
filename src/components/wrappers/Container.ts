import styled from "styled-components/macro";
import {
  position,
  PositionProps,
  space,
  SpaceProps,
  color,
  BackgroundColorProps,
  compose,
} from "styled-system";

import { tablet } from "styles/breakpoints";
import { Theme } from "styles/theme";

const containerProps = compose(position, space, color);

interface ContainerProps<T>
  extends PositionProps<T>,
    SpaceProps<T>,
    BackgroundColorProps<T> {}

export const Container = styled.div<ContainerProps<Theme>>`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 72rem;

  @media ${tablet} {
    max-width: 100%;
  }

  && {
    ${containerProps}
  }
`;
