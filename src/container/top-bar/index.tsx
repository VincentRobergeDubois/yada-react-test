import * as React from "react";

import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadMenuItemList } from "action/menu-item-action";
import { resetUserConn } from "action/user-conn-action";
import { IMenuItem } from "model/menu-item";
import { IUserConn } from "model/user-conn";

import MenuBar from "./component/menu-bar";
import UserBar from "./component/user-bar";

interface ITopBarOwnProps {
  isGuestPage?: boolean;
}

interface ITopBarStateProps {
  menuItemList: IMenuItem[];
  userConn: IUserConn;
}

interface ITopBarDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  resetUserConn: typeof resetUserConn;
}

type TTopBarProps = ITopBarOwnProps & ITopBarStateProps & ITopBarDispatchProps;

class TopBar extends React.PureComponent<TTopBarProps, {}> {
  constructor(props: TTopBarProps) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  public componentWillMount(): void {
    if (this.props.userConn.id === 0) {
      this.setMenuItemList(6);
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <UserBar
          user={this.props.userConn}
          logout={this.logout}
        />
        {this.props.isGuestPage && this.renderMenuBar()}
      </div>
    );
  }

  private renderMenuBar = (): JSX.Element => {
    return (
      <MenuBar
        menuItemList={this.props.menuItemList}
      />
    );
  }

  private logout = (): void => {
    this.props.resetUserConn();
    this.setMenuItemList(6);
  }

  private setMenuItemList = (userRight: number): void => {
    axios.get(`http://localhost:3000/menuItems/1/${userRight}`).then((response) => {
      this.props.loadMenuItemList(response.data);
    });
  }
}

const mapStateToProps = (state: any, props: ITopBarOwnProps): ITopBarStateProps => {
  return {
    menuItemList: props.isGuestPage && state.menuItem.menuItemList,
    userConn: state.userConn.userConn,
  };
};

const mapDispatchToProps = (dispatch: any): ITopBarDispatchProps => {
  return {
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
    resetUserConn: bindActionCreators(resetUserConn, dispatch),
  };
};

export default
connect<ITopBarStateProps, ITopBarDispatchProps, ITopBarOwnProps>(mapStateToProps, mapDispatchToProps)(TopBar);
