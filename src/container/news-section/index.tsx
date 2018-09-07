import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { loadPostList } from "action/post-action";
import { IPost } from "model/post";
import { IState } from "model/state";
import { getPostList } from "selector/post";

import Post from "./component/post";

interface INewsSectionStateProps {
  postList: IPost[];
}

interface INewsSectionDispatchProps {
  loadPostList: typeof loadPostList;
}

type TNewsSectionProps = INewsSectionStateProps & INewsSectionDispatchProps;

class NewsSection extends React.Component<TNewsSectionProps, {}> {
  public componentDidMount(): void {
    if ( this.props.postList.length === 0 ) {
      this.props.loadPostList();
    }
  }

  public render(): JSX.Element {
    return (
      <div id="news-section">
        {this.renderBroadcast()}
        {this.renderList()}
      </div>
    );
  }

  private renderBroadcast = (): JSX.Element => {
    return (
      <div className="broadcast">
        Annonces à venir
      </div>
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

const mapStateToProps = (state: IState): INewsSectionStateProps => ({
  postList: getPostList(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IState>): INewsSectionDispatchProps => ({
  loadPostList: bindActionCreators(loadPostList, dispatch),
});

export default connect<INewsSectionStateProps, INewsSectionDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(NewsSection);
