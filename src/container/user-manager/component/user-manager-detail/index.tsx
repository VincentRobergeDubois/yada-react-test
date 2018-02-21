import * as React from "react";

import { IManagerDetail } from "component/manager-list/model";
import { IUser } from "model/user";

interface IUserManagerDetailOwnProps extends IManagerDetail<IUser> { }

type TUserManagerDetailProps = IUserManagerDetailOwnProps;

class UserManagerDetail extends React.PureComponent<TUserManagerDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        {this.props.item.username}
      </div>
    );
  }
}

export default UserManagerDetail;
