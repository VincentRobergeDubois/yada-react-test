import * as React from 'react';
import { Row } from 'react-foundation';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import YadaMenu from 'component/yada-menu';
import { loadMenuItemList, IMenuItemAction } from 'action';
import { IMenuItem } from 'model/menu-item';

interface IMenuBarOwnProps {}

interface IMenuBarStateProps {
  menuItemList: IMenuItem[]
}

interface IMenuBarDispatchProps {
  loadMenuItemList: (data: IMenuItem[]) => IMenuItemAction
}

type TMenuBarProps = IMenuBarOwnProps & IMenuBarStateProps & IMenuBarDispatchProps;

class MenuBar extends React.Component<TMenuBarProps, {}> {
  componentWillMount() {
    axios.get('http://localhost:3000/menuItems/1/1').then((response) => {
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

const mapStateToProps = (state: IMenuBarStateProps) => {
  return { menuItemList: state.menuItemList };
}

const mapDispatchToProps = (dispatch: Dispatch<IMenuBarStateProps>) => {
  return { loadMenuItemList: bindActionCreators(loadMenuItemList, dispatch) };
}

export default connect<IMenuBarStateProps, IMenuBarDispatchProps, IMenuBarOwnProps>(mapStateToProps, mapDispatchToProps)(MenuBar);
