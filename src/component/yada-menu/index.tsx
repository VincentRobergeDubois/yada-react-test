import * as React from 'react';
import { Menu, Alignments } from 'react-foundation';
import YadaMenuItem, { IYadaMenuItemOwnProps } from './yada-menu-item';

interface IYadaMenuOwnProps {
  menuItemList: IYadaMenuItemOwnProps[]
}

class YadaMenu extends React.Component {
  render() {
    return (
      <Menu alignment={Alignments.RIGHT} iconsOnTop isDropdown>
        {this.props.menuItemList.map((menuItem: IYadaMenuItemOwnProps) => {
          return <YadaMenuItem key={menuItem.id} name={menuItem.name} icon={menuItem.icon} link={menuItem.link} />
        })}
      </Menu>
    );
  }
}

export default YadaMenu;
