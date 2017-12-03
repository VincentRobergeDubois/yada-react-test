import * as React from "react";

import { Alignments, Column, Icon, Row } from "react-foundation";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import { resetUserConn } from "action/user-conn-action";
import { IOrganisation } from "model/organisation";
import { IUserConn } from "model/user-conn";
import { getUserConn } from "selector/user-conn";

interface IUserBarStateProps {
  userConn: IUserConn;
}

interface IUserBarDispatchProps {
  resetUserConn: typeof resetUserConn;
}

type TUserBarProps = IUserBarStateProps & IUserBarDispatchProps;

class UserBar extends React.PureComponent<TUserBarProps> {
  constructor(props: TUserBarProps) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  public render(): JSX.Element {
    console.log(this.props);
    return (
      <Row id="user-bar" verticalAlignment={Alignments.MIDDLE} isExpanded={true}>
        <Column>
          <Link to="/">
            <img src="./images/yada-logo.png" alt="Yada" height="40" width="84" />
          </Link>
        </Column>
        {this.props.userConn && this.renderOrganisation()}
        {this.props.userConn ? this.renderLogoutLink() : this.renderLoginLink()}
      </Row>
    );
  }

  private renderOrganisation = (): JSX.Element => {
    if (this.props.userConn.organisationList.length > 1) {
      return (
        <Column large={3}>
          <select>
            {this.renderOrganisationListOptions()}
          </select>
        </Column>
      );
    }
    return (
      <Column large={3}>{this.props.userConn.organisationList[0].abreviation}</Column>
    );
  }

  private renderOrganisationListOptions = (): JSX.Element[] => {
    return this.props.userConn.organisationList.map((organisation: IOrganisation) => {
      return (
        <option key={organisation.id} value={organisation.id}>{organisation.abreviation}</option>
      );
    });
  }

  private renderLogoutLink = (): JSX.Element => {
    return (
      <Link onClick={this.logout} className="login-btn" to="/"><Icon name="fi-power" /></Link>
    );
  }

  private renderLoginLink = (): JSX.Element => {
    return (
      <Link className="login-btn" to="/login"><Icon name="fi-torso" /></Link>
    );
  }

  private logout = (): void => {
    this.props.resetUserConn();
  }
}

const mapStateToProps = (state: any): IUserBarStateProps => {
  return {
    userConn: getUserConn(state),
  };
};

const mapDispatchToProps = (dispatch: any): IUserBarDispatchProps => {
  return {
    resetUserConn: bindActionCreators(resetUserConn, dispatch),
  };
};

export default connect<IUserBarStateProps, IUserBarDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(UserBar);
