import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { createUser, deleteUser, updateUser } from "action/user-action";
import ManagerList from "lib/manager-list";
import { IState } from "model/state";
import { IUser } from "model/user";
import { getUserList } from "selector/user";

import UserManagerDisplay from "./component/user-manager-display";
import UserManagerForm from "./component/user-manager-form";
import { USER_FORM_NAME } from "./constant";

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
          display={UserManagerDisplay}
          form={UserManagerForm}
          formName={USER_FORM_NAME}
          identifier="id"
          itemList={this.props.userList}
          title="Liste des utilisateurs"
          update={this.props.updateUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IUserManagerStateProps => ({
  userList: getUserList(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IState>): IUserManagerDispatchProps => ({
  createUser: bindActionCreators(createUser, dispatch),
  deleteUser: bindActionCreators(deleteUser, dispatch),
  updateUser: bindActionCreators(updateUser, dispatch),
});

export default connect<IUserManagerStateProps, IUserManagerDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetail);
