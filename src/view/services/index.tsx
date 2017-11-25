import * as React from 'react';

import Guest from 'component/guest';

class Home extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Guest>
        Services
      </Guest>
    );
  }
}

export default Home;
