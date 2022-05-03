import styled from "styled-components/macro";
import { flexbox, FlexboxProps, compose } from "styled-system";

import { Box } from "./Box";
import { Theme } from "styles/theme";

interface FlexProps<T> extends FlexboxProps<T> {}

const flexProps = compose(flexbox);

export const FlexWrapper = styled(Box)<FlexProps<Theme>>`
  display: flex;

  && {
    ${flexProps}
  }
`;
