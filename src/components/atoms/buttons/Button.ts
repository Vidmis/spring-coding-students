import { Box } from "./../../wrappers/Box";
import styled from "styled-components/macro";
import { buttonStyle, ButtonStyleProps, compose } from "styled-system";
import { Theme } from "styles/theme";

const buttonProps = compose(buttonStyle);

interface IButtonProps<T> extends ButtonStyleProps<T> {
  disabled?: boolean;
}

export const Button = styled(Box).attrs({ as: "button" })<IButtonProps<Theme>>`
  && {
    ${buttonProps}
  }
`;
