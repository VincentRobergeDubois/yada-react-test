import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Icon } from 'react-foundation';

class YadaMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  renderItems() {
    return this.props.menuItems.map((menuItem) => {
      return (
        <YadaMenuItem
          key={menuItem.id}
          name={menuItem.name}
          icon={menuItem.icon}
          link={menuItem.link}
        />
      );
    });
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render () {
    let menu = '';
    if (this.state.menuActive) {
      menu =
        <Menu isVertical>
          <MenuItem className="item">
            Example
          </MenuItem>
        </Menu>;
    }

    return (
      <MenuItem className="item" onMouseOver={ this.toggleMenu }>
        <Link to={this.props.link}>
          <Icon name={this.props.icon} />
          <span>{this.props.name}</span>
        </Link>
        {menu}
      </MenuItem>
    );
  }
}

YadaMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default YadaMenuItem;
