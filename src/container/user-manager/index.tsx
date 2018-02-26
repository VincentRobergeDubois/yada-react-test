import * as React from "react";

import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { createUser, deleteUser, updateUser } from "action/user-action";
import ManagerList from "component/manager-list";
import { IState } from "model/state";
import { IUser } from "model/user";
import { getUserList } from "selector/user";

import UserManagerDetail from "./component/user-manager-detail";
import UserManagerDisplay from "./component/user-manager-display";
import UserManagerForm from "./component/user-manager-form";

interface IUserManagerStateProps {
  userList: IUser[];
}

interface IUserManagerDispatchProps {
  createUser: typeof createUser;
  deleteUser: typeof deleteUser;
  updateUser: typeof updateUser;
}

type TUserDetailProps = IUserManagerStateProps & IUserManagerDispatchProps;

class UserDetail extends React.PureComponent<TUserDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="user-manager">
        <ManagerList
          create={this.props.createUser}
          delete={this.props.deleteUser}
          detail={UserManagerDetail}
          display={UserManagerDisplay}
          form={UserManagerForm}
          itemList={this.props.userList}
          title="Liste des utilisateurs"
          update={this.props.updateUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IUserManagerStateProps => {
  return {
    userList: getUserList(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): IUserManagerDispatchProps => {
  return {
    createUser: bindActionCreators(createUser, dispatch),
    deleteUser: bindActionCreators(deleteUser, dispatch),
    updateUser: bindActionCreators(updateUser, dispatch),
  };
};

export default connect<IUserManagerStateProps, IUserManagerDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetail);
