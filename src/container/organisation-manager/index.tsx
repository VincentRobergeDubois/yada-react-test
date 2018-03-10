import * as React from "react";

import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { createOrganisation, deleteOrganisation, updateOrganisation } from "action/organisation-action";
import ManagerList from "component/manager-list";
import { IOrganisation } from "model/organisation";
import { IState } from "model/state";
import { getOrganisationList } from "selector/organisation";

import OrganisationManagerDisplay from "./component/organisation-manager-display";
import OrganisationManagerForm from "./component/organisation-manager-form";
import { ORGANISATION_FORM_NAME } from "./constant";

interface IOrganisationManagerStateProps {
  organisationList: IOrganisation[];
}

interface IOrganisationManagerDispatchProps {
  createOrganisation: typeof createOrganisation;
  deleteOrganisation: typeof deleteOrganisation;
  updateOrganisation: typeof updateOrganisation;
}

type TOrganisationDetailProps = IOrganisationManagerStateProps & IOrganisationManagerDispatchProps;

class OrganisationDetail extends React.PureComponent<TOrganisationDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="organisation-manager">
        <ManagerList
          create={this.props.createOrganisation}
          delete={this.props.deleteOrganisation}
          display={OrganisationManagerDisplay}
          form={OrganisationManagerForm}
          formName={ORGANISATION_FORM_NAME}
          identifier="id"
          itemList={this.props.organisationList}
          title="Liste des organisation"
          update={this.props.updateOrganisation}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IOrganisationManagerStateProps => {
  return {
    organisationList: getOrganisationList(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): IOrganisationManagerDispatchProps => {
  return {
    createOrganisation: bindActionCreators(createOrganisation, dispatch),
    deleteOrganisation: bindActionCreators(deleteOrganisation, dispatch),
    updateOrganisation: bindActionCreators(updateOrganisation, dispatch),
  };
};

export default connect<IOrganisationManagerStateProps, IOrganisationManagerDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationDetail);
