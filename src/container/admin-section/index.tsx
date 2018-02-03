import * as React from "react";

import { Cell, Grid } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadAdminMenuItemList, parseMenuItem } from "action/menu-item-action";
import SideMenu from "component/side-menu";
import {
  IIsFormStruct,
  IOrganisationFormValues,
  ISelectedItemStruct,
  ISelectedListStruct,
} from "container/admin-section/model";
import { getIsFormStruct, getSelectedItemStruct, getSelectedListStruct } from "container/admin-section/selector";
import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";
import { getAdminMenuItemList, getCurrentMenuItem } from "selector/menu-item";

import OrganisationDetail from "./component/organisation-detail";
import OrganisationForm from "./component/organisation-form";
import PostDetail from "./component/post-detail";
import PostForm from "./component/post-form";
import ServiceDetail from "./component/service-detail";
import ServiceForm from "./component/service-form";
import UserDetail from "./component/user-detail";
import UserForm from "./component/user-form";
import { ORGANISATION_ID, POST_ID, SERVICE_ID } from "./constant";

export interface IAdminSectionStateProps {
  adminMenuItemList: IMenuItem[];
  isFormStruct: IIsFormStruct;
  selectedItem: IMenuItem;
  selectedItemStruct: ISelectedItemStruct;
  selectedListStruct: ISelectedListStruct;
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
        if (this.props.isFormStruct.organisation) {
          return (
            <OrganisationForm
              organisation={this.props.selectedItemStruct.organisation}
              handleFormSubmit={this.handleOrganisationSubmit}
            />
          );
        }
        return <OrganisationDetail organisationList={this.props.selectedListStruct.organisation} />;
      case SERVICE_ID:
        if (this.props.isFormStruct.service) {
          return <ServiceForm service={this.props.selectedItemStruct.service} />;
        }
        return <ServiceDetail serviceList={this.props.selectedListStruct.service} />;
      case POST_ID:
        if (this.props.isFormStruct.post) {
          return <PostForm post={this.props.selectedItemStruct.post} />;
        }
        return <PostDetail postList={this.props.selectedListStruct.post} />;
      default:
        if (this.props.isFormStruct.user) {
          return <UserForm user={this.props.selectedItemStruct.user} />;
        }
        return <UserDetail userList={this.props.selectedListStruct.user} />;
    }
  }

  private handleSelectItem = (item: IMenuItem) => (): void => {
    this.props.parseSelectedItem(item);
  }

  private handleOrganisationSubmit = () => (formData: IOrganisationFormValues) => {
    this.props.createOrganisation();
  }
}

const mapStateToProps = (state: IState): IAdminSectionStateProps => {
  return {
    adminMenuItemList: getAdminMenuItemList(state),
    isFormStruct: getIsFormStruct(state),
    selectedItem: getCurrentMenuItem(state),
    selectedItemStruct: getSelectedItemStruct(state),
    selectedListStruct: getSelectedListStruct(state),
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
