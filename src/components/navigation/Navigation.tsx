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

interface INavListItem {
  menuItem: string;
}

const NavListItem = ({ menuItem }: INavListItem) => (
  <li>
    <Link to='#'>{menuItem}</Link>
  </li>
);

export const Navigation: React.FC = () => {
  return (
    <NavigationStyled mx='s80' fontSize='fs16' display='flex'>
      <Image src='logoImg' alt='logo' maxWidth='4rem' />
      <ul>
        {MENU_LIST.map((menuItem: string, index: number) => (
          <NavListItem key={index + menuItem} menuItem={menuItem} />
        ))}
      </ul>
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

const NavigationStyled = styled(Box)``;
