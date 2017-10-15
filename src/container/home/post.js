import * as React from 'react';
import * as PropTypes from 'prop-types';
import { MediaObject, MediaObjectSection, Thumbnail, Row } from 'react-foundation';

class Post extends React.Component {
  renderRight() {
    return (
      <MediaObject>
        <MediaObjectSection>
          <Thumbnail src={this.props.image}/>
        </MediaObjectSection>
        <MediaObjectSection isMain>
          <h4>{this.props.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </MediaObjectSection>
      </MediaObject>
    );
  }

  renderLeft() {
    return (
      <MediaObject className="right-post">
        <MediaObjectSection isMain>
          <h4>{this.props.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </MediaObjectSection>
        <MediaObjectSection>
          <Thumbnail src={this.props.image}/>
        </MediaObjectSection>
      </MediaObject>
    );
  }

  render() {
    return (
      <Row className="post" isExpanded>
        {(this.props.side % 2) ? this.renderLeft() : this.renderRight()}
      </Row>
    );
  }
}

Post.propTypes = {
  side: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Post;
