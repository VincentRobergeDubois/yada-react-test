import * as React from "react";

import { InjectedFormProps, reduxForm } from "redux-form";

import { SERVICE_FORM_NAME } from "../../constant";
import { IServiceFormValues } from "../../model";

interface IServiceFormOwnProps {
  prop: string;
}

type TServiceFormProps = IServiceFormOwnProps;
type InjectedProps = InjectedFormProps<IServiceFormValues, TServiceFormProps>;

class ServiceForm extends React.PureComponent<TServiceFormProps & InjectedProps, {}> {
  public render(): JSX.Element {
    return (
      <form>
        myForm
      </form>
    );
  }
}

export default reduxForm<IServiceFormValues, TServiceFormProps>({
  form: SERVICE_FORM_NAME,
})(ServiceForm);
