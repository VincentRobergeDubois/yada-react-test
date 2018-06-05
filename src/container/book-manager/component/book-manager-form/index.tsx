import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Input from "component/input";
import YadaButton from "component/yada-button";
import { IBookFormValues } from "model/book";
import { IManagerForm } from "model/manager";
import { required } from "service/form-validator";

interface IBookManagerFormOwnProps extends IManagerForm<IBookFormValues> { }

type TBookManagerFormProps = IBookManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IBookFormValues, TBookManagerFormProps>;

class BookManagerForm extends React.PureComponent<TBookManagerFormProps & TInjectedFormProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        <Field
          component={Input}
          label="Titre"
          name="title"
          type="text"
          validate={required}
        />
        <Field
          component={Input}
          label="Description"
          name="description"
          type="text"
          validate={required}
        />
        <YadaButton label="Confirmer" type="submit" />
        <YadaButton label="Annuler" onClick={this.props.handleCancel} type="button" />
      </form>
    );
  }
}

export default reduxForm<IBookFormValues, TBookManagerFormProps>({
})(BookManagerForm);
