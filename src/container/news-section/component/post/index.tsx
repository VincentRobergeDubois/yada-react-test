import * as React from "react";

import { MediaObject, MediaObjectSection, Row, Thumbnail } from "react-foundation";

interface IPostProps {
  side: number;
  title: string;
  content: string;
  image: string;
}

class Post extends React.Component<IPostProps, {}> {
  public render(): JSX.Element {
    return (
      <Row className="post" isExpanded={true}>
        {(this.props.side % 2) ? this.renderLeft() : this.renderRight()}
      </Row>
    );
  }

  private renderRight = (): JSX.Element => {
    return (
      <MediaObject>
        <MediaObjectSection>
          <Thumbnail src={this.props.image}/>
        </MediaObjectSection>
        <MediaObjectSection isMain={true}>
          <h4>{this.props.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </MediaObjectSection>
      </MediaObject>
    );
  }

  private renderLeft = (): JSX.Element => {
    return (
      <MediaObject className="right-post">
        <MediaObjectSection isMain={true}>
          <h4>{this.props.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </MediaObjectSection>
        <MediaObjectSection>
          <Thumbnail src={this.props.image}/>
        </MediaObjectSection>
      </MediaObject>
    );
  }
}

export default Post;
