import React from "react";
import styled from "styled-components/macro";
import { Box } from "components";

type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  minWidth?: string;
  maxWidth?: string;
  placeholder?: string;
  type?: InputType;
  id?: string;
  name?: string;
  value?: string | number;
  required?: any;
  onChange?: () => void;
}

export const Input = styled(Box).attrs({ as: "input" })<InputProps>``;
