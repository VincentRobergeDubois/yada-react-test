import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Input from "component/input";
import YadaButton from "component/yada-button";
import { IEditorFormValues } from "model/editor";
import { IManagerForm } from "model/manager";
import { required } from "service/field-validator";

interface IEditorManagerFormOwnProps extends IManagerForm<IEditorFormValues> { }

type TEditorManagerFormProps = IEditorManagerFormOwnProps;
type TInjectedFormProps = InjectedFormProps<IEditorFormValues, TEditorManagerFormProps>;

class EditorManagerForm extends React.PureComponent<TEditorManagerFormProps & TInjectedFormProps, {}> {
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
        <YadaButton label="Confirmer" type="submit" />
        <YadaButton label="Annuler" onClick={this.props.handleCancel} type="button" />
      </form>
    );
  }
}

export default reduxForm<IEditorFormValues, TEditorManagerFormProps>({
})(EditorManagerForm);
