import * as React from "react";

import { Column } from "react-foundation";

class SideBar extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Column id="sidebar" medium={6} large={4} hideOnlyFor="small">
        <img src="../../../images/sideBarImage.jpg" alt="SideBarImage" />
      </Column>
    );
  }
}

export default SideBar;
