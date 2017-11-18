import * as React from 'react';
import { Row, Column } from 'react-foundation';

interface IUserListItemProps {
  username: string,
  firstname: string,
  lastname: string,
  email: string,
  phone: string
}

class UserListItem extends React.Component<IUserListItemProps> {
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

export { IUserListItemProps };
export default UserListItem;
