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
        Post Detail
      </div>
    );
  }
}

export default PostDetail;
