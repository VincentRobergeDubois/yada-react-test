import * as React from "react";

import { IOrganisation } from "model/organisation";

interface IOrganisationDetailOwnProps {
  organisationList: IOrganisation[];
}

type TOrganisationDetailProps = IOrganisationDetailOwnProps;

class OrganisationDetail extends React.PureComponent<TOrganisationDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        Organisation Detail
      </div>
    );
  }
}

export default OrganisationDetail;
