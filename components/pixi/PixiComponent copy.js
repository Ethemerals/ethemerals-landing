import React from 'react';
import app from './PixiApp';

class PixiComponent extends React.Component {
	app;
	gameCanvas;

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.app = app;
		this.gameCanvas.appendChild(this.app.view);
		this.app.start();
	}

	componentWillUnmount() {
		// this.app.stop();
	}

	render() {
		let component = this;

		// console.log(props);

		// console.log(component.app);
		return (
			<div
				ref={(thisDiv) => {
					component.gameCanvas = thisDiv;
				}}
			/>
		);
	}
}

export default PixiComponent;
