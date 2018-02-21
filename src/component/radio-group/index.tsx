import * as React from "react";

import { WrappedFieldProps } from "redux-form";

interface IRadioGroupOwnProps {
  name: string;
  label?: string;
}

type TRadioGroupProps = IRadioGroupOwnProps & WrappedFieldProps;

class Input extends React.PureComponent<TRadioGroupProps, {}> {
  public render() {
    const { name, label, input, meta } = this.props;
    return (
      <div className="radio-group">
        <label>{label}</label>
        <div>
          <input name={name} type="radio" {...input} />
          {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
        </div>
      </div>
    );
  }
}

export default Input;
