import styled from "styled-components/macro";
import { Box } from "components";
import { Theme } from "styles/theme";

export const HeaderStyled = styled(Box)`
  img {
    width: 100%;
    height: 100%;
  }
  span {
    padding: 4px;
  }
  .lazyload-wrapper {
    height: 100%;
  }
`;
