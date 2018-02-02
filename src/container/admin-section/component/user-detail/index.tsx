import * as React from "react";

import { IUser } from "model/user";

interface IUserDetailOwnProps {
  userList: IUser[];
}

type TUserDetailProps = IUserDetailOwnProps;

class UserDetail extends React.PureComponent<TUserDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        {this.renderHeader()}
        {this.renderList()}
      </div>
    );
  }

  private renderHeader = (): JSX.Element => (
    <div>
      <h1>Liste des utilisateurs</h1>
      <button>Ajouter</button>
      <button>Modifier</button>
      <button>Supprimer</button>
    </div>
  )

  private renderList = (): JSX.Element[] => {
    return this.props.userList.map((user: IUser, key: number) => (
      <div key={key}>
        <div>{user.id}</div>
        <div>{user.username}</div>
        <div>{user.firstname}</div>
        <div>{user.lastname}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
      </div>
    ));
  }
}

export default UserDetail;
