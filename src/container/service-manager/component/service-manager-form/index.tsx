import * as React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";

import { IManagerForm } from "model/manager";
import { IServiceFormValues } from "model/service";

interface IServiceManagerFormOwnProps extends IManagerForm<IServiceFormValues> { }

type TServiceManagerFormProps = IServiceManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IServiceFormValues, TServiceManagerFormProps>;

class ServiceManagerForm extends React.PureComponent<TServiceManagerFormProps & TInjectedFormProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        <button type="submit">Confirmer</button>
        <button type="button" onClick={this.props.handleCancel}>Annuler</button>
      </form>
    );
  }
}

export default reduxForm<IServiceFormValues, TServiceManagerFormProps>({
})(ServiceManagerForm);
