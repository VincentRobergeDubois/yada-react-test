import * as React from "react";

import { connect } from "react-redux";

import { IService } from "model/service";
import { IState } from "model/state";
import { getServiceList } from "selector/service";

interface IServiceManagerStateProps {
  serviceList: IService[];
}

type TServiceDetailProps = IServiceManagerStateProps;

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

const mapStateToProps = (state: IState): IServiceManagerStateProps => {
  return {
    serviceList: getServiceList(state),
  };
};

export default connect<IServiceManagerStateProps, {}, {}>(
  mapStateToProps,
)(ServiceDetail);
