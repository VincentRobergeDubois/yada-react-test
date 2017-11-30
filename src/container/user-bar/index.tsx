import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";
import { Link } from 'react-router-dom';
import { Row, Column, Button } from 'react-foundation';
import axios from 'axios';

import { loadUserConnList, IUserConnAction } from 'action/user-conn-action';
import { IUserConn } from 'model/user-conn';

interface IUserBarOwnProps {}

interface IUserBarStateProps {
	userConnList: IUserConn[]
}

interface IUserBarDispatchProps {
	loadUserConnList: (data: IUserConn[]) => IUserConnAction
}

type TUserBarProps = IUserBarOwnProps & IUserBarStateProps & IUserBarDispatchProps;

class UserBar extends React.PureComponent<TUserBarProps, {}> {
	private connectUser(): void {
		axios.get('http://localhost:3000/user-conn/1').then((response) => {
      this.props.loadUserConnList(response.data);
    });
	}

	public render(): JSX.Element {
		return (
			<Row id="user-bar" isExpanded>
				<Column>
					<Link to='/'>
						<img src="./images/yada-logo.png" alt="Yada" height="40" width="84" />
					</Link>
				</Column>
				<Column>
					<Button onClick={this.connectUser.bind(this)}>Connect</Button>
				</Column>
			</Row>
		);
	}
}

const mapStateToProps = (state: any): IUserBarStateProps => {
  return {
		userConnList: state.userConn.userConnList,
	};
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IUserBarDispatchProps => {
	return {
		loadUserConnList: bindActionCreators(loadUserConnList, dispatch),
	}
}

export default connect<IUserBarStateProps, IUserBarDispatchProps, IUserBarOwnProps>(mapStateToProps, mapDispatchToProps)(UserBar);
