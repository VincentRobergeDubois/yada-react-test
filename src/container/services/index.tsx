import * as React from 'react';
import Guest from '../../component/guest';

interface IServicesOwnProps {}
interface IServicesStateProps {}
interface IServicesDispatchProps {}

type TServicesProps = IServicesOwnProps & IServicesStateProps & IServicesDispatchProps;

class Services extends React.Component<TServicesProps, {}> {
  render() {
    return (
      <Guest>
        <div>Page des services en construction</div>
      </Guest>
    );
  }
}

export default Services;
