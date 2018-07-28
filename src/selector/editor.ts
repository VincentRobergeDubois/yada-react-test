import { createSelector } from "reselect";

import { IEditor, IEditorState } from "model/editor";
import { IState } from "model/state";

export const getEditor = (state: IState): IEditorState => state.editor;

export const getCurrentEditor = createSelector(
    getEditor, ({ current }: IEditorState): IEditor => current,
);

export const getEditorList = createSelector(
    getEditor, ({ list }: IEditorState): IEditor[] => list,
);
