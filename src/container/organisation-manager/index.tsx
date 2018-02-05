import * as React from "react";

import { Button } from "react-foundation";

import { IOrganisation } from "model/organisation";

interface IOrganisationDetailOwnProps {
  organisationList: IOrganisation[];
}

type TOrganisationDetailProps = IOrganisationDetailOwnProps;

class OrganisationDetail extends React.PureComponent<TOrganisationDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="organisation-detail">
        {this.renderHeader()}
        {this.renderList()}
      </div>
    );
  }

  private renderHeader = (): JSX.Element => (
    <div>
      <h1>Liste des organisations</h1>
      <Button color="primary">Ajouter</Button>
      <Button color="warning">Modifier</Button>
      <Button color="alert">Supprimer</Button>
    </div>
  )

  private renderList = (): JSX.Element[] => {
    return this.props.organisationList.map((organisation: IOrganisation, key: number) => (
      <div key={key}>
        <div>{organisation.id}</div>
        <div>{organisation.abreviation}</div>
        <div>{organisation.name}</div>
        <div>{organisation.email}</div>
        <div>{organisation.headOffice}</div>
        <div>{organisation.phone}</div>
        <div>{organisation.extension}</div>
      </div>
    ));
  }
}

export default OrganisationDetail;
