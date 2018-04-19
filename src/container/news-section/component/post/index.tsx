import * as React from "react";

import { Grid, MediaObject, MediaObjectSection, Thumbnail } from "react-foundation";

interface IPostProps {
  side: number;
  title: string;
  content: string;
  image: string;
}

class Post extends React.Component<IPostProps, {}> {
  public render(): JSX.Element {
    return (
      <Grid className="post">
        {(this.props.side % 2) ? this.renderLeft() : this.renderRight()}
      </Grid>
    );
  }

  private renderImage = (): JSX.Element => {
    return (
      <MediaObjectSection>
        <Thumbnail src={this.props.image}/>
      </MediaObjectSection>
    );
  }

  private renderRight = (): JSX.Element => {
    return (
      <MediaObject>
        {this.props.image && this.renderImage()}
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
        {this.props.image && this.renderImage()}
      </MediaObject>
    );
  }
}

export default Post;
