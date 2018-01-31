import * as React from "react";

import { IService } from "model/service";

interface IServiceDetailOwnProps {
  serviceList: IService[];
}

type TServiceDetailProps = IServiceDetailOwnProps;

class ServiceDetail extends React.PureComponent<TServiceDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        Service Detail
      </div>
    );
  }
}

export default ServiceDetail;
