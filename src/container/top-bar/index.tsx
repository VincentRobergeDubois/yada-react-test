import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadMenuItemList, parseMainMenuItemList } from "action/menu-item-action";
import { logout } from "action/user-action";
import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";
import { IUserConn } from "model/user";
import { getMainMenuItemList } from "selector/menu-item";
import { getCurrentUser } from "selector/user";

import MenuBar from "./component/menu-bar";
import UserBar from "./component/user-bar";

interface ITopBarOwnProps {
  isGuestPage?: boolean;
}

interface ITopBarStateProps {
  mainMenuItemList: IMenuItem[];
  user: IUserConn;
}

interface ITopBarDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  logout: typeof logout;
}

type TTopBarProps = ITopBarOwnProps & ITopBarStateProps & ITopBarDispatchProps;

class TopBar extends React.PureComponent<TTopBarProps, {}> {
  public componentWillMount(): void {
    if ( this.props.mainMenuItemList.length === 0 ) {
      const userRight = this.props.user.id === 0 ? 6 : 1;
      this.props.loadMenuItemList(1, userRight, parseMainMenuItemList);
    }
  }

  public render(): JSX.Element {
    return (
      <div id="top-bar">
        <UserBar
          user={this.props.user}
          logout={this.props.logout}
        />
        {this.props.isGuestPage && this.renderMenuBar()}
      </div>
    );
  }

  private renderMenuBar = (): JSX.Element => {
    return (
      <MenuBar
        menuItemList={this.props.mainMenuItemList}
      />
    );
  }
}

const mapStateToProps = (state: IState): ITopBarStateProps => ({
  mainMenuItemList: getMainMenuItemList(state),
  user: getCurrentUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IState>): ITopBarDispatchProps => ({
  loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
  logout: bindActionCreators(logout, dispatch),
});

export default connect<ITopBarStateProps, ITopBarDispatchProps, ITopBarOwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);
