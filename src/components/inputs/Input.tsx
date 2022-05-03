import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  minWidth?: string;
  maxWidth?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string | number;
  required?: any;
  onChange?: () => void;
}

export const Input = styled(Box).attrs({ as: "input" })<InputProps>``;
