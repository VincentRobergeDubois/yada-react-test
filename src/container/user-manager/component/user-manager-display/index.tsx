import * as React from "react";

import { IManagerDisplay } from "model/manager";
import { IUser } from "model/user";
import { formatPhone } from "service/format/phone";

interface IUserManagerDisplayOwnProps extends IManagerDisplay<IUser> { }

type TUserManagerDisplayProps = IUserManagerDisplayOwnProps;

class UserManagerDisplay extends React.PureComponent<TUserManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={"manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div className="default-display">
          <div>{this.props.item.username}</div>
          <div>{this.props.item.lastname}, {this.props.item.firstname}</div>
        </div>
        {this.props.isSelected && this.renderDetail()}
      </div>
    );
  }

  private renderDetail = (): JSX.Element => {
    return (
      <div className="detail-display">
        <div>{this.props.item.email}</div>
        <div>{formatPhone(this.props.item.phone)}</div>
      </div>
    );
  }
}

export default UserManagerDisplay;
