import * as React from "react";

import { IManagerDisplay } from "component/manager-list/model";
import { IUser } from "model/user";

interface IUserManagerDisplayOwnProps extends IManagerDisplay<IUser> { }

type TUserManagerDisplayProps = IUserManagerDisplayOwnProps;

class UserManagerDisplay extends React.PureComponent<TUserManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        {this.props.item.username}
      </div>
    );
  }
}

export default UserManagerDisplay;
