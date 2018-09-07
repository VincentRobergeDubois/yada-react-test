import { createSelector } from "reselect";

import { IEditor, IEditorState } from "model/editor";
import { IState } from "model/state";

export const getEditor = ({ editor }: IState): IEditorState => editor;

export const getCurrentEditor = createSelector(
    getEditor, ({ current }: IEditorState): IEditor => current,
);

export const getEditorList = createSelector(
    getEditor, ({ list }: IEditorState): IEditor[] => list,
);
