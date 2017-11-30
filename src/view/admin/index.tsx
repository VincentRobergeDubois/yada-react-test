import * as React from 'react';

import Manager from 'component/manager';

class Admin extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Manager>
        Admin
      </Manager>
    );
  }
}

export default Admin;
