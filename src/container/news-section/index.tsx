import * as React from "react";

import axios from "axios";
import { Column } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadPostList } from "action/post-action";
import { IPost } from "model/post";

import Post from "./component/post";

interface INewsSectionStateProps {
  postList: IPost[];
}

interface INewsSectionDispatchProps {
  loadPostList: typeof loadPostList;
}

type TNewsSectionProps = INewsSectionStateProps & INewsSectionDispatchProps;

class NewsSection extends React.Component<TNewsSectionProps, {}> {
  public componentWillMount(): void {
    this.fetchPostList();
  }

  public render(): JSX.Element {
    return (
      <Column id="news-section">
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

  private fetchPostList = () => {
    axios.get("http://localhost:3000/posts").then((response) => {
      this.props.loadPostList(response.data);
    });
  }
}

const mapStateToProps = (state: any): INewsSectionStateProps => {
  return {
    postList: state.post.postList,
  };
};

const mapDispatchToProps = (dispatch: any): INewsSectionDispatchProps => {
  return {
    loadPostList: bindActionCreators(loadPostList, dispatch),
  };
};

export default
connect<INewsSectionStateProps, INewsSectionDispatchProps, any>(mapStateToProps, mapDispatchToProps)(NewsSection);
