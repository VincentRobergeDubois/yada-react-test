import * as React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";

import { IManagerForm } from "model/manager";
import { IPostFormValues } from "model/post";

interface IPostManagerFormOwnProps extends IManagerForm<IPostFormValues> { }

type TPostManagerFormProps = IPostManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IPostFormValues, TPostManagerFormProps>;

class PostManagerForm extends React.PureComponent<TPostManagerFormProps & TInjectedFormProps> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        <button type="submit">Confirmer</button>
        <button type="button" onClick={this.props.handleCancel}>Annuler</button>
      </form>
    );
  }
}

export default reduxForm<IPostFormValues, TPostManagerFormProps>({
})(PostManagerForm);
