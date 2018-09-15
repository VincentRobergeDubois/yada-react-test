import * as React from "react";

import { Icon } from "react-fa";
import { Menu, MenuItem } from "react-foundation";
import { Link } from "react-router-dom";

import { IMenuItem } from "model/menu-item";

interface ISideMenuOwnProps {
  menuItemList: IMenuItem[];
}

type TSideMenuProps = ISideMenuOwnProps;

class SideMenu extends React.PureComponent<TSideMenuProps, {}> {
  public render(): JSX.Element {
    return (
      <Menu className="side-menu" isVertical={true}>
        {this.props.menuItemList.map(this.renderMenuItem)}
      </Menu>
    );
  }

  private renderMenuItem = (item: IMenuItem, key: number): JSX.Element => (
    <MenuItem className="item" key={key}>
      <Link to={item.link}>
        <Icon name={item.icon} />
        <span>{item.name}</span>
      </Link>
    </MenuItem>
  )
}

export default SideMenu;
