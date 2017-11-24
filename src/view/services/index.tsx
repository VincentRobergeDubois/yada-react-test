import * as React from 'react';

import Guest from 'component/guest';

interface IServicesProps {}
interface IServicesState {}

class Home extends React.PureComponent<IServicesProps, IServicesState> {
  render() {
    return (
      <Guest>
        Services
      </Guest>
    );
  }
}

export default Home;
