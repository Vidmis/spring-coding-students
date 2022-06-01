import {
  BackgroundColorProps,
  BorderProps,
  PositionProps,
  SpaceProps,
  border,
  color,
  compose,
  position,
  space,
} from "styled-system";

import { Box } from "components";
import { Theme } from "styles/theme";
import { mdTablet } from "styles/breakpoints";
import styled from "styled-components/macro";

const containerProps = compose(position, border, space, color);

interface ContainerProps<T>
  extends PositionProps<T>,
    SpaceProps<T>,
    BackgroundColorProps<T>,
    BorderProps<T> {}

export const Container = styled(Box)<ContainerProps<Theme>>`
  margin: 0 auto;
  max-width: 72rem;

  @media ${mdTablet} {
    max-width: 100%;
  }

  && {
    ${containerProps}
  }
`;
