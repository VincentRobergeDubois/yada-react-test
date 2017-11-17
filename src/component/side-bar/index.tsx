import * as React from 'react';
import { Column } from 'react-foundation';

interface ISideBarOwnProps { }

interface ISideBarStateProps { }

interface ISideBarDispatchProps { }

type TSideBarProps = ISideBarOwnProps & ISideBarStateProps & ISideBarDispatchProps;

class SideBar extends React.Component<TSideBarProps> {
  render() {
    return (
      <Column id="sidebar" large={4}>
        <img src="../../../images/sideBarImage.jpg" alt="SideBarImage" />
      </Column>
    );
  }
}

export default SideBar;
