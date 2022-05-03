import styled from "styled-components/macro";

interface IRecipesGridStyledProps {
  bgColor?: string;
  isSelected: boolean;
}

export const RecipesGridStyled = styled.li<IRecipesGridStyledProps>`
  background: ${({ bgColor }) =>
    bgColor ||
    "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)"};
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem;
  position: relative;
  border-radius: 1.5rem;

  .heartIco {
    border-radius: 20rem;
    width: 2rem;
    height: 2rem;
    color: ${({ isSelected }) => (isSelected ? "#FF6363" : "#DBE2E5")};
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 2rem;
    top: 1rem;
  }

  span {
    margin-left: 0.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`;
