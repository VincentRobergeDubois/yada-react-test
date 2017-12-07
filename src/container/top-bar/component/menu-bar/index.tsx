import * as React from "react";

import { Alignments, Icon, Menu, MenuItem, Row } from "react-foundation";
import { Link } from "react-router-dom";

import { IMenuItem } from "model/menu-item";

interface IMenuBarOwnProps {
  menuItemList: IMenuItem[];
}

type TMenuBarProps = IMenuBarOwnProps;

class MenuBar extends React.PureComponent<TMenuBarProps, {}> {
  public render(): JSX.Element {
    return (
      <Row id="menu-bar" isExpanded={true}>
        <Menu alignment={Alignments.RIGHT} iconsOnTop={true} isDropdown={true}>
          {this.props.menuItemList.map((menuItem: IMenuItem) => this.renderMenuItem(menuItem))}
        </Menu>
      </Row>
    );
  }

  private renderMenuItem = (menuItem: IMenuItem): JSX.Element => {
    return (
      <MenuItem className="item">
        <Link to={menuItem.link}>
          <Icon name={menuItem.icon} />
          <span>{menuItem.name}</span>
        </Link>
      </MenuItem>
    );
  }
}

export default MenuBar;
