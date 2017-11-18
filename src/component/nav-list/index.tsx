import * as React from 'react';
import { Menu } from 'react-foundation';
import NavListItem from './nav-list-item';
import { IMenuItem } from 'model/menu-item';

interface INavListProps {
  itemList: IMenuItem[]
  onClick: () => void
}

class NavList extends React.Component<INavListProps> {
  render() {
    const navItems = this.props.itemList.map((menuItem: IMenuItem) => {
      return(
        <NavListItem
          key={menuItem.id}
          name={menuItem.name}
          icon={menuItem.icon}
          onClick={this.props.onClick}
        />
      );
    });

    return(
      <Menu isVertical>
        {navItems}
      </Menu>
    );
  }
}

export default NavList;
