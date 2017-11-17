import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Icon } from 'react-foundation';

export interface IYadaMenuItemOwnProps {
  name: string,
  icon: string,
  link: string
}

interface IYadaMenuItemStateProps { }

interface IYadaMenuItemDispatchProps { }

type TYadaMenuItemProps = IYadaMenuItemOwnProps & IYadaMenuItemStateProps & IYadaMenuItemDispatchProps;

class YadaMenuItem extends React.Component<TYadaMenuItemProps> {
  render() {
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
