import * as React from 'react';
import UserListItem from './user-list-item';

class ManagerList extends React.Component {
  renderUsersList() {
    return this.props.items.map((user) => {
      return (
        <UserListItem
          key={user.id}
          username={user.username}
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          phone={user.phone}
        />
      );
    });
  }

  renderList() {
    if (this.props.item === 'user') {
      return this.renderUsersList();
    }

  }

  render() {
    return (
      <div>{this.renderList()}</div>
    );
  }
}

export default ManagerList;
