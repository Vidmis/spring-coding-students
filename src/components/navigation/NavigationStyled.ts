import styled from "styled-components/macro";
import { Box } from "components";
import { fontSize, FontSizeProps } from "styled-system";
import { theme, Theme } from "styles/theme";

interface INavProps<T> extends FontSizeProps<T> {}

export const NavigationStyled = styled(Box)<INavProps<Theme>>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: row;

    li {
      margin: 0 1rem;
      a {
        color: ${theme.colors.grey};
        &:hover {
          color: ${theme.colors.primary};
        }
      }
    }
  }

  span {
    a {
      margin: 0 0.5rem;
      color: #000;
    }
  }

  && {
    ${fontSize}
  }
`;
