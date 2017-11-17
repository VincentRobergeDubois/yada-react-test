import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MenuItem, Icon } from 'react-foundation';

interface INavListItemOwnProps {
  name: string,
  icon: string,
  onClick: () => void
}

interface INavListItemStateProps { }

interface INavListItemDispatchProps { }

type TNavListItemProps = INavListItemOwnProps & INavListItemStateProps & INavListItemDispatchProps;

class NavListItem extends React.Component<TNavListItemProps> {
  render() {
    return (
      <MenuItem className="nav-item">
        <div onClick={this.props.onClick}>
          <Icon name={this.props.icon} />
          <span>{this.props.name}</span>
        </div>
      </MenuItem>
    );
  }
}

export default NavListItem;
