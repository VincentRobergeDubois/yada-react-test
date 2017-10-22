import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Icon } from 'react-foundation';

class YadaMenuItem extends React.Component {
  render () {
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

YadaMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default YadaMenuItem;
