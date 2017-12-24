import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadMenuItemList } from "action/menu-item-action";
import { logout } from "action/user-action";
import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";
import { IUserConn } from "model/user";

import MenuBar from "./component/menu-bar";
import UserBar from "./component/user-bar";

interface ITopBarOwnProps {
  isGuestPage?: boolean;
}

interface ITopBarStateProps {
  menuItemList: IMenuItem[];
  user: IUserConn;
}

interface ITopBarDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  logout: typeof logout;
}

type TTopBarProps = ITopBarOwnProps & ITopBarStateProps & ITopBarDispatchProps;

class TopBar extends React.PureComponent<TTopBarProps, {}> {
  public componentWillMount(): void {
    this.props.loadMenuItemList(1, this.props.user.id === 0 ? 6 : 1);
  }

  public render(): JSX.Element {
    return (
      <div>
        <UserBar
          user={this.props.user}
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
    this.props.logout();
    this.props.loadMenuItemList(1, 6);
  }
}

const mapStateToProps = (state: IState, props: ITopBarOwnProps): ITopBarStateProps => {
  return {
    menuItemList: state.menuItem.list,
    user: state.user.current,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): ITopBarDispatchProps => {
  return {
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
    logout: bindActionCreators(logout, dispatch),
  };
};

export default
connect<ITopBarStateProps, ITopBarDispatchProps, ITopBarOwnProps>(mapStateToProps, mapDispatchToProps)(TopBar);
