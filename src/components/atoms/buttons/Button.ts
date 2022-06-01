import { ButtonStyleProps, buttonStyle, compose } from "styled-system";

import { Box } from "./../../wrappers/Box";
import { Theme } from "styles/theme";
import styled from "styled-components/macro";

const buttonProps = compose(buttonStyle);

interface IButtonProps<T> extends ButtonStyleProps<T> {
  disabled?: boolean;
}

export const Button = styled(Box).attrs({ as: "button" })<IButtonProps<Theme>>`
  && {
    ${buttonProps}
  }
`;
