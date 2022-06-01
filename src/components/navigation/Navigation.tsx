import React, { useState } from "react";
import styled from "styled-components/macro";
import { MENU_LIST } from "consts";
import { Box } from "components/wrappers/Box";
import { theme } from "styles/theme";
import { Typography } from "components/typography/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "styles/breakpoints";
import { navigate } from "gatsby";

interface INavListItem {
  menuItem: string;
}

const NavListItem = ({ menuItem }: INavListItem) => (
  <Box as='li' mx='s16'>
    <Typography className='list-item' type='link' to='#' color='white'>
      {menuItem}
    </Typography>
  </Box>
);

export const Navigation: React.FC = () => {
  const [isViewed, setIsViewed] = useState(false);
  const size = useQuery();

  return (
    <NavigationStyled
      display={{ _: "flex" }}
      justifyContent={{ _: "space-between" }}
      px={{ _: "s32" }}
      pt={{ _: "s32" }}
      zIndex='10'
    >
      <Typography
        className='logo'
        type='link'
        fontWeight={{ _: "fw600" }}
        color='primary'
        onClick={() => navigate("/")}
      >
        KILO.RIDE
      </Typography>
      {!size.isTablet ? (
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
      )}
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
