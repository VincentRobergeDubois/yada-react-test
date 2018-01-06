import * as React from "react";

import { Row } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadMenuItemList, parseMenuItem } from "action/menu-item-action";
import { IMenuItem } from "model/menu-item";
import { IState } from "model/state";

import SideMenu from "component/side-menu";

interface IAdminSectionStateProps {
  menuItemList: IMenuItem[];
}

interface IAdminSectionDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
  parseSelectedItem: typeof parseMenuItem;
}

type TAdminSectionProps = IAdminSectionStateProps & IAdminSectionDispatchProps;

class AdminSection extends React.PureComponent<TAdminSectionProps, {}> {
  public componentWillMount(): void {
    this.props.loadMenuItemList(4, 1, 1);
  }

  public render(): JSX.Element {
    return (
      <Row id="admin-section">
        <SideMenu
          menuItemList={this.props.menuItemList}
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
    menuItemList: state.menuItem.list,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): IAdminSectionDispatchProps => {
  return {
    loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch),
    parseSelectedItem: bindActionCreators(parseMenuItem, dispatch),
  };
};

export default
connect<IAdminSectionStateProps, IAdminSectionDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(AdminSection);
