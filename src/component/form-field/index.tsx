import * as React from "react";

export enum FORM_FIELD_TYPE {
  "input",
  "select",
  "radioGroup",
}

interface IOption {
  content: string;
  value: string;
}

interface IFormFieldOwnProps {
  name: string;
  type: string;
  options?: IOption[];
}

type IFormFieldProps = IFormFieldOwnProps;

class FormField extends React.PureComponent<IFormFieldProps, {}> {
  public render(): JSX.Element {
    return (
      <div>FormField</div>
    );
  }

  private renderInput = (): JSX.Element => {
    return <input name={this.props.name} />;
  }

  private renderSelect = (): JSX.Element => {
    return (
      <select name={this.props.name}>
        {this.renderOptions()}
      </select>
    );
  }

  private renderOptions = (): JSX.Element[] => {
    const options = this.props.options.map((option: IOption, key: number) => {
      return this.renderOption(option);
    });
    return options;
  }

  private renderOption = (option: IOption): JSX.Element => {
    return (
      <option value={option.value}>{option.content}</option>
    );
  }

  private renderRadioGroup = (): JSX.Element[] => {
    return this.props.options.map((option: IOption, key: number) => {
      return <input key={key} name={this.props.name} type="radio" value={option.value} />;
    });
  }
}

export default FormField;
