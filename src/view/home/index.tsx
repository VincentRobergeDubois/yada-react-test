import * as React from 'react';

import Guest from 'component/guest';

interface IHomeProps {}
interface IHomeState {}

class Home extends React.PureComponent<IHomeProps, IHomeState> {
  render() {
    return (
      <Guest>
        Home
      </Guest>
    );
  }
}

export default Home;
