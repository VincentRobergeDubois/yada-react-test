import * as React from 'react';
import { MenuItem, Icon } from 'react-foundation';

interface INavListItemProps {
  name: string,
  icon: string,
  onClick: () => void
}

class NavListItem extends React.Component<INavListItemProps> {
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

export { INavListItemProps };
export default NavListItem;
