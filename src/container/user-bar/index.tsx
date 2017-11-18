import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Column } from 'react-foundation';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import axios from 'axios';
import * as Modal from 'react-modal';
import LoginForm from './login-form';
import { loadUserConn, loadUserConnList, IUserConnAction } from 'action';
import { IUserConn } from 'model/user-conn';
import { IOrganisation } from 'model/organisation';

interface IUserBarOwnProps {}

interface IUserBarStateProps {
	userConn: IUserConn
}

interface IUserBarDispatchProps {
	loadUserConn: (data: IUserConn) => IUserConnAction
}

type TUserBarProps = IUserBarOwnProps & IUserBarStateProps & IUserBarDispatchProps;

class UserBar extends React.Component<TUserBarProps> {

	constructor(props: TUserBarProps) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	openModal() {
		this.handleSubmit();
    // this.setState({ modalIsOpen: true });
	}

  closeModal() {
  	this.setState({ modalIsOpen: false });
  }

  handleSubmit() {
		axios.get('http://localhost:3000/user-conn/1').then((response) => {
      this.props.loadUserConn(response.data);
    });
  }

	renderOrganisations() {
		if (this.props.userConn) {
			if (this.props.userConn.organisationList.length === 1) {
				return (
					<Column isShrunk>
						<span>{this.props.userConn.organisationList[0].abreviation}</span>
					</Column>
				);
			} else {
				return (
					<Column isShrunk>
						<select>
							{this.props.userConn.organisationList.map((org: IOrganisation) => {
								return <option>{org.abreviation}</option>
							})}
						</select>
					</Column>
				);
			}
		}
		return '';
	}

	renderUser() {
		if (this.props.userConn) {
			return (
				<Column isShrunk>
					<span id="user-name">{this.props.userConn.firstname + ' ' + this.props.userConn.lastname}</span>
					<br />
					<span>{this.props.userConn.title}</span>
				</Column>
			);
		}
		return '';
	}

	render() {
		return (
			<Row id="user-bar" isExpanded>
				<Column className="logo">
					<Link to='/'>
						<img src="./images/yada-logo.png" alt="Yada" height="40" width="84" />
					</Link>
				</Column>
			</Row>
		);
	}
}


function mapStateToProps(state: IUserBarStateProps) {
  return {
		userConn: state.userConn,
	};
}

function mapDispatchToProps(dispatch: Dispatch<IUserBarStateProps>) {
	return {
		loadUserConn: bindActionCreators(loadUserConn, dispatch),
	}
}

export default connect<IUserBarStateProps, IUserBarDispatchProps, IUserBarOwnProps>(mapStateToProps, mapDispatchToProps)(UserBar);
