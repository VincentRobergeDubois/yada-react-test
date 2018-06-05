import * as React from "react";

import { IBook } from "model/book";
import { IManagerDisplay } from "model/manager";

interface IBookManagerDisplayOwnProps extends IManagerDisplay<IBook> { }

type TBookManagerDisplayProps = IBookManagerDisplayOwnProps;

class BookManagerDisplay extends React.PureComponent<TBookManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={"manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div>{this.props.item.title}</div>
        <div>{this.props.item.description}</div>
      </div>
    );
  }
}

export default BookManagerDisplay;
