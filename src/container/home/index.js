import * as React from 'react';
import { Row } from 'react-foundation';
import PostList from './post-list';

class Home extends React.Component {
  render() {
    return (
      <Row id="home-container" isExpanded>
        <PostList />
      </Row>
    );
  }
}

export default Home;
