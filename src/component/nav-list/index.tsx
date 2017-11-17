import * as React from 'react';
import { Menu } from 'react-foundation';
import NavListItem from './nav-list-item';

interface INavItemOwnProps { }

interface INavItemStateProps { }

interface INavItemDispatchProps { }

type TNavItemProps = INavItemOwnProps & INavItemStateProps & INavItemDispatchProps;

class NavItem extends React.Component<TNavItemProps> {
  render() {
    const navItems = this.props.items.map((navItem) => {
      return(
        <NavListItem
          key={navItem.id}
          name={navItem.name}
          icon={navItem.icon}
          onClick={this.props.onClick.bind(this, navItem)}
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

export default NavItem;
