import * as React from "react";

import { connect, Dispatch } from "react-redux";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";

import { loadMenuItemList, parseAdminMenuItemList } from "action/menu-item-action";
import SideMenu from "component/side-menu";
import AdminSection from "container/admin-section";
import OrganisationManager from "container/organisation-manager";
import PostManager from "container/post-manager";
import ServiceManager from "container/service-manager";
import TopBar from "container/top-bar";
import UserManager from "container/user-manager";
import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";
import { getAdminMenuItemList } from "selector/menu-item";

interface IAdminStateProps {
  adminMenuList: IMenuItem[];
}

interface IAdminDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
}

type TAdminProps = IAdminStateProps & IAdminDispatchProps;

class Admin extends React.PureComponent<TAdminProps & RouteComponentProps<TAdminProps>, {}> {
  public componentWillMount(): void {
    this.props.loadMenuItemList(4, 1, 1, parseAdminMenuItemList);
  }

  public render(): JSX.Element {
    return (
      <div id="admin-container">
        <div className="content">
          <TopBar />
          <div className="admin">
            <SideMenu menuItemList={this.props.adminMenuList} />
            <div className="admin-manager">
              <Switch>
                <Route exact={true} path={this.props.match.path} component={AdminSection} />
                <Route path={this.props.match.path + "users"} component={UserManager} />
                <Route path={this.props.match.path + "organisations"} component={OrganisationManager} />
                <Route path={this.props.match.path + "services"} component={ServiceManager} />
                <Route path={this.props.match.path + "posts"} component={PostManager} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IAdminStateProps => {
  return {
    adminMenuList: getAdminMenuItemList(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): IAdminDispatchProps => {
  return {
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
  };
};

export default connect<IAdminStateProps, IAdminDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
