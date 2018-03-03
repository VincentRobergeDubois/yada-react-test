import * as React from "react";

import { IManagerDisplay } from "model/manager";
import { IService } from "model/service";

interface IServiceManagerDisplayOwnProps extends IManagerDisplay<IService> { }

type TServiceManagerDisplayProps = IServiceManagerDisplayOwnProps;

class ServiceManagerDisplay extends React.PureComponent<TServiceManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={"manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.description}</div>
      </div>
    );
  }
}

export default ServiceManagerDisplay;
