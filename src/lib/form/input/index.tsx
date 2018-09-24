import * as React from "react";

import { WrappedFieldProps } from "redux-form";

interface IInputOwnProps {
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
}

type TInputProps = IInputOwnProps & WrappedFieldProps;

class Input extends React.PureComponent<TInputProps, {}> {
  public render() {
    return (
      <div className="form-input">
        {this.props.label && <label>{this.props.label}</label>}
        <div>
          <input
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            {...this.props.input}
          />
          {this.props.meta.touched && this.renderMessage()}
        </div>
      </div>
    );
  }

  private renderMessage = (): JSX.Element | void => {
    if (this.props.meta.error) {
      return this.renderError();
    } else if (this.props.meta.warning) {
      return this.renderWarning();
    }
  }

  private renderError = (): JSX.Element => (
    <span className="error-msg">
      {this.props.meta.error}
    </span>
  )

  private renderWarning = (): JSX.Element => (
    <span className="warning-msg">
      {this.props.meta.warning}
    </span>
  )
}

export default Input;
