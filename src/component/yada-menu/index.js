import * as React from 'react';
import { Menu, Alignments } from 'react-foundation';
import YadaMenuItem from './yada-menu-item';

const YadaMenu = (props) => {
  return (
    <Menu alignment={Alignments.RIGHT} iconsOnTop isDropdown>
      {props.items.menuItems.map((menuItem) => {
        return <YadaMenuItem key={menuItem.id} name={menuItem.name} icon={menuItem.icon} link={menuItem.link} />
      })}
    </Menu>
  );
}

export default YadaMenu;
