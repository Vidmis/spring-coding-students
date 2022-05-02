import React from "react";
import { Image } from "components";

interface NavigationProps {}

const NavListItem = () => {};

export const Navigation: React.FC<NavigationProps> = () => (
  <>
    <Image src='logoImg' alt='logo' />
    <ul>
      <li>item1</li>
    </ul>
  </>
);
