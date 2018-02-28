import { ConfigProps } from "redux-form";

export interface IManagerDetail<T> {
  item: T;
}

export interface IManagerDisplay<T> {
  onClick: (event: React.FormEvent<HTMLElement>) => void;
  item: T;
}

interface IManagerForm<V> {
  handleCancel: () => void;
  handleForm: () => (formValues: V) => void;
}

export type TManagerForm<V, P> = IManagerForm<V> & Partial<ConfigProps<V, P>>;
