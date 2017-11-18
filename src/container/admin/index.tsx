import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { Row, Column } from 'react-foundation';
import axios from 'axios';
import Manager from 'component/manager';
import NavList from 'component/nav-list';
import ManagerList from 'component/manager-list';
import UserBar from 'container/user-bar';
import { loadMenuItemList, IMenuItemAction } from 'action';
import { IMenuItem } from 'model/menu-item';

interface IAdminOwnProps {}

interface IAdminStateProps {
  menuItemList: IMenuItem[]
}

interface IAdminDispatchProps {
  loadMenuItemList: (data: IMenuItem[]) => IMenuItemAction
}

type TAdminProps = IAdminOwnProps & IAdminStateProps & IAdminDispatchProps;

class Admin extends React.Component<TAdminProps, {}> {
  componentWillMount() {
    axios.get('http://localhost:3000/menuItems/4/1').then((response) => {
      this.props.loadMenuItemList(response.data);
    });
  }

  render() {
    return (
      <Manager>
        <Row isExpanded>
          <Column large={2}>
            <NavList itemList={this.props.menuItemList} />
          </Column>
          <Column>
            {this.props.menuItemList ? <ManagerList itemList={} /> : '' }
          </Column>
        </Row>
      </Manager>
    );
  }
}

const mapStateToProps = (state: IAdminStateProps) => {
  return { menuItemList: state.menuItemList };
}

const mapDispatchToProps = (dispatch: Dispatch<IAdminStateProps>) => {
  return { loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch) };
}

export default connect<IAdminStateProps, IAdminDispatchProps, IAdminOwnProps>(mapStateToProps, mapDispatchToProps)(Admin);
