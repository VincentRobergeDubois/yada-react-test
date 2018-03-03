import * as React from "react";

import { IManagerDisplay } from "model/manager";
import { IPost } from "model/post";

interface IPostManagerDisplayOwnProps extends IManagerDisplay<IPost> { }

type TPostManagerDisplayProps = IPostManagerDisplayOwnProps;

class PostManagerDisplay extends React.PureComponent<TPostManagerDisplayProps> {
  public render(): JSX.Element {
    return (
      <div className={"manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div className="default-display">
          <div>{this.props.item.title}</div>
        </div>
        {this.props.isSelected && this.renderDetail()}
      </div>
    );
  }

  private renderDetail = (): JSX.Element => {
    return (
      <div className="detail-display">
        <div>{this.props.item.image}</div>
        <div>{this.props.item.content}</div>
      </div>
    );
  }
}

export default PostManagerDisplay;
