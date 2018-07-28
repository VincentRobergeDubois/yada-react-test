import * as React from "react";

import { IEditor } from "model/editor";
import { IManagerDisplay } from "model/manager";

interface IEditorManagerDisplayOwnProps extends IManagerDisplay<IEditor> { }

type TEditorManagerDisplayProps = IEditorManagerDisplayOwnProps;

class EditorManagerDisplay extends React.PureComponent<TEditorManagerDisplayProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={"manager-display" + (this.props.isSelected ? " selected" : "")} onClick={this.props.onClick}>
        <div>{this.props.item.name}</div>
      </div>
    );
  }
}

export default EditorManagerDisplay;
