import * as React from 'react';
import Guest from '../../component/guest';
import InfoCard from '../../component/info-card';

interface IContactOwnProps { }

interface IContactStateProps { }

interface IContactDispatchProps { }

type TContactProps = IContactOwnProps & IContactStateProps & IContactDispatchProps;

class Contact extends React.Component<TContactProps> {
  render() {
    return (
      <Guest>
  			<div className="columns">
  				<div className="row expanded">
  					<p></p>
  				</div>
  				<div className="row expanded">
  					<div className="columns large-6">
  						<div className="row">
  							<InfoCard name="Mathieu Courreault" title="Conseiller" email="m.courreault@yada.services" />
  						</div>
  						<div className="row">
  							<InfoCard name="Vincent Brazeau" title="Conseiller" email="vincent.brazeau@yada.services" />
  						</div>
  						<div className="row">
  							<InfoCard name="Vincent Roberge-Dubois" title="Développeur Web" email="vincent.robergedubois@yada.services" />
  						</div>
  					</div>
  				</div>
  			</div>
      </Guest>
    );
  }
}

export default Contact;
