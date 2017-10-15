import * as React from 'react';
import Modal from 'react-modal';
import LoginForm from './login-form';

const customStyles = {
	content : {
	    top                   : '50%',
	    left                  : '50%',
	    right                 : 'auto',
	    bottom                : 'auto',
	    marginRight           : '-50%',
	    transform             : 'translate(-50%, -50%)'
	}
};

class UserBar extends React.Component {
	constructor() {
	    super();
	    this.state = {
	        modalIsOpen: false
	    };
	    this.openModal = this.openModal.bind(this);
	    this.afterOpenModal = this.afterOpenModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
    	this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
  	this.subtitle.style.color = '#f00';
  }

  closeModal() {
  	this.setState({modalIsOpen: false});
  }

  submit(values) {
    this.props.postLogin({
			email: this.props.loginForm.email,
			password: this.props.loginForm.password
		});
  }

	render() {
		return(
			<div id="user-bar" className="row expanded">
				<div className="columns logo">Yada</div>
				<div className="columns shrink">
					<button id="conn-btn" className="button" onClick={this.openModal}><i className="fi-torso"></i>Se connecter</button>
					<Modal
						isOpen={this.state.modalIsOpen}
						onAfterOpen={this.afterOpenModal}
						onRequestClose={this.closeModal}
						contentLabel="Example Modal"
						style={customStyles}
					>
						<LoginForm onSubmit={this.submit} />
					</Modal>
				</div>
			</div>
		);
	}
}

export default UserBar;
