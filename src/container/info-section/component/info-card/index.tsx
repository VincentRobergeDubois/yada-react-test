import * as React from "react";

import { Callout, Cell, Grid } from "react-foundation";

interface IInfoCardProps {
  name: string;
  title: string;
  email: string;
}

class InfoCard extends React.Component<IInfoCardProps> {
  public render(): JSX.Element {
    return(
      <Callout className="columns">
        <Cell>
          <Grid>{this.props.name}</Grid>
          <Grid>{this.props.title}</Grid>
          <Grid>{this.props.email}</Grid>
        </Cell>
      </Callout>
    );
  }
}

export default InfoCard;
