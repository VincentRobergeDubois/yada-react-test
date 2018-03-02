import * as React from "react";

import { IManagerDisplay } from "model/manager";
import { IOrganisation } from "model/organisation";

interface IOrganisationManagerDisplayOwnProps extends IManagerDisplay<IOrganisation> { }

type TOrganisationManagerDisplayProps = IOrganisationManagerDisplayOwnProps;

class OrganisationManagerDisplay extends React.PureComponent<TOrganisationManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={"manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div>{this.props.item.abreviation}</div>
        <div>{this.props.item.name}</div>
      </div>
    );
  }
}

export default OrganisationManagerDisplay;
