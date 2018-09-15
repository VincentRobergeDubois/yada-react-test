import * as React from "react";

import { Icon } from "react-fa";
import { Alignments, Menu, MenuItem } from "react-foundation";
import { Link } from "react-router-dom";

import { IMenuItem } from "model/menu-item";

interface IMenuBarOwnProps {
  menuItemList: IMenuItem[];
}

type TMenuBarProps = IMenuBarOwnProps;

class MenuBar extends React.PureComponent<TMenuBarProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="main-menu">
        <Menu alignment={Alignments.RIGHT} iconsOnTop={true} isDropdown={true}>
          {this.props.menuItemList.map(this.renderMenuItemList)}
        </Menu>
      </div>
    );
  }

  private renderMenuItemList = (item: IMenuItem, key: number): JSX.Element => (
    <MenuItem className="item" key={key}>
      <Link to={item.link}>
        <Icon name={item.icon} />
        <span>{item.name}</span>
      </Link>
    </MenuItem>
  )
}

export default MenuBar;
