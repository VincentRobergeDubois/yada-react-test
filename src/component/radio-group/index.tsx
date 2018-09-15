import * as React from "react";

import { WrappedFieldProps } from "redux-form";

interface IRadioGroupOwnProps {
  disabled: boolean;
  inline: boolean;
  label?: string;
  name: string;
  radioList: IRadioInput[];
}

interface IRadioInput {
  disabled: boolean;
  label: string;
}

type TRadioGroupProps = IRadioGroupOwnProps & WrappedFieldProps;

class RadioGroup extends React.PureComponent<TRadioGroupProps, {}> {
  public render() {
    const { label, meta } = this.props;
    return (
      <div className="radio-group">
        <label>{label}</label>
        <div>
          {this.props.radioList.map(this.renderRadio)}
          {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
        </div>
      </div>
    );
  }

  private renderRadio = (radio: IRadioInput, key: number): JSX.Element => (
    <div className="radio-input" key={key}>
      <label>{radio.label}</label>
      <input disabled={radio.disabled} name={this.props.name} type="radio" {...this.props.input} />
    </div>
  )
}

export default RadioGroup;
