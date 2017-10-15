import * as React from 'react';
import { connect } from 'react-redux';
import { Column } from 'react-foundation';
import Post from './post';
import { loadPosts } from '../../action';

class PostList extends React.Component {
  componentWillMount() {
    this.props.loadPosts();
  }

  renderList() {
    return this.props.posts.map((post, key) => {
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

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  };
}

export default connect(mapStateToProps, { loadPosts })(PostList);
