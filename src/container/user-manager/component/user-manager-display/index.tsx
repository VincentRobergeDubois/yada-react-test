import * as React from "react";

import { IManagerDisplay } from "model/manager";
import { IUser } from "model/user";

interface IUserManagerDisplayOwnProps extends IManagerDisplay<IUser> { }

type TUserManagerDisplayProps = IUserManagerDisplayOwnProps;

class UserManagerDisplay extends React.PureComponent<TUserManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={"user-manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div>{this.props.item.username}</div>
        <div>{this.props.item.lastname}, {this.props.item.firstname}</div>
      </div>
    );
  }
}

export default UserManagerDisplay;
