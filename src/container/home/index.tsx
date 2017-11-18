import * as React from 'react';
import Guest from 'component/guest';
import PostList from './post-list';

class Home extends React.Component {
  render() {
    return (
      <Guest>
        <PostList />
      </Guest>
    );
  }
}

export default Home;
