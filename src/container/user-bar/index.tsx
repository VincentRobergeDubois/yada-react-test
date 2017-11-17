import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";
import axios from 'axios';
import * as Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Row, Column } from 'react-foundation';
import LoginForm from './login-form';
import { loadUserConn, IUserConn } from  '../../action/user-conn-action';

const customStyles = {
	content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
	}
};

interface IUserBarOwnProps {}

interface IUserBarStateProps {
	userConnList: IUserConn | IUserConn[]
}

interface IUserBarDispatchProps {}

type TUserBarProps = IUserBarOwnProps & IUserBarStateProps & IUserBarDispatchProps;

class UserBar extends React.Component<TUserBarProps, {}> {
	constructor(props: IUserBarOwnProps) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.submit = this.submit.bind(this);
	}

	openModal() {
		this.submit();
    // this.setState({ modalIsOpen: true });
	}

  closeModal() {
  	this.setState({ modalIsOpen: false });
  }

  submit() {
		axios.get('http://localhost:3000/user-conn/1').then((response) => {
      this.props.loadUserConn(response.data);
    });
  }

	renderOrganisations() {
		if (this.props.userConnList) {
			console.log(this.props.userConnList.organisationList);s
			if (this.props.userConnList.organisationList.length === 1) {
				return (
					<Column isShrunk>
						<span>{this.props.userConnList.organisationList[0].abreviation}</span>
					</Column>
				);
			} else {
				return (
					<Column isShrunk>
						<select>
							{this.props.userConnList.organisationList.map((org) => {
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
		if (this.props.userConnList) {
			return (
				<Column isShrunk>
					<span id="user-name">{this.props.userConnList.firstname + ' ' + this.props.userConnList.lastname}</span>
					<br />
					<span>{this.props.userConnList.title}</span>
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
				{this.renderOrganisations()}
				{this.renderUser()}
				<Column isShrunk>
					<button id="conn-btn" className="button" onClick={this.openModal}>
						<i className="fi-torso" />
					</button>
					<Modal
						isOpen={this.state.modalIsOpen}
						onRequestClose={this.closeModal}
						contentLabel="Example Modal"
						style={customStyles}
					>
						<LoginForm onSubmit={this.submit} />
					</Modal>
				</Column>
			</Row>
		);
	}
}

function mapStateToProps(state: IUserBarStateProps) {
  return { user: state.userConnList };
}

function mapDispatchToProps(dispatch: Dispatch<>) {
  return {
    signOut: bindActionCreators(signOutAction, dispatch)
  };
}

export default connect<IUserBarStateProps, IUserBarDispatchProps, IUserBarOwnProps>(mapStateToProps, { loadUserConn })(UserBar);
