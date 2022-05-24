import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { Image } from "components";
import { MENU_LIST } from "consts";
import { Box } from "components/wrappers/Box";
import { theme } from "styles/theme";
import { Typography } from "components/typography/Typography";

interface INavListItem {
  menuItem: string;
}

const NavListItem = ({ menuItem }: INavListItem) => (
  <Box as='li' p='s10' mr='s48'>
    <Typography type='link' to='#' color='white'>
      {menuItem}
    </Typography>
  </Box>
);

export const Navigation: React.FC = () => {
  return (
    <NavigationStyled
      fontSize='fs16'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      mt='s48'
    >
      <Typography className='logo' type='link' color='primary'>
        KILO.RIDE
      </Typography>
      <Box className='unList' as='ul'>
        {MENU_LIST.map((menuItem: string, index: number) => (
          <NavListItem key={index + menuItem} menuItem={menuItem} />
        ))}
      </Box>
    </NavigationStyled>
  );
};

const NavigationStyled = styled(Box)`
  .unList li {
    &:first-child a {
      color: ${theme.colors.dark};
    }
  }
`;
