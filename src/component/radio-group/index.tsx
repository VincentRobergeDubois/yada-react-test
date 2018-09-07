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
          {this.renderRadioList()}
          {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
        </div>
      </div>
    );
  }

  private renderRadioList = (): JSX.Element[] => {
    const { name, input } = this.props;
    return this.props.radioList.map((radio: IRadioInput) => (
      <div className="radio-input">
        <label>{radio.label}</label>
        <input disabled={radio.disabled} name={name} type="radio" {...input} />
      </div>
    ));
  }
}

export default RadioGroup;
