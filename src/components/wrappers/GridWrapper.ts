import styled from "styled-components/macro";
import { grid, GridProps, compose } from "styled-system";

import { tablet } from "styles/breakpoints";
import { Box } from "./Box";
import { Theme } from "styles/theme";

interface GridWrapperProps<T> extends GridProps<T> {}

const gridProps = compose(grid);

export const GridWrapper = styled(Box)<GridWrapperProps<Theme>>`
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  justify-content: center;
  padding: 3rem;
  grid-gap: 1rem;
  max-width: 80rem;

  .ad_image {
    grid-column: 3;
    grid-row: 2;

    @media ${tablet} {
      grid-template-columns: 3;
      grid-column: 1;
      grid-row: 2;
    }
  }
  && {
    ${gridProps}
  }
`;
