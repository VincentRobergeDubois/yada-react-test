import * as React from 'react';

import Guest from 'component/guest';

class Contact extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Guest>
        Contact
      </Guest>
    );
  }
}

export default Contact;
