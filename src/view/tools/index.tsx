import * as React from "react";

import { Cell, Grid } from "react-foundation";

import ToolsSection from "container/tools-section";
import TopBar from "container/top-bar";

class Tools extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Grid id="admin-container">
        <Cell id="content">
          <TopBar />
          <ToolsSection />
        </Cell>
      </Grid>
    );
  }
}

export default Tools;
