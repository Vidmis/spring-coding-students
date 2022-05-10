import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { Image } from "components";
import { MENU_LIST } from "consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Box } from "components/wrappers/Box";
import { theme } from "styles/theme";

interface INavListItem {
  menuItem: string;
}

const NavListItem = ({ menuItem }: INavListItem) => (
  <Box as='li' p='s10'>
    <Link to='#'>{menuItem}</Link>
  </Box>
);

export const Navigation: React.FC = () => {
  return (
    <NavigationStyled
      mx='s80'
      fontSize='fs16'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Image src='logoImg' alt='logo' maxWidth='4rem' margin='0.5rem' />
      <Box as='ul' display='flex'>
        {MENU_LIST.map((menuItem: string, index: number) => (
          <NavListItem key={index + menuItem} menuItem={menuItem} />
        ))}
      </Box>
      <span>
        <Link to='https://www.facebook.com/' target='_blank'>
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to='https://www.twitter.com/' target='_blank'>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to='https://www.instagram.com/' target='_blank'>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </span>
    </NavigationStyled>
  );
};

const NavigationStyled = styled(Box)`
  span {
    a {
      margin: 0 0.5rem;
      color: ${theme.colors.primary};
    }
  }
`;
