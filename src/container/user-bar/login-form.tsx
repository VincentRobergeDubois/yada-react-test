import * as React from 'react';
import { connect } from 'react-redux';

import { loadUser, IUserAction } from 'action/user-action';
import { IUser } from 'model/user';

interface ILoginFormOwnProps {
  onSubmit: () => void;
}

interface ILoginFormStateProps {
  user: IUser
}

interface ILoginFormDispatchProps {
  loadUser: (data: IUser) => IUserAction
}

type TLoginFormProps = ILoginFormOwnProps & ILoginFormStateProps & ILoginFormDispatchProps;

class LoginForm extends React.PureComponent<TLoginFormProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <label>Nom d'utilisateur</label>
          <div>
            <input name="username" type="text" />
          </div>
        </div>
        <div>
          <label>Mot de passe</label>
          <div>
            <input name="password" type="password" />
          </div>
        </div>
        <button type="submit" className="button expanded">Connexion</button>
      </form>
    );
  }
}

const mapStateToProps = (state: any): ILoginFormStateProps => {
  return { user: state.user };
}

const mapDispatchToProps = (dispatch: any): ILoginFormDispatchProps => {
  return { loadUser: dispatch(loadUser) };
}

export default connect<ILoginFormStateProps, ILoginFormDispatchProps, ILoginFormOwnProps>(mapStateToProps, mapDispatchToProps)(LoginForm);
