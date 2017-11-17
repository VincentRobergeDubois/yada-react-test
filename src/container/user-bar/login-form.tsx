import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { loadUser } from '../../action';

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Champ requis';
  }
  if (!values.password) {
    errors.password = 'Champ requis';
  }

  return errors;
}

const warn = (values) => {
  const warnings = {};

  return warnings;
}

const RenderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <Field name="username" component={RenderField} type="text" label="Nom d'utilisateur" />
      <Field name="password" component={RenderField} type="password" label="Mot de passe" />
      <button type="submit" className="button expanded" disabled={submitting}>Connexion</button>
    </form>
  );
}

export default reduxForm({
  form: 'LoginForm', validate, warn
}, null, { loadUser })(LoginForm);
