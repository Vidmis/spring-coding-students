import styled from "styled-components/macro";

import { mdTablet } from "styles/breakpoints";
import { Box } from "components";

export const ContentWrapper = styled(Box)`
  max-width: 58rem;

  @media ${mdTablet} {
    max-width: 100%;
  }
`;
