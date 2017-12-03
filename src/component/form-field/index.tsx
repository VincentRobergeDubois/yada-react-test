import * as React from "react";

interface IFormFieldOwnProps {
  name: string;
  type: string;
}

type IFormFieldProps = IFormFieldOwnProps;

class FormField extends React.PureComponent<IFormFieldProps, {}> {
  public render(): JSX.Element {
    return (
      <div>FormField</div>
    );
  }
}

export default FormField;
