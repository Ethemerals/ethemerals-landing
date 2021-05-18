import React, { useEffect, useState } from 'react';
// import app from './PixiApp';
import { Application } from '@pixi/app';
// import { AppLoaderPlugin } from '@pixi/loaders';
// import { Sprite } from '@pixi/sprite';
// import { Container } from '@pixi/display';

class PixiComponent extends React.Component {
	gameCanvas;

	constructor() {
		super();
		this.state = { windowWidth: 800 };
	}

	componentDidMount() {
		const app = new Application({
			width: this.state.windowWidth,
			height: this.state.windowWidth,
			backgroundColor: 0x2980b9,
			antialias: true,
			transparent: false,
			resolution: 1,
		});

		this.getSize();

		this.gameCanvas.appendChild(this.app.view);
		this.app.render();
	}

	handleResize() {
		this.setState({ windowWidth: window.innerWidth });

		console.log(window.innerWidth);
	}

	getSize() {
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			window.addEventListener('resize', this.handleResize());
			this.handleResize();
		}
	}

	render() {
		return (
			<>
				<div ref={(node) => (this.gameCanvas = node)}></div>
			</>
		);
	}
}

export default PixiComponent;
