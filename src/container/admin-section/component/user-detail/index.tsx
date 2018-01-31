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
        User Detail
      </div>
    );
  }
}

export default UserDetail;
