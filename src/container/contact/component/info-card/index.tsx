import * as React from "react";

import { Callout, Column, Row } from "react-foundation";

interface IInfoCardProps {
  name: string;
  title: string;
  email: string;
}

class InfoCard extends React.Component<IInfoCardProps> {
  public render(): JSX.Element {
    return(
      <Callout className="columns">
        <Column>
          <Row>{this.props.name}</Row>
          <Row>{this.props.title}</Row>
          <Row>{this.props.email}</Row>
        </Column>
      </Callout>
    );
  }
}

export default InfoCard;
