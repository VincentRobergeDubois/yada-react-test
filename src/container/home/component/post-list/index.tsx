import * as React from "react";

import axios from "axios";
import { Column } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadPostList } from "action/post-action";
import { IPost } from "model/post";

import Post from "../post";

interface IPostListStateProps {
  postList: IPost[];
}

interface IPostListDispatchProps {
  loadPostList: typeof loadPostList;
}

type TPostListProps = IPostListStateProps & IPostListDispatchProps;

class PostList extends React.Component<TPostListProps, {}> {
  public componentWillMount(): void {
    axios.get("http://localhost:3000/posts").then((response) => {
      this.props.loadPostList(response.data);
    });
  }

  public render(): JSX.Element {
    return (
      <Column id="post-list">
        {this.renderList()}
      </Column>
    );
  }

  private renderList(): JSX.Element[] {
    return this.props.postList.map((post: IPost, key: number) => {
      return (
        <Post
          key={post.id}
          side={key}
          title={post.title}
          content={post.content}
          image={post.image}
        />
      );
    });
  }
}

const mapStateToProps = (state: any): IPostListStateProps => {
  return {
    postList: state.post.postList,
  };
};

const mapDispatchToProps = (dispatch: any): IPostListDispatchProps => {
  return {
    loadPostList: bindActionCreators(loadPostList, dispatch),
  };
};

export default connect<IPostListStateProps, IPostListDispatchProps, any>(mapStateToProps, mapDispatchToProps)(PostList);
