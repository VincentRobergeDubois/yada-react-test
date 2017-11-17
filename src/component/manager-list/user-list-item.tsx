import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Row, Column } from 'react-foundation';

class UserListItem extends React.Component {
  render() {
    return (
      <Row isExpanded>
        <Column>{this.props.username}</Column>
        <Column>{this.props.firstname} {this.props.lastname}</Column>
        <Column>{this.props.email}</Column>
        <Column>{this.props.phone}</Column>
      </Row>
    );
  }
}

UserListItem.propTypes = {
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default UserListItem;
