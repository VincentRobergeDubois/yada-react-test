import * as React from "react";

interface IYadaButtonOwnProps {
  label: string;
  onClick?: () => void;
  type: string;
}

type TYadaButtonProps = IYadaButtonOwnProps;

class YadaButton extends React.PureComponent<TYadaButtonProps, {}> {
  public render(): JSX.Element {
    return (
      <button className="yada-button" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default YadaButton;
