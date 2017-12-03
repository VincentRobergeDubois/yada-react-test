import * as React from "react";

import { Alignments, Menu } from "react-foundation";

import { IMenuItem } from "model/menu-item";
import YadaMenuItem from "./yada-menu-item";

interface IYadaMenuProps {
  itemList: IMenuItem[];
}

class YadaMenu extends React.PureComponent<IYadaMenuProps, {}> {
  public render(): JSX.Element {
    return (
      <Menu alignment={Alignments.RIGHT} iconsOnTop={true} isDropdown={true}>
        {this.props.itemList.map((menuItem: IMenuItem) => this.renderMenuItem(menuItem))}
      </Menu>
    );
  }

  private renderMenuItem = (menuItem: IMenuItem): JSX.Element => {
    return (
      <YadaMenuItem
        key={menuItem.id}
        name={menuItem.name}
        icon={menuItem.icon}
        link={menuItem.link}
      />
    );
  }
}

export default YadaMenu;
