import React, { Component } from 'react';
//import Luis from './Luis';
//import Enrique from './Enrique';
import { Mycontextconsumer } from './Divercion';
class Student extends Component {
	render() {
		/*let sel =
			this.props.seleccion === 'Luis' ? (
				<Luis nombre={this.props.Luis.nombre} />
			) : (
				<Enrique nombre={this.props.Enrique.nombre} />
			);*/
		return (
			<div>
				<Mycontextconsumer>
					{(value) => console.log('...', value)}
				</Mycontextconsumer>
			</div>
		);
	}
}

export default Student;
