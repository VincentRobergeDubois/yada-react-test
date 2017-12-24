import * as React from "react";

import { Link } from "react-router-dom";

interface ISideBarOwnProps {
  link: string;
  image: string;
}

type TSideBarProps = ISideBarOwnProps;

class SideBar extends React.PureComponent<TSideBarProps, {}> {
  public render(): JSX.Element {
    return (
      <Link to={this.props.link}>
        <img src={this.props.image} alt="Yada" />
      </Link>
    );
  }
}

export default SideBar;
