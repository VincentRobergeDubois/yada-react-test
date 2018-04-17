import * as React from "react";
import { connect } from "react-redux";

import { IState } from "model/state";
import { IUser } from "model/user";
import { getAdminUserList } from "selector/user";

import InfoCard from "./component/info-card";

interface IInfoSectionStateProps {
  adminUserList: IUser[];
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
          {this.renderInfoCardList()}
        </div>
      </div>
    );
  }

  private renderInfoCardList = (): JSX.Element[] => {
    return this.props.adminUserList.map((user: IUser, key: number) => {
      return (
        <InfoCard
          key={key}
          name={user.firstname + " " + user.lastname}
          title="Consultant"
          email={user.email}
        />
      );
    });
  }

}

const mapStateToProps = (state: IState): IInfoSectionStateProps => {
  return {
    adminUserList: getAdminUserList(state),
  };
};

export default connect<IInfoSectionStateProps, {}, {}>(
  mapStateToProps,
  {},
)(InfoSection);
