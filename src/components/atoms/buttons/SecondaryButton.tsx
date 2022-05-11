import React from "react";
import styled from "styled-components/macro";

import { BaseButton, DefaultButtonProps } from "./Button.ts";

export const SecondaryButton: React.FC<DefaultButtonProps> = ({
  status,
  children,
  onClick,
  ...rest
}) => (
  <Button onClick={onClick} {...rest}>
    {status === "loading" ? "Loading..." : children}
  </Button>
);

const Button = styled(BaseButton)<DefaultButtonProps>`
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.transparent};
  border-radius: ${({ theme }) => theme.radii.b6};
  width: 16rem;
  font-size: ${({ theme }) => theme.fontSizes.fs20};
  line-height: 2.25rem;
  height: 3rem;
  transition: 0.3s;

  &:hover {
    background-color: ${({ hoverColor, theme }) =>
      hoverColor ? hoverColor : theme.colors.white};
  }
`;
