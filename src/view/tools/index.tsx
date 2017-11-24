import * as React from 'react';

import Manager from 'component/manager';

interface IToolsProps {}
interface IToolsState {}

class Tools extends React.PureComponent<IToolsProps, IToolsState> {
  render() {
    return (
      <Manager>
        Tools
      </Manager>
    );
  }
}

export default Tools;
