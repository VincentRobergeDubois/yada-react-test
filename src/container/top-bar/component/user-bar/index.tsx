import * as React from "react";

import { Alignments, Column, Icon, Row } from "react-foundation";
import { Link } from "react-router-dom";

import { IOrganisation } from "model/organisation";
import { IUserConn } from "model/user-conn";

interface IUserBarOwnProps {
  user: IUserConn;
  logout: () => void;
}

type TUserBarProps = IUserBarOwnProps;

class UserBar extends React.PureComponent<TUserBarProps, {}> {
  public render(): JSX.Element {
    return (
      <Row id="user-bar" verticalAlignment={Alignments.MIDDLE} isExpanded={true}>
        <Column>
          <Link to="/">
            <img src="./images/yada-logo.png" alt="Yada" height="40" width="84" />
          </Link>
        </Column>
        {this.props.user.id !== 0 && this.renderOrganisation()}
        {this.props.user.id !== 0 && this.renderUserInfos()}
        {this.props.user.id !== 0 ? this.renderLogoutLink() : this.renderLoginLink()}
      </Row>
    );
  }

  private renderOrganisation = (): JSX.Element => {
    if (this.props.user.organisationList.length > 1) {
      return (
        <Column large={3}>
          <select>
            {this.renderOrganisationListOptions()}
          </select>
        </Column>
      );
    }
    return (
      <Column large={2}>{this.props.user.organisationList[0].abreviation}</Column>
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
      <Column large={2}>
        <Row id="user-name">{this.props.user.firstname} {this.props.user.lastname}</Row>
        <Row>{this.props.user.title}</Row>
      </Column>
    );
  }

  private renderLogoutLink = (): JSX.Element => {
    return (
      <Link to="/" onClick={this.props.logout} className="login-btn"><Icon name="fi-power" /></Link>
    );
  }

  private renderLoginLink = (): JSX.Element => {
    return (
      <Link className="login-btn" to="/login"><Icon name="fi-torso" /></Link>
    );
  }
}

export default UserBar;
