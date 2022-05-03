import styled from "styled-components/macro";

interface ICategoriesStyledProps {
  bgColor?: string;
}

export const CategoriesStyled = styled.li<ICategoriesStyledProps>`
  background: ${({ bgColor }) => bgColor || ""};
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 1.5rem;

  img {
    margin: 16px;
  }
`;
