import styled from "styled-components/macro";
import { grid, GridProps, compose } from "styled-system";

import { tablet } from "styles/breakpoints";
import { Box } from "./Box";
import { Theme } from "styles/theme";

interface GridWrapperProps<T> extends GridProps<T> {}

const gridProps = compose(grid);

export const GridWrapper = styled(Box)<GridWrapperProps<Theme>>`
  display: grid;
  && {
    ${gridProps}
  }
`;
