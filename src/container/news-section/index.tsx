import * as React from "react";

import { Column } from "react-foundation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadPostList } from "action/post-action";
import { IPost } from "model/post";
import { IState } from "model/state";

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
    this.props.loadPostList();
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
}

const mapStateToProps = (state: IState): INewsSectionStateProps => {
  return {
    postList: state.post.list,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>): INewsSectionDispatchProps => {
  return {
    loadPostList: bindActionCreators(loadPostList, dispatch),
  };
};

export default
connect<INewsSectionStateProps, INewsSectionDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(NewsSection);
