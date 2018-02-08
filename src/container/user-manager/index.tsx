import * as React from "react";

import { connect } from "react-redux";

import { IState } from "model/state";
import { IUser } from "model/user";
import { getUserList } from "selector/user";

interface IUserManagerStateProps {
  userList: IUser[];
}

type TUserDetailProps = IUserManagerStateProps;

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

const mapStateToProps = (state: IState): IUserManagerStateProps => {
  return {
    userList: getUserList(state),
  };
};

export default connect<IUserManagerStateProps, {}, {}>(
  mapStateToProps,
  {},
)(UserDetail);
