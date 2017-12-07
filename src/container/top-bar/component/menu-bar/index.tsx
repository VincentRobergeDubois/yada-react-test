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
          {this.renderMenuItemList()}
        </Menu>
      </Row>
    );
  }

  private renderMenuItemList = (): JSX.Element[] => {
    return this.props.menuItemList.map((item: IMenuItem, key: number) => {
      return (
        <MenuItem className="item" key={key}>
          <Link to={item.link}>
            <Icon name={item.icon} />
            <span>{item.name}</span>
          </Link>
        </MenuItem>
      );
    });
  }
}

export default MenuBar;
