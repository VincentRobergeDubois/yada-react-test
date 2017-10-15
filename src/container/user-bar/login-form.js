import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={ handleSubmit }>
      <div className="row expanded">
        <label htmlFor="username">Nom d'utilisateur</label>
        <Field name="username" component="input" type="text" />
        <div className="text-help">
          {username.touched ? username.error : ''}
        </div>
      </div>
      <div className="row expanded">
        <label htmlFor="password">Mot de passe</label>
        <Field name="password" component="input" type="password" />
        <div className="text-help">
          {passord.touched ? password.error : ''}
        </div>
      </div>
      <button type="submit" className="button expanded">Connexion</button>
    </form>
  );
}

function validate(values) {
  const errors = {username: '', password: ''};

  if (!values.username) {
    errors.username = 'Enter a username';
  }
  if (!values.password) {
    errors.password = 'Enter a password';
  }

  return errors;
}

export default reduxForm({
  form: 'LoginForm', fields: ['username', 'password'], validate
})(LoginForm);
