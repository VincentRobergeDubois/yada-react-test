import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { createPost, deletePost, updatePost } from "action/post-action";
import ManagerList from "lib/manager-list";
import { IPost } from "model/post";
import { IState } from "model/state";
import { getPostList } from "selector/post";

import PostManagerDisplay from "./component/post-manager-display";
import PostManagerForm from "./component/post-manager-form";
import { POST_FORM_NAME } from "./constant";

interface IPostManagerStateProps {
  postList: IPost[];
}

interface IPostManagerDispatchProps {
  createPost: typeof createPost;
  deletePost: typeof deletePost;
  updatePost: typeof updatePost;
}

type TPostDetailProps = IPostManagerStateProps & IPostManagerDispatchProps;

class PostDetail extends React.PureComponent<TPostDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="post-manager">
        <ManagerList
          create={this.props.createPost}
          delete={this.props.deletePost}
          display={PostManagerDisplay}
          form={PostManagerForm}
          formName={POST_FORM_NAME}
          identifier="id"
          itemList={this.props.postList}
          title="Liste des articles"
          update={this.props.updatePost}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IPostManagerStateProps => ({
  postList: getPostList(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IState>): IPostManagerDispatchProps => ({
  createPost: bindActionCreators(createPost, dispatch),
  deletePost: bindActionCreators(deletePost, dispatch),
  updatePost: bindActionCreators(updatePost, dispatch),
});

export default connect<IPostManagerStateProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetail);
