import * as React from 'react';

import Manager from 'component/manager';

interface IAdminProps {}
interface IAdminState {}

class Admin extends React.PureComponent<IAdminProps, IAdminState> {
  render() {
    return (
      <Manager>
        Admin
      </Manager>
    );
  }
}

export default Admin;
