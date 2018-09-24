import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createAuthor, deleteAuthor, updateAuthor } from "action/author-action";
import ManagerList from "lib/manager-list";
import { TDispatch } from "model/action";
import { IAuthor } from "model/author";
import { IState } from "model/state";
import { getAuthorList } from "selector/author";

import AuthorManagerDisplay from "./component/author-manager-display";
import AuthorManagerForm from "./component/author-manager-form";
import { AUTHOR_FORM_NAME } from "./constant";

interface IAuthorManagerStateProps {
  authorList: IAuthor[];
}

interface IAuthorManagerDispatchProps {
  createAuthor: typeof createAuthor;
  deleteAuthor: typeof deleteAuthor;
  updateAuthor: typeof updateAuthor;
}

type TAuthorManagerProps = IAuthorManagerStateProps & IAuthorManagerDispatchProps;

class AuthorManager extends React.PureComponent<TAuthorManagerProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="author-manager">
        <ManagerList
          create={this.props.createAuthor}
          delete={this.props.deleteAuthor}
          display={AuthorManagerDisplay}
          form={AuthorManagerForm}
          formName={AUTHOR_FORM_NAME}
          identifier="id"
          itemList={this.props.authorList}
          title="Liste des Auteurs"
          update={this.props.updateAuthor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IAuthorManagerStateProps => ({
  authorList: getAuthorList(state),
});

const mapDispatchToProps = (dispatch: TDispatch<IAuthor[]>): IAuthorManagerDispatchProps => ({
  createAuthor: bindActionCreators(createAuthor, dispatch),
  deleteAuthor: bindActionCreators(deleteAuthor, dispatch),
  updateAuthor: bindActionCreators(updateAuthor, dispatch),
});

export default connect<IAuthorManagerStateProps, IAuthorManagerDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorManager);
