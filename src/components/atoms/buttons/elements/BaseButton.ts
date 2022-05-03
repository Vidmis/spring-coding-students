import styled from "styled-components/macro";
import { compose, layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Theme } from "styles/theme";

const defaultButtonProps = compose(layout, space);

export interface DefaultButtonProps
  extends SpaceProps<Theme>,
    LayoutProps<Theme> {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export type ButtonStyles = Pick<
  DefaultButtonProps,
  "margin" | "width" | "height" | "padding"
>;

export const BaseButton = styled.button<ButtonStyles>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: "0.5rem 1rem";
  width: 10rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.fw700};
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #333;
  }

  && {
    ${defaultButtonProps}
  }
`;
