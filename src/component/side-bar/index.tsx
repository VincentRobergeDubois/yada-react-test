import * as React from "react";
import { Column } from "react-foundation";

class SideBar extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Column id="sidebar" large={4}>
        <img src="../../../images/sideBarImage.jpg" alt="SideBarImage" />
      </Column>
    );
  }
}

export default SideBar;
