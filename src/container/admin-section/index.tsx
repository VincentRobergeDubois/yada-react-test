import * as React from "react";

import { Row } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadAdminMenuItemList, parseMenuItem } from "action/menu-item-action";
import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";

import SideMenu from "component/side-menu";

interface IAdminSectionStateProps {
  adminMenuItemList: IMenuItem[];
}

interface IAdminSectionDispatchProps {
  loadAdminMenuItemList: typeof loadAdminMenuItemList;
  parseSelectedItem: typeof parseMenuItem;
}

type TAdminSectionProps = IAdminSectionStateProps & IAdminSectionDispatchProps;

class AdminSection extends React.PureComponent<TAdminSectionProps, {}> {
  public render(): JSX.Element {
    return (
      <Row id="admin-section">
        <SideMenu
          menuItemList={this.props.adminMenuItemList}
          handleSelectItem={this.handleSelectItem}
        />
        <div>Admin</div>
      </Row>
    );
  }

  private handleSelectItem = (item: IMenuItem) => (): void => {
    this.props.parseSelectedItem(item);
  }
}

const mapStateToProps = (state: IState): IAdminSectionStateProps => {
  return {
    adminMenuItemList: state.menuItem.adminMenuList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): IAdminSectionDispatchProps => {
  return {
    loadAdminMenuItemList: bindActionCreators(loadAdminMenuItemList, dispatch),
    parseSelectedItem: bindActionCreators(parseMenuItem, dispatch),
  };
};

export default
connect<IAdminSectionStateProps, IAdminSectionDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(AdminSection);
