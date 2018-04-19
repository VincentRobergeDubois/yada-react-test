import * as React from "react";

import { Callout } from "react-foundation";

interface IInfoCardProps {
  name: string;
  title: string;
  email: string;
}

class InfoCard extends React.Component<IInfoCardProps> {
  public render(): JSX.Element {
    return(
      <Callout className="info-card">
        <div>{this.props.name}</div>
        <div>{this.props.title}</div>
        <div>{this.props.email}</div>
      </Callout>
    );
  }
}

export default InfoCard;
