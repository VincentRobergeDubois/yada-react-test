import * as React from "react";

import { IAuthor } from "model/author";
import { IManagerDisplay } from "model/manager";

interface IAuthorManagerDisplayOwnProps extends IManagerDisplay<IAuthor> { }

type TAuthorManagerDisplayProps = IAuthorManagerDisplayOwnProps;

class AuthorManagerDisplay extends React.PureComponent<TAuthorManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={"manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div>{this.props.item.firstname}</div>
        <div>{this.props.item.lastname}</div>
        <div>{this.props.item.description}</div>
      </div>
    );
  }
}

export default AuthorManagerDisplay;
