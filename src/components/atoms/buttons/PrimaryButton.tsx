import React from "react";
import styled from "styled-components/macro";

import { BaseButton, DefaultButtonProps } from "./Button.ts";

export const PrimaryButton: React.FC<DefaultButtonProps> = ({
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
  /* color: ${({ theme }) => theme.colors.white}; */
  /* border: none; */
  /* background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.primary}; */
  border-radius: ${({ theme }) => theme.radii.b6};
  width: 16rem;
  font-size: ${({ theme }) => theme.fontSizes.fs20};
  line-height: 2.25rem;
  height: 3rem;
  transition: 0.3s;

  &:hover {
    background-color: ${({ backgroundColor, theme }) =>
      backgroundColor ? backgroundColor : theme.colors.primaryHover};
  }
`;
