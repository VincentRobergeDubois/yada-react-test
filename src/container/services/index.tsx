import * as React from "react";

import Guest from "component/guest";

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Guest>
        Services
      </Guest>
    );
  }
}

export default Home;
