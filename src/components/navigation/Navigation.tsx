import { MENU_LIST, ROUTES } from "consts";
import React, { useState } from "react";

import { Box } from "components/wrappers/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "components/typography/Typography";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { useQuery } from "styles/breakpoints";

interface INavListItem {
  menuItem: string;
}

interface INavigation {
  isMenuVisible: boolean;
}

const NavListItem = ({ menuItem }: INavListItem) => (
  <Box as='li' mx='s16'>
    <Typography className='list-item' type='Link' to='#' color='white'>
      {menuItem}
    </Typography>
  </Box>
);

export const Navigation: React.FC<INavigation> = ({ isMenuVisible }) => {
  const [isViewed, setIsViewed] = useState(false);
  const size = useQuery();

  return (
    <NavigationStyled
      display={{ _: "flex" }}
      justifyContent={{ _: "space-between" }}
      px={{ _: "s32" }}
      zIndex='10'
    >
      <Typography
        className='logo'
        type='Link'
        fontWeight={{ _: "fw600" }}
        color='primary'
        onClick={() => navigate(ROUTES.HOME)}
      >
        KILO.RIDE
      </Typography>
      {isMenuVisible &&
        (!size.isTablet ? (
          <Box className='menu'>
            <FontAwesomeIcon
              icon={faBars}
              className='burgerIcon'
              onClick={() => setIsViewed(!isViewed)}
            />
            {isViewed && (
              <Box
                className='menu-list'
                position='absolute'
                top='3rem'
                as='ul'
                display='flex'
                flexDirection='column'
                justifyContent='space-evenly'
                backgroundColor='primary'
                mt='s32'
                borderRadius='b8'
                minWidth='17rem'
                minHeight='26vh'
                p='s16'
                boxShadow='0px 0px 18px -10px black'
              >
                {MENU_LIST.map((menuItem: string, index: number) => (
                  <NavListItem key={index + menuItem} menuItem={menuItem} />
                ))}
              </Box>
            )}
          </Box>
        ) : (
          <Box className='un-list' display='flex' as='ul'>
            {MENU_LIST.map((menuItem: string, index: number) => (
              <NavListItem key={index + menuItem} menuItem={menuItem} />
            ))}
          </Box>
        ))}
    </NavigationStyled>
  );
};

const NavigationStyled = styled(Box)`
  .burgerIcon {
    font-size: 2rem;
    cursor: pointer;
    path {
      color: ${theme.colors.white};
    }
  }

  @media (max-width: ${theme.breakpoints.mdTablet}) {
    .menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  .un-list li {
    &:first-child a {
      color: ${theme.colors.dark};
    }
  }
`;
