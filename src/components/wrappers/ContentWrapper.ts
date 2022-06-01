import styled from "styled-components/macro";

import { mdTablet } from "styles/breakpoints";
import { Box } from "components";

export const ContentWrapper = styled(Box)`
  margin: 0 auto;
  max-width: 64rem;

  @media ${mdTablet} {
    max-width: 100%;
  }
`;
