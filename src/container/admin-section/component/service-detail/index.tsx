import * as React from "react";

import { IService } from "model/service";

interface IServiceDetailOwnProps {
  serviceList: IService[];
}

type TServiceDetailProps = IServiceDetailOwnProps;

class ServiceDetail extends React.PureComponent<TServiceDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        {this.renderHeader()}
        {this.renderList()}
      </div>
    );
  }

  private renderHeader = (): JSX.Element => (
    <div>
      <h1>Liste des services</h1>
      <button>Ajouter</button>
      <button>Modifier</button>
      <button>Supprimer</button>
    </div>
  )

  private renderList = (): JSX.Element[] => {
    return this.props.serviceList.map((service: IService, key: number) => (
      <div key={key}>
        <div>{service.id}</div>
        <div>{service.name}</div>
        <div>{service.description}</div>
      </div>
    ));
  }
}

export default ServiceDetail;
