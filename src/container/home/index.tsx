import * as React from "react";

import Guest from "component/guest";

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Guest>
        Home
      </Guest>
    );
  }
}

export default Home;
