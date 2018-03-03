import { ConfigProps } from "redux-form";

export interface IManagerDisplay<T> {
  item: T;
  isSelected: boolean;
  onClick: (event: React.FormEvent<HTMLElement>) => void;
}

export interface IManagerForm<V> {
  handleCancel: () => void;
  handleForm: () => (formValues: V) => void;
}

export type TManagerForm<V, P = {}> = IManagerForm<V> & ConfigProps<V, P>;
