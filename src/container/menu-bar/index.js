import * as React from 'react';
import { Row } from 'react-foundation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YadaMenu from '../../component/yada-menu';
import { loadMenuItems } from '../../action';

class MenuBar extends React.Component {
  componentWillMount() {
    this.props.loadMenuItems();
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
