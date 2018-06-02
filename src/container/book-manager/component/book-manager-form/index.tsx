import * as React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";

import YadaButton from "component/yada-button";
import { IBookFormValues } from "model/book";
import { IManagerForm } from "model/manager";

interface IBookManagerFormOwnProps extends IManagerForm<IBookFormValues> { }

type TBookManagerFormProps = IBookManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IBookFormValues, TBookManagerFormProps>;

class BookManagerForm extends React.PureComponent<TBookManagerFormProps & TInjectedFormProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        FORM
        <YadaButton label="Confirmer" type="submit" />
        <YadaButton label="Annuler" onClick={this.props.handleCancel} type="button" />
      </form>
    );
  }
}

export default reduxForm<IBookFormValues, TBookManagerFormProps>({
})(BookManagerForm);
