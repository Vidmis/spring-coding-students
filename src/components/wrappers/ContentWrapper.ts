import styled from "styled-components/macro";

import { tablet } from "styles/breakpoints";
import { Box } from "components";

// interface ConentProps<T> extends GridProps<T> {}

export const ContentWrapper = styled(Box)`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 58rem;

  @media ${tablet} {
    max-width: 100%;
  }
`;
