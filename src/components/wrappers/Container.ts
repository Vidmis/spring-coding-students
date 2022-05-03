import styled from "styled-components/macro";
import { Box } from "components";
import {
  position,
  PositionProps,
  space,
  SpaceProps,
  color,
  BackgroundColorProps,
  compose,
  BorderProps,
  border,
} from "styled-system";

import { tablet } from "styles/breakpoints";
import { Theme } from "styles/theme";

const containerProps = compose(position, border, space, color);

interface ContainerProps<T>
  extends PositionProps<T>,
    SpaceProps<T>,
    BackgroundColorProps<T>,
    BorderProps<T> {}

export const Container = styled(Box)<ContainerProps<Theme>>`
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
