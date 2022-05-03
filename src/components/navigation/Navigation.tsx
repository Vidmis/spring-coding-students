import React from "react";
import { Link } from "gatsby";
import { Image } from "components";
import { MENU_LIST } from "consts";
import { NavigationStyled } from "./NavigationStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
    <NavigationStyled mx='s80' fontSize='fs16'>
      <Image src='logoImg' alt='logo' />
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
