import React, { FormEvent } from "react";
import styled from "styled-components/macro";
import { Box } from "components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: string;
  max?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string | number | null;
  required?: any;
  onChange?: (e: FormEvent<HTMLInputElement>) => void | (() => void);
  autocomplete?: string;
}

export const Input = styled(Box).attrs({ as: "input" })<InputProps>``;
