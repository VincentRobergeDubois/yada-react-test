import * as React from "react";

import { Column, Icon, Menu, MenuItem } from "react-foundation";

import { IMenuItem } from "model/menu-item";

interface ISideMenuOwnProps {
  menuItemList: IMenuItem[];
  handleSelectItem: (item: IMenuItem) => () => void;
}

type TSideMenuProps = ISideMenuOwnProps;

class SideMenu extends React.PureComponent<TSideMenuProps, {}> {
  public render(): JSX.Element {
    return (
      <Column id="side-menu" large={3} flexChild="auto">
        <Menu isVertical={true}>
          {this.renderMenuItemList()}
        </Menu>
      </Column>
    );
  }

  private renderMenuItemList = (): JSX.Element[] => {
    return this.props.menuItemList.map((item: IMenuItem, key: number) => {
      return (
        <MenuItem className="item" key={key}>
          <a id={`${item.id}`} onClick={this.props.handleSelectItem(item)}>
            <Icon name={item.icon} />
            <span>{item.name}</span>
          </a>
        </MenuItem>
      );
    });
  }
}

export default SideMenu;
