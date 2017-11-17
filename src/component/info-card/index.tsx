import * as React from 'react';
import { Callout, Row, Column } from 'react-foundation';

interface IInfoCardOwnProps {
	name: string,
	title: string,
	email: string
}

interface IInfoCardStateProps { }

interface IInfoCardDispatchProps { }

type TInfoCardProps = IInfoCardOwnProps & IInfoCardStateProps & IInfoCardDispatchProps;

class InfoCard extends React.Component<TInfoCardProps> {
	render() {
		return(
			<Callout className="columns">
				<Column>
					<Row>{this.props.name}</Row>
					<Row>{this.props.title}</Row>
					<Row>{this.props.email}</Row>
				</Column>
			</Callout>
		);
	}
}

export default InfoCard;
