import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Input from "component/input";
import YadaButton from "component/yada-button";
import { IManagerForm } from "model/manager";
import { IServiceFormValues } from "model/service";
import { required } from "service/form-validator";

interface IServiceManagerFormOwnProps extends IManagerForm<IServiceFormValues> { }

type TServiceManagerFormProps = IServiceManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IServiceFormValues, TServiceManagerFormProps>;

class ServiceManagerForm extends React.PureComponent<TServiceManagerFormProps & TInjectedFormProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        <Field
          component={Input}
          label="Nom"
          name="name"
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

export default reduxForm<IServiceFormValues, TServiceManagerFormProps>({
})(ServiceManagerForm);
