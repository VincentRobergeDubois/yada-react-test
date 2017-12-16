import * as React from "react";

import { Link } from "react-router-dom";

import { Column } from "react-foundation";

interface ISideBarOwnProps {
  link: string;
  image: string;
  largeSize: number;
  mediumSize: number;
}

type TSideBarProps = ISideBarOwnProps;

class SideBar extends React.PureComponent<TSideBarProps, {}> {
  public render(): JSX.Element {
    return (
      <Column
        className="sidebar"
        medium={this.props.mediumSize}
        large={this.props.largeSize}
        hideOnlyFor="small"
      >
        <Link to={this.props.link}>
          <img src={this.props.image} alt="Yada" />
        </Link>
      </Column>
    );
  }
}

export default SideBar;
