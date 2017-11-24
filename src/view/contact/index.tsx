import * as React from 'react';

import Guest from 'component/guest';

interface IContactProps {}
interface IContactState {}

class Contact extends React.PureComponent<IContactProps, IContactState> {
  render() {
    return (
      <Guest>
        Contact
      </Guest>
    );
  }
}

export default Contact;
