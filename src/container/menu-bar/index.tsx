import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";
import { Row } from 'react-foundation';
import axios from 'axios';

import YadaMenu from 'component/yada-menu';
import { loadMenuItemList } from 'action';
import { IMenuItem } from 'model/menu-item';
import { getUserConn } from 'selector/user-conn';

interface IMenuBarOwnProps {}

interface IMenuBarStateProps {
  menuItemList: IMenuItem[];
  userConn: typeof getUserConn;
}

interface IMenuBarDispatchProps {
  loadMenuItemList: typeof loadMenuItemList;
}

type TMenuBarProps = IMenuBarOwnProps & IMenuBarStateProps & IMenuBarDispatchProps;

class MenuBar extends React.PureComponent<TMenuBarProps, {}> {
  componentWillMount() {
		console.log(this.props);
    axios.get(`http://localhost:3000/menuItems/1/6`).then((response) => {
      this.props.loadMenuItemList(response.data);
    });
  }

  render() {
    return (
      <Row id="menu-bar" isExpanded>
        <YadaMenu itemList={this.props.menuItemList} />
      </Row>
    );
  }
}

const mapStateToProps = (state: any): IMenuBarStateProps => {
  return {
    menuItemList: state.menuItem.menuItemList,
    userConn: getUserConn(state)
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IMenuBarDispatchProps => {
  return { loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch) };
}

export default connect<IMenuBarStateProps, IMenuBarDispatchProps, IMenuBarOwnProps>(mapStateToProps, mapDispatchToProps)(MenuBar);
