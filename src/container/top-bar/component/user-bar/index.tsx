import * as React from "react";

import { Icon } from "react-fa";
import { Link } from "react-router-dom";

import { IOrganisation } from "model/organisation";
import { IUserConn } from "model/user";

interface IUserBarOwnProps {
  user: IUserConn;
  logout: () => void;
}

type TUserBarProps = IUserBarOwnProps;

class UserBar extends React.PureComponent<TUserBarProps, {}> {
  public render(): JSX.Element {
    const { id, organisationList } = this.props.user;
    return (
      <div className="user-bar">
        <Link to="/" className="logo-link">
          <img src="./images/yada-logo.png" alt="Yada" height="40" width="84" />
        </Link>
        {id !== 0 && organisationList.length ? this.renderOptionList() : this.renderOption()}
        {id !== 0 && this.renderUserInfos()}
        {id !== 0 ? this.renderLogoutLink() : this.renderLoginLink()}
      </div>
    );
  }

  private renderOptionList = (): JSX.Element => (
    <div>
      <select>
        {this.props.user.organisationList.map(this.renderOrganisationOptionList)}
      </select>
    </div>
  )

  private renderOption = (): JSX.Element => (
    <div>
      {this.props.user.organisationList[0].abreviation}
    </div>
  )

  private renderOrganisationOptionList = (organisation: IOrganisation): JSX.Element => (
    <option key={organisation.id} value={organisation.id}>
      {organisation.abreviation}
    </option>
  )

  private renderUserInfos = (): JSX.Element => (
    <div>
      <div id="user-name">{this.props.user.firstname} {this.props.user.lastname}</div>
      <div>{this.props.user.title}</div>
    </div>
  )

  private renderLogoutLink = (): JSX.Element => (
    <Link to="/" className="conn-btn" onClick={this.props.logout} >
      <Icon name="sign-out" />
    </Link>
  )

  private renderLoginLink = (): JSX.Element => (
    <Link to="/login" className="conn-btn">
      <Icon name="sign-in" />
    </Link>
  )
}

export default UserBar;
