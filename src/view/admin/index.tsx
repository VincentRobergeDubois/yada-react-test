import * as React from "react";

import AdminSection from "container/admin-section";
import TopBar from "container/top-bar";

class Admin extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <div id="admin-container">
        <div className="content">
          <TopBar />
          <AdminSection />
        </div>
      </div>
    );
  }
}

export default Admin;
