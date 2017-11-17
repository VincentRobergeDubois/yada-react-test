import * as React from 'react';
import { Row } from 'react-foundation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import YadaMenu from '../../component/yada-menu';
import { loadMenuItems } from '../../action';

class MenuBar extends React.Component {
  componentWillMount() {
    axios.get('http://localhost:3000/menuItems/1/1').then((response) => {
      this.props.loadMenuItems(response.data);
    });
  }

  render() {
    return (
      <Row id="menu-bar" isExpanded>
        <YadaMenu items={this.props.menuItems} />
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return { menuItems: state.menuItems };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadMenuItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
