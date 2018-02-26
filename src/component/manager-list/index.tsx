import * as React from "react";

import { IManagerDetail, IManagerDisplay, IManagerForm, TManagerFormValues, TManagerItem } from "./model";

interface IManagerListOwnProps {
  create: (formValues: TManagerFormValues) => void;
  delete: (id: number) => void;
  detail: React.ComponentType<IManagerDetail<TManagerItem>>;
  display: React.ComponentType<IManagerDisplay<TManagerItem>>;
  form: React.ComponentType<IManagerForm<TManagerItem, TManagerFormValues>>;
  itemList: TManagerItem[];
  title: string;
  update: (formValues: TManagerFormValues, id: number) => void;
}

type TManagerListProps = IManagerListOwnProps;

interface IManagerListState {
  isEdit: boolean;
  isForm: boolean;
  selectedItem: TManagerItem;
}

class ManagerList extends React.PureComponent<TManagerListProps, IManagerListState> {
  constructor(props: TManagerListProps) {
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

  private handleCreate = () => (formValues: TManagerFormValues): void => {
    this.props.create(formValues);
  }

  private handleUpdateButton = (): void => {
    this.setState({ ...this.state, isForm: true, isEdit: true });
  }

  private handleUpdate = () => (formValues: TManagerFormValues): void => {
    this.props.update(formValues, this.state.selectedItem.id);
  }

  private handleDeleteButton = (): void => {
    this.props.delete(this.state.selectedItem.id);
  }

  private handleSelect = (item: TManagerItem) => (): void => {
    this.setState({ ...this.state, selectedItem: item });
  }

  private renderList = (): JSX.Element => {
    const itemList: JSX.Element[] = this.props.itemList.map((item: TManagerItem): JSX.Element => {
      return (
        <this.props.display key={item.id} item={item} onClick={this.handleSelect(item)} />
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
      return <this.props.form handleForm={this.handleCreate} initialValues={this.state.selectedItem} />;
    }
    return <this.props.form handleForm={this.handleUpdate} />;
  }
}

export default ManagerList;
