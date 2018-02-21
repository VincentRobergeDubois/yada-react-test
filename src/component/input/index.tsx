import * as React from "react";

import { WrappedFieldProps } from "redux-form";

interface IInputOwnProps {
  name: string;
  label?: string;
  type: string;
}

type TInputProps = IInputOwnProps & WrappedFieldProps;

class Input extends React.PureComponent<TInputProps, {}> {
  public render() {
    const { name, label, type, input, meta } = this.props;
    return (
      <div className="input">
        <label>{label}</label>
        <div>
          <input name={name} type={type} {...input} />
          {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
        </div>
      </div>
    );
  }
}

export default Input;
