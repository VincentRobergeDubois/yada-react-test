import * as React from 'react';
import UserListItem from './user-list-item';
import { IUser } from 'model/user';

interface IManagerListProps {
  itemList: IUser[],
  item: string
}

class ManagerList extends React.Component<IManagerListProps> {
  renderUserList() {
    return this.props.itemList.map((user: IUser) => {
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
      return this.renderUserList();
    }
    return '';
  }

  render() {
    return (
      <div>{this.renderList()}</div>
    );
  }
}

export default ManagerList;
