import React from "react";
import styled from "styled-components/macro";

import { BaseButton, DefaultButtonProps } from "./elements/BaseButton";

export const DefaultBUtton: React.FC<DefaultButtonProps> = ({
  status,
  onClick,
  children,
  ...rest
}) => (
  <Button {...rest}>{status === "loading" ? "Loading... " : children}</Button>
);

const Button = styled(BaseButton)<DefaultButtonProps>`
  color: ${({ theme }) => theme.colors.accent};
`;
