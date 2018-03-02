import * as React from "react";

import { IManagerDetail } from "model/manager";
import { IOrganisation } from "model/organisation";

interface IOrganisationManagerDetailOwnProps extends IManagerDetail<IOrganisation> { }

type TOrganisationManagerDetailProps = IOrganisationManagerDetailOwnProps;

class OrganisationManagerDetail extends React.PureComponent<TOrganisationManagerDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        Detail
      </div>
    );
  }
}

export default OrganisationManagerDetail;
