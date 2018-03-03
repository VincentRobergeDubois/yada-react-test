import * as React from "react";

import { IManagerDisplay } from "model/manager";
import { IOrganisation } from "model/organisation";
import { formatPhone } from "service/format/phone";

interface IOrganisationManagerDisplayOwnProps extends IManagerDisplay<IOrganisation> { }

type TOrganisationManagerDisplayProps = IOrganisationManagerDisplayOwnProps;

class OrganisationManagerDisplay extends React.PureComponent<TOrganisationManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={"manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div className="default-display">
          <div>{this.props.item.abreviation}</div>
          <div>{this.props.item.name}</div>
        </div>
        {this.props.isSelected && this.renderDetail()}
      </div>
    );
  }

  private renderDetail = (): JSX.Element => {
    return (
      <div className="detail-display">
        <div>{this.props.item.email}</div>
        <div>{formatPhone(this.props.item.phone)} / {this.props.item.extension}</div>
      </div>
    );
  }
}

export default OrganisationManagerDisplay;
