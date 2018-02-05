import * as React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";

import { IUserConn } from "model/user";

import { USER_FORM_NAME } from "./constant";
import { IUserFormValues } from "./model";

interface IUserFormOwnProps {
  handleCreateSubmit: () => void;
  handleUpdateSubmit: () => void;
  user: IUserConn;
}

type TUserFormProps = IUserFormOwnProps;
type InjectedProps = InjectedFormProps<IUserFormValues, TUserFormProps>;

class UserForm extends React.PureComponent<TUserFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form>
        myForm
      </form>
    );
  }
}

export default reduxForm<IUserFormValues, TUserFormProps>({
  form: USER_FORM_NAME,
})(UserForm);
