export interface IEditorState {
  current: IEditor;
  list: IEditor[];
}

export interface IEditor {
    id: number;
    name: string;
}

export interface IEditorFormValues {
    name: string;
}
