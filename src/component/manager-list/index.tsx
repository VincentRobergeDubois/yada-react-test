import * as React from "react";

import YadaButton from "component/yada-button";
import { IManagerDisplay, TManagerForm } from "model/manager";

interface IManagerListOwnProps<T, V, P> {
  create: (data: V) => void;
  delete: (id: number) => void;
  display: React.ComponentType<IManagerDisplay<T>>;
  form: React.ComponentType<TManagerForm<V, P>>;
  formName: string;
  identifier: string;
  itemList: T[];
  title: string;
  update: (data: V, id: number) => void;
}

type TManagerListProps<T, V, P> = IManagerListOwnProps<T, V, P>;

interface IManagerListState<T> {
  isEdit: boolean;
  isForm: boolean;
  selectedItem: T;
}

class ManagerList<T, V, P> extends React.PureComponent<TManagerListProps<T, V, P>, IManagerListState<T>> {
  constructor(props: TManagerListProps<T, V, P>) {
    super(props);
    this.state = {
      isEdit: false,
      isForm: false,
      selectedItem: this.props.itemList[0],
    };
  }

  public render(): JSX.Element {
    return (
      <div className="manager-list">
        {this.state.isForm ? this.renderForm() : this.renderList()}
      </div>
    );
  }

  private handleCreateButton = (): void => {
    this.setState({ ...this.state, isForm: true, isEdit: false });
  }

  private handleCreate = () => (data: V): void => {
    this.props.create(data);
    this.setState({ ...this.state, isForm: false, isEdit: false });
  }

  private handleUpdateButton = (): void => {
    if (this.state.selectedItem !== undefined) {
      this.setState({ ...this.state, isForm: true, isEdit: true });
    }
  }

  private handleUpdate = () => (data: V): void => {
    this.props.update(data, this.state.selectedItem[this.props.identifier]);
    this.setState({ ...this.state, isForm: false, isEdit: false });
  }

  private handleDeleteButton = (): void => {
    if (this.state.selectedItem !== undefined) {
      this.props.delete(this.state.selectedItem[this.props.identifier]);
    }
  }

  private handleSelect = (item: T) => (): void => {
    this.setState({ ...this.state, selectedItem: item });
  }

  private handleCancel = () => {
    this.setState({ ...this.state, isForm: false, isEdit: false });
  }

  private renderItemList = (): JSX.Element[] => (
    this.props.itemList.map((item: T): JSX.Element => (
      <this.props.display
        key={item[this.props.identifier]}
        item={item}
        isSelected={this.state.selectedItem === item}
        onClick={this.handleSelect(item)}
      />
    ))
  )

  private renderList = (): JSX.Element => (
    <div className="list">
      <div className="header">
        <h1>{this.props.title}</h1>
        <div className="header-buttons">
          <YadaButton label="Ajouter" onClick={this.handleCreateButton} type="button" />
          <YadaButton label="Modifier" onClick={this.handleUpdateButton} type="button" />
          <YadaButton label="Supprimer" onClick={this.handleDeleteButton} type="button" />
        </div>
      </div>
      {this.renderItemList()}
    </div>
  )

  private renderForm = (): JSX.Element => (
    <this.props.form
      form={this.props.formName}
      handleCancel={this.handleCancel}
      handleForm={this.state.isEdit ? this.handleUpdate : this.handleCreate}
      initialValues={this.state.isEdit ? this.state.selectedItem : undefined}
    />
  )
}

export default ManagerList;
