import * as React from 'react';
import { Menu, Alignments } from 'react-foundation';
import { IMenuItem } from 'model/menu-item';
import YadaMenuItem from './yada-menu-item';

interface IYadaMenuProps {
  itemList: IMenuItem[]
}

class YadaMenu extends React.Component<IYadaMenuProps, {}> {
  render() {
    return (
      <Menu alignment={Alignments.RIGHT} iconsOnTop isDropdown>
        {this.props.itemList.map((menuItem: IMenuItem) => {
          return <YadaMenuItem key={menuItem.id} name={menuItem.name} icon={menuItem.icon} link={menuItem.link} />
        })}
      </Menu>
    );
  }
}

export default YadaMenu;
