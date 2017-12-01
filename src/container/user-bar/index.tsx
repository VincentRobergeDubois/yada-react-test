import axios from "axios";
import * as React from "react";
import { Button, Column, Row } from "react-foundation";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";

import { IUserConnAction, loadUserConnList } from "action/user-conn-action";
import { IUserConn } from "model/user-conn";

interface IUserBarStateProps {
  userConnList: IUserConn[];
}

interface IUserBarDispatchProps {
  loadUserConnList: (data: IUserConn[]) => IUserConnAction;
}

type TUserBarProps = IUserBarStateProps & IUserBarDispatchProps;

class UserBar extends React.PureComponent<TUserBarProps, {}> {
  public render(): JSX.Element {
    return (
      <Row id="user-bar" isExpanded={true}>
        <Column>
          <Link to="/">
            <img src="./images/yada-logo.png" alt="Yada" height="40" width="84" />
          </Link>
        </Column>
        <Column>
          <Button onClick={this.connectUser}>Connect</Button>
        </Column>
      </Row>
    );
  }

  private connectUser(): void {
    axios.get("http://localhost:3000/user-conn/1").then((response) => {
      this.props.loadUserConnList(response.data);
    });
  }
}

const mapStateToProps = (state: any): IUserBarStateProps => {
  return {
    userConnList: state.userConn.userConnList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IUserBarDispatchProps => {
  return {
    loadUserConnList: bindActionCreators(loadUserConnList, dispatch),
  };
};

export default connect<IUserBarStateProps, IUserBarDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(UserBar);
