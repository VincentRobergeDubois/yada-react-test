import * as React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createEditor, deleteEditor, updateEditor } from "action/editor-action";
import ManagerList from "component/manager-list";
import { TDispatch } from "model/action";
import { IEditor } from "model/editor";
import { IState } from "model/state";
import { getEditorList } from "selector/editor";

import EditorManagerDisplay from "./component/editor-manager-display";
import EditorManagerForm from "./component/editor-manager-form";
import { EDITOR_FORM_NAME } from "./constant";

interface IEditorManagerStateProps {
    editorList: IEditor[];
}

interface IEditorManagerDispatchProps {
    createEditor: typeof createEditor;
    deleteEditor: typeof deleteEditor;
    updateEditor: typeof updateEditor;
}

type TEditorManagerProps = IEditorManagerStateProps & IEditorManagerDispatchProps;

class EditorManager extends React.PureComponent<TEditorManagerProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="editor-manager">
                <ManagerList
                    create={this.props.createEditor}
                    delete={this.props.deleteEditor}
                    display={EditorManagerDisplay}
                    form={EditorManagerForm}
                    formName={EDITOR_FORM_NAME}
                    identifier="id"
                    itemList={this.props.editorList}
                    title="Liste des Auteurs"
                    update={this.props.updateEditor}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: IState): IEditorManagerStateProps => ({
    editorList: getEditorList(state),
});

const mapDispatchToProps = (dispatch: TDispatch<IEditor[]>): IEditorManagerDispatchProps => ({
    createEditor: bindActionCreators(createEditor, dispatch),
    deleteEditor: bindActionCreators(deleteEditor, dispatch),
    updateEditor: bindActionCreators(updateEditor, dispatch),
});

export default connect<IEditorManagerStateProps, IEditorManagerDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(EditorManager);
