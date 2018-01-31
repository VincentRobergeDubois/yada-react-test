import * as React from "react";

import { Cell } from "react-foundation";
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
      <Cell>
        <label>{label}</label>
        <div>
          <input name={name} type={type} {...input} />
          {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
        </div>
      </Cell>
    );
  }
}

export default Input;
