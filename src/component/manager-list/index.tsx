import * as React from "react";

import { IManagerDetail, IManagerDisplay, IManagerForm, TManagerItem } from "./model";

interface IManagerListOwnProps {
  detail: React.ComponentType<IManagerDetail<TManagerItem>>;
  display: React.ComponentType<IManagerDisplay<TManagerItem>>;
  form: React.ComponentType<IManagerForm<TManagerItem>>;
  itemList: TManagerItem[];
  title: string;
  delete: (id: number) => void;
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
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }

  private handleCreate = (): void => {
    this.setState({ ...this.state, isForm: true, isEdit: false });
  }

  private handleUpdate = (): void => {
    this.setState({ ...this.state, isForm: true, isEdit: true });
  }

  private handleDelete = (): void => {
    this.props.delete(this.state.selectedItem.id);
  }

  private handleSelect = (item: TManagerItem) => (): void => {
    this.setState({ ...this.state, selectedItem: item });
  }

  private renderHeader = (): JSX.Element => {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <div className="header-buttons">
          <button className="create-button" onClick={this.handleCreate}>Create</button>
          <button className="update-button" onClick={this.handleUpdate}>Update</button>
          <button className="delete-button" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }

  private renderCreateForm = (): JSX.Element => {
    return (
      <this.props.form />
    );
  }

  private renderUpdateForm = (): JSX.Element => {
    return (
      <this.props.form initialValues={this.state.selectedItem} />
    );
  }

  private renderBody = (): JSX.Element | JSX.Element[] => {
    if (this.state.isForm) {
      return this.state.isEdit ? this.renderUpdateForm() : this.renderCreateForm();
    }
    return this.props.itemList.map((item: TManagerItem): JSX.Element => {
      return (
        <this.props.display key={item.id} item={item} onClick={this.handleSelect(item)} />
      );
    });
  }
}

export default ManagerList;
