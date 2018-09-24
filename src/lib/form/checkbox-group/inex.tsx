import * as React from "react";

import { WrappedFieldProps } from "redux-form";

interface ICheckboxGroupOwnProps {
  disabled: boolean;
  inline: boolean;
  label?: string;
  checkboxList: ICheckboxInput[];
}

interface ICheckboxInput {
  disabled: boolean;
  label: string;
  name: string;
}

type TCheckboxGroupProps = ICheckboxGroupOwnProps & WrappedFieldProps;

class CheckboxGroup extends React.PureComponent<TCheckboxGroupProps, {}> {
  public render() {
    const { label, meta } = this.props;
    return (
      <div className="radio-group">
        <label>{label}</label>
        <div>
          {this.props.checkboxList.map(this.renderCheckbox)}
          {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
        </div>
      </div>
    );
  }

  private renderCheckbox = (checkbox: ICheckboxInput, key: number): JSX.Element => (
    <div className="checkbox-input" key={key}>
      <label>{checkbox.label}</label>
      <input disabled={checkbox.disabled} name={checkbox.name} type="checkbox" {...this.props.input} />
    </div>
  )
}

export default CheckboxGroup;
