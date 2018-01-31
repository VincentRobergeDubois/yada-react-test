import * as React from "react";

import { Cell, Grid } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadAdminMenuItemList, parseMenuItem } from "action/menu-item-action";
import { IMenuItem } from "model/menu-item";
import { IOrganisation } from "model/organisation";
import { IPost } from "model/post";
import { IService } from "model/service";
import { IState } from "model/state";
import { IUser } from "model/user";
import { getAdminMenuItemList, getCurrentMenuItem } from "selector/menu-item";
import { getOrganisationList } from "selector/organisation";
import { getPostList } from "selector/post";
import { getServiceList } from "selector/service";
import { getUserList } from "selector/user";

import SideMenu from "component/side-menu";
import OrganisationDetail from "./component/organisation-detail";
import PostDetail from "./component/post-detail";
import ServiceDetail from "./component/service-detail";
import UserDetail from "./component/user-detail";
import { ORGANISATION_ID, POST_ID, SERVICE_ID } from "./constant";

export interface IAdminSectionStateProps {
  adminMenuItemList: IMenuItem[];
  organisationList: IOrganisation[];
  postList: IPost[];
  selectedItem: IMenuItem;
  serviceList: IService[];
  userList: IUser[];
}

export interface IAdminSectionDispatchProps {
  loadAdminMenuItemList: typeof loadAdminMenuItemList;
  parseSelectedItem: typeof parseMenuItem;
}

type TAdminSectionProps = IAdminSectionStateProps & IAdminSectionDispatchProps;

export class AdminSection extends React.PureComponent<TAdminSectionProps, {}> {
  public render(): JSX.Element {
    return (
      <Grid id="admin-section">
        <Cell id="side-menu" small={2}>
          <SideMenu
            menuItemList={this.props.adminMenuItemList}
            handleSelectItem={this.handleSelectItem}
          />
        </Cell>
        <Cell small={10}>
          {this.renderAdminDetail()}
        </Cell>
      </Grid>
    );
  }

  private renderAdminDetail = (): JSX.Element => {
    switch (this.props.selectedItem.id) {
      case ORGANISATION_ID:
        return <OrganisationDetail organisationList={this.props.organisationList} />;
      case SERVICE_ID:
        return <ServiceDetail serviceList={this.props.serviceList} />;
      case POST_ID:
        return <PostDetail postList={this.props.postList} />;
      default:
        return <UserDetail userList={this.props.userList} />;
    }
  }

  private handleSelectItem = (item: IMenuItem) => (): void => {
    this.props.parseSelectedItem(item);
  }
}

const mapStateToProps = (state: IState): IAdminSectionStateProps => {
  return {
    adminMenuItemList: getAdminMenuItemList(state),
    organisationList: getOrganisationList(state),
    postList: getPostList(state),
    selectedItem: getCurrentMenuItem(state),
    serviceList: getServiceList(state),
    userList: getUserList(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): IAdminSectionDispatchProps => {
  return {
    loadAdminMenuItemList: bindActionCreators(loadAdminMenuItemList, dispatch),
    parseSelectedItem: bindActionCreators(parseMenuItem, dispatch),
  };
};

export default connect<IAdminSectionStateProps, IAdminSectionDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(AdminSection);
