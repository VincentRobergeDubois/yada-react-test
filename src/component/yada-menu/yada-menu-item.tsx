import * as React from "react";
import { Icon, MenuItem } from "react-foundation";
import { Link } from "react-router-dom";

interface IYadaMenuItemProps {
  name: string;
  icon: string;
  link: string;
}

class YadaMenuItem extends React.PureComponent<IYadaMenuItemProps, {}> {
  public render(): JSX.Element {
    return (
      <MenuItem className="item">
        <Link to={this.props.link}>
          <Icon name={this.props.icon} />
          <span>{this.props.name}</span>
        </Link>
      </MenuItem>
    );
  }
}

export default YadaMenuItem;
