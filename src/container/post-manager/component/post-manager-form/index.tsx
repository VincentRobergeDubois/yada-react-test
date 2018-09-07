import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Input from "component/input";
import YadaButton from "component/yada-button";
import { IManagerForm } from "model/manager";
import { IPostFormValues } from "model/post";
import { required } from "service/field-validator";

interface IPostManagerFormOwnProps extends IManagerForm<IPostFormValues> { }

type TPostManagerFormProps = IPostManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IPostFormValues, TPostManagerFormProps>;

class PostManagerForm extends React.PureComponent<TPostManagerFormProps & TInjectedFormProps> {
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
          label="Contenu"
          name="content"
          type="textarea"
          validate={required}
        />
        <YadaButton label="Confirmer" type="submit" />
        <YadaButton label="Annuler" onClick={this.props.handleCancel} type="button" />
      </form>
    );
  }
}

export default reduxForm<IPostFormValues, TPostManagerFormProps>({
})(PostManagerForm);
