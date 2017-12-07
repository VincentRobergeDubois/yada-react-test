import * as React from "react";

import { Row } from "react-foundation";

import { IMenuItem } from "model/menu-item";

import YadaMenu from "component/yada-menu";

interface IMenuBarOwnProps {
  menuItemList: IMenuItem[];
}

type TMenuBarProps = IMenuBarOwnProps;

class MenuBar extends React.PureComponent<TMenuBarProps, {}> {
  public render(): JSX.Element {
    return (
      <Row id="menu-bar" isExpanded={true}>
        <YadaMenu itemList={this.props.menuItemList} />
      </Row>
    );
  }
}

export default MenuBar;
