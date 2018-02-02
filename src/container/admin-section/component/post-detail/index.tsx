import * as React from "react";

import { IPost } from "model/post";

interface IPostDetailOwnProps {
  postList: IPost[];
}

type TPostDetailProps = IPostDetailOwnProps;

class PostDetail extends React.PureComponent<TPostDetailProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        {this.renderHeader()}
        {this.renderList()}
      </div>
    );
  }

  private renderHeader = (): JSX.Element => (
    <div>
      <h1>Liste des articles</h1>
      <button>Ajouter</button>
      <button>Modifier</button>
      <button>Supprimer</button>
    </div>
  )

  private renderList = (): JSX.Element[] => {
    return this.props.postList.map((post: IPost, key: number) => (
      <div key={key}>
        <div>{post.id}</div>
        <div>{post.title}</div>
        <div>{post.content}</div>
      </div>
    ));
  }
}

export default PostDetail;
