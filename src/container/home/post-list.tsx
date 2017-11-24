import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";
import { Column } from 'react-foundation';
import axios from 'axios';
import Post from './post';
import { loadPostList, IPostAction } from 'action/post-action';
import { IPost } from 'model/post';

interface IPostListOwnProps {}

interface IPostListStateProps {
  postList: IPost[]
}

interface IPostListDispatchProps {
  loadPostList: (data: IPost[]) => IPostAction
}

type TPostListProps = IPostListOwnProps & IPostListStateProps & IPostListDispatchProps;

class PostList extends React.Component<TPostListProps, {}> {
  componentWillMount() {
    axios.get('http://localhost:3000/posts').then((response) => {
      this.props.loadPostList(response.data);
    });
  }

  renderList() {
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

  render () {
    return (
      <Column id="post-list">
        {this.renderList()}
      </Column>
    );
  }
}

const mapStateToProps = (state: any): IPostListStateProps => {
  return { postList: state.postList };
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IPostListDispatchProps => {
  return { loadPostList: bindActionCreators(loadPostList, dispatch) };
}

export default connect<IPostListStateProps, IPostListDispatchProps, IPostListOwnProps>(mapStateToProps, mapDispatchToProps)(PostList);
