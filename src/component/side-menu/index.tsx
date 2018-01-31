import * as React from "react";

import { Icon } from "react-fa";
import { Menu, MenuItem } from "react-foundation";

import { IMenuItem } from "model/menu-item";

interface ISideMenuOwnProps {
  menuItemList: IMenuItem[];
  handleSelectItem: (item: IMenuItem) => () => void;
}

type TSideMenuProps = ISideMenuOwnProps;

class SideMenu extends React.PureComponent<TSideMenuProps, {}> {
  public render(): JSX.Element {
    return (
      <Menu isVertical={true}>
        {this.renderMenuItemList()}
      </Menu>
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
