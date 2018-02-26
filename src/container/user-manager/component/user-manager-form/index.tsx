import * as React from "react";

import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Input from "component/input";
import { IManagerForm } from "component/manager-list/model";
import RadioGroup from "component/radio-group";
import { IUser, IUserFormValues } from "model/user";
import { required } from "service/form-validator";

import { USER_FORM_NAME } from "../../constant";

interface IUserManagerFormOwnProps extends IManagerForm<IUser, IUserFormValues> { }

type TUserManagerFormProps = IUserManagerFormOwnProps;
type InjectedProps = InjectedFormProps<IUserFormValues, TUserManagerFormProps>;

class UserManagerForm extends React.PureComponent<TUserManagerFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.handleForm())}>
        <div>
          <Field
            name="username"
            label="Nom d'utilisateur"
            type="text"
            component={Input}
            validate={[ required ]}
          />
        </div>
        <div>
          <Field
            name="firstname"
            label="Prénom"
            type="text"
            component={Input}
            validate={[ required ]}
          />
        </div>
        <div>
          <Field
            name="lastname"
            label="Nom de famille"
            type="text"
            component={Input}
            validate={[ required ]}
          />
        </div>
        <div>
          <Field
            name="email"
            label="Courriel"
            type="text"
            component={Input}
            validate={[ required ]}
          />
        </div>
        <div>
          <Field
            name="phone"
            label="Numéro de téléphone"
            type="text"
            component={Input}
            validate={[ required ]}
          />
        </div>
        <div>
          <Field
            name="admin"
            label="Droit administrateur"
            component={RadioGroup}
            validate={[ required ]}
          />
        </div>
        <button type="submit">Confirmer</button>
      </form>
    );
  }
}

export default reduxForm({
  form: USER_FORM_NAME,
})(UserManagerForm);
