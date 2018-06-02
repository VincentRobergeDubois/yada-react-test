import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { createBook, deleteBook, updateBook } from "action/book-action";
import ManagerList from "component/manager-list";
import { IBook } from "model/book";
import { IState } from "model/state";
import { getBookList } from "selector/book";

import BookManagerDisplay from "./component/book-manager-display";
import BookManagerForm from "./component/book-manager-form";
import { BOOK_FORM_NAME } from "./constant";

interface IBookManagerStateProps {
  bookList: IBook[];
}

interface IBookManagerDispatchProps {
  createBook: typeof createBook;
  deleteBook: typeof deleteBook;
  updateBook: typeof updateBook;
}

type TBookManagerProps = IBookManagerStateProps & IBookManagerDispatchProps;

class BookManager extends React.PureComponent<TBookManagerProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="book-manager">
        <ManagerList
          create={this.props.createBook}
          delete={this.props.deleteBook}
          display={BookManagerDisplay}
          form={BookManagerForm}
          formName={BOOK_FORM_NAME}
          identifier="id"
          itemList={this.props.bookList}
          title="Liste des Livres"
          update={this.props.updateBook}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IBookManagerStateProps => ({
  bookList: getBookList(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IState>): IBookManagerDispatchProps => ({
  createBook: bindActionCreators(createBook, dispatch),
  deleteBook: bindActionCreators(deleteBook, dispatch),
  updateBook: bindActionCreators(updateBook, dispatch),
});

export default connect<IBookManagerStateProps, IBookManagerDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(BookManager);
