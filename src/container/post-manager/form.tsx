import * as React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";

import { IPost } from "model/post";

import { POST_FORM_NAME } from "./constant";
import { IPostFormValues } from "./model";

interface IPostFormOwnProps {
  handleCreateSubmit: () => void;
  handleUpdateSubmit: () => void;
  post: IPost;
}

type TPostFormProps = IPostFormOwnProps;
type InjectedProps = InjectedFormProps<IPostFormValues, TPostFormProps>;

class UserForm extends React.PureComponent<TPostFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form>
        myForm
      </form>
    );
  }
}

export default reduxForm<IPostFormValues, TPostFormProps>({
  form: POST_FORM_NAME,
})(UserForm);
