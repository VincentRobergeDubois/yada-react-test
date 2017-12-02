import axios from "axios";
import * as React from "react";
import { Row } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadMenuItemList } from "action/menu-item-action";
import YadaMenu from "component/yada-menu";
import { IMenuItem } from "model/menu-item";
import { getUserConn } from "selector/user-conn";

interface IMenuBarStateProps {
  menuItemList: IMenuItem[];
  userConn: typeof getUserConn;
}

interface IMenuBarDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
}

type TMenuBarProps = IMenuBarStateProps & IMenuBarDispatchProps;

class MenuBar extends React.PureComponent<TMenuBarProps, {}> {
  public componentWillMount(): void {
    axios.get(`http://localhost:3000/menuItems/1/6`).then((response) => {
      this.props.loadMenuItemList(response.data);
    });
  }

  public render(): JSX.Element {
    return (
      <Row id="menu-bar" isExpanded={true}>
        <YadaMenu itemList={this.props.menuItemList} />
      </Row>
    );
  }
}

const mapStateToProps = (state: any): IMenuBarStateProps => {
  return {
    menuItemList: state.menuItem.menuItemList,
    userConn: getUserConn(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IMenuBarDispatchProps => {
  return { loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch) };
};

export default connect<IMenuBarStateProps, IMenuBarDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(MenuBar);
