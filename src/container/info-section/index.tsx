import * as React from "react";
import { connect } from "react-redux";

import { IState } from "model/state";
import { IUserAdmin } from "model/user";
import { getAdminUserList } from "selector/user";

import InfoCard from "./component/info-card";

interface IInfoSectionStateProps {
  adminUserList: IUserAdmin[];
}

type TInfoSectionProps = IInfoSectionStateProps;

class InfoSection extends React.PureComponent<TInfoSectionProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="info-section">
        <div className="general-info">
          <p>Text Example</p>
        </div>
        <div className="info-card-list">
          {this.props.adminUserList.map(this.renderInfoCard)}
        </div>
      </div>
    );
  }

  private renderInfoCard = (user: IUserAdmin, key: number): JSX.Element => (
    <InfoCard
      key={key}
      name={user.name}
      title={user.title}
      email={user.email}
    />
  )
}

const mapStateToProps = (state: IState): IInfoSectionStateProps => ({
  adminUserList: getAdminUserList(state),
});

export default connect<IInfoSectionStateProps, {}, {}>(
  mapStateToProps,
  {},
)(InfoSection);
