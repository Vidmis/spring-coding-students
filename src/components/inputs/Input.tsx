import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  as: string;
}

const InputStyles = styled(Box)`
  min-width: 16rem;
`;

export const Input: React.FC<InputProps> = (props) => (
  <InputStyles as='input' {...props} />
);
