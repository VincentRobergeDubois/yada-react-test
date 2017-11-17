import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Column } from 'react-foundation';
import axios from 'axios';
import Manager from '../../component/manager';
import NavList from '../../component/nav-list';
import ManagerList from '../../component/manager-list';
import { loadUsers, loadServices, loadPosts } from '../../action';

interface IAdminOwnProps { }

interface IAdminStateProps { }

interface IAdminDispatchProps { }

type TAdminProps = IAdminOwnProps & IAdminStateProps & IAdminDispatchProps;

class Admin extends React.Component<TAdminProps> {
  componentWillMount() {
    axios.get('http://localhost:3000/menuItems/4/1').then((response) => {
      this.props.loadMenuItems(response.data);
    });
  }

  render() {
    return (
      <Manager>
        <Row isExpanded>
          <Column large={2}>
            <NavList items={this.state.navItems} />
          </Column>
          <Column>
            {this.props.items ? <ManagerList items={this.props.items} /> : '' }
          </Column>
        </Row>
      </Manager>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.users.users };
}

export default connect(mapStateToProps, {
  loadUsers, loadServices, loadPosts
})(Admin);
