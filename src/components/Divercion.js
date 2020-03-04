import React, { Component } from 'react';

const Mycontex = React.createContext();

export class Divercion extends Component {
	state = {
		salir: 'cine'
	};
	render() {
		const { children } = this.props;
		return (
			<Mycontex.Provider value={this.state.salir}>{children}</Mycontex.Provider>
		);
	}
}

export const Mycontextconsumer = Mycontex.Consumer;
