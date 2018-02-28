import { ConfigProps } from "redux-form";

export interface IManagerDetail<T> {
  item: T;
}

export interface IMangerDisplay<T> {
  item: T;
}

export interface IManagerForm<T, V> extends ConfigProps<T> {
  handleForm: () => (formValues: V) => void;
}
