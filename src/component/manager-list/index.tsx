import * as React from "react";

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
  }

  private handleUpdateButton = (): void => {
    this.setState({ ...this.state, isForm: true, isEdit: true });
  }

  private handleUpdate = () => (data: V): void => {
    this.props.update(data, this.state.selectedItem[this.props.identifier]);
  }

  private handleDeleteButton = (): void => {
    this.props.delete(this.state.selectedItem[this.props.identifier]);
  }

  private handleSelect = (item: T) => (): void => {
    this.setState({ ...this.state, selectedItem: item });
  }

  private handleCancel = () => {
    this.setState({ ...this.state, isForm: false, isEdit: false });
  }

  private renderList = (): JSX.Element => {
    const itemList: JSX.Element[] = this.props.itemList.map((item: T): JSX.Element => {
      return (
        <this.props.display
          key={item[this.props.identifier]}
          item={item}
          isSelected={this.state.selectedItem === item}
          onClick={this.handleSelect(item)}
        />
      );
    });
    return (
      <div className="list">
        <div className="header">
          <h1>{this.props.title}</h1>
          <div className="header-buttons">
            <button className="create-button" onClick={this.handleCreateButton}>Create</button>
            <button className="update-button" onClick={this.handleUpdateButton}>Update</button>
            <button className="delete-button" onClick={this.handleDeleteButton}>Delete</button>
          </div>
        </div>
        {itemList}
      </div>
    );
  }

  private renderForm = (): JSX.Element => {
    if (this.state.isEdit) {
      return (
        <this.props.form
          form={this.props.formName}
          handleCancel={this.handleCancel}
          handleForm={this.handleCreate}
          initialValues={this.state.selectedItem}
        />
      );
    }
    return (
      <this.props.form
        form={this.props.formName}
        handleCancel={this.handleCancel}
        handleForm={this.handleUpdate}
      />
    );
  }
}

export default ManagerList;
