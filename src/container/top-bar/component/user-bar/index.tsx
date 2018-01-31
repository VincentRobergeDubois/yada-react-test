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
    return (
      <div className="user-bar">
        <Link to="/" className="logo-link">
          <img src="./images/yada-logo.png" alt="Yada" height="40" width="84" />
        </Link>
        {this.props.user.id !== 0 && this.renderOrganisation()}
        {this.props.user.id !== 0 && this.renderUserInfos()}
        {this.props.user.id !== 0 ? this.renderLogoutLink() : this.renderLoginLink()}
      </div>
    );
  }

  private renderOrganisation = (): JSX.Element => {
    if (this.props.user.organisationList.length > 1) {
      return (
        <div>
          <select>
            {this.renderOrganisationListOptions()}
          </select>
        </div>
      );
    }
    return (
      <div>
        {this.props.user.organisationList[0].abreviation}
      </div>
    );
  }

  private renderOrganisationListOptions = (): JSX.Element[] => {
    return this.props.user.organisationList.map((organisation: IOrganisation) => {
      return (
        <option key={organisation.id} value={organisation.id}>{organisation.abreviation}</option>
      );
    });
  }

  private renderUserInfos = (): JSX.Element => {
    return (
      <div>
        <div id="user-name">{this.props.user.firstname} {this.props.user.lastname}</div>
        <div>{this.props.user.title}</div>
      </div>
    );
  }

  private renderLogoutLink = (): JSX.Element => {
    return (
      <Link to="/" className="conn-btn" onClick={this.props.logout} >
        <Icon name="sign-out" />
      </Link>
    );
  }

  private renderLoginLink = (): JSX.Element => {
    return (
      <Link to="/login" className="conn-btn">
        <Icon name="sign-in" />
      </Link>
    );
  }
}

export default UserBar;
