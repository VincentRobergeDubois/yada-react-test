import * as React from 'react';
import Manager from '../../component/manager';

interface IToolsOwnProps {}
interface IToolsStateProps {}
interface IToolsDispatchProps {}

type TToolsProps = IToolsOwnProps & IToolsStateProps & IToolsDispatchProps;

class Tools extends React.Component<TToolsProps, {}> {
  render() {
    return (
      <Manager>
        <div>Page des outils en construction</div>
      </Manager>
    );
  }
}

export default Tools;
