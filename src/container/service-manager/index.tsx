import * as React from "react";

import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { createService, deleteService, updateService } from "action/service-action";
import ManagerList from "component/manager-list";
import { IService } from "model/service";
import { IState } from "model/state";
import { getServiceList } from "selector/service";

import ServiceManagerDisplay from "./component/service-manager-display";
import ServiceManagerForm from "./component/service-manager-form";
import { SERVICE_FORM_NAME } from "./constant";

interface IServiceManagerStateProps {
  serviceList: IService[];
}

interface IServiceManagerDispatchProps {
  createService: typeof createService;
  deleteService: typeof deleteService;
  updateService: typeof updateService;
}

type TServiceDetailProps = IServiceManagerStateProps & IServiceManagerDispatchProps;

class ServiceDetail extends React.PureComponent<TServiceDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="service-manager">
        <ManagerList
          create={this.props.createService}
          delete={this.props.deleteService}
          display={ServiceManagerDisplay}
          form={ServiceManagerForm}
          formName={SERVICE_FORM_NAME}
          identifier="id"
          itemList={this.props.serviceList}
          title="Liste des utilisateurs"
          update={this.props.updateService}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IServiceManagerStateProps => {
  return {
    serviceList: getServiceList(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): IServiceManagerDispatchProps => {
  return {
    createService: bindActionCreators(createService, dispatch),
    deleteService: bindActionCreators(deleteService, dispatch),
    updateService: bindActionCreators(updateService, dispatch),
  };
};

export default connect<IServiceManagerStateProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceDetail);
