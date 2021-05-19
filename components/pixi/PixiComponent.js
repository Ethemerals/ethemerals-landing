import React, { useEffect, useState, useRef } from 'react';
import PixiApp from './PixiApp';
import { Application } from '@pixi/app';
// import { AppLoaderPlugin } from '@pixi/loaders';
// import { Sprite } from '@pixi/sprite';
// import { Container } from '@pixi/display';

const PixiComponent = () => {
	const gameCanvas = useRef(null);
	const started = useRef(false);

	useEffect(() => {
		const app = new PixiApp();

		// console.log(app);
		// gameCanvas.current.remove();

		if (gameCanvas.current.childNodes.length < 1) {
			gameCanvas.current.appendChild(app.app.view);
		}
	}, []);

	return (
		<>
			<div ref={gameCanvas}></div>
		</>
	);
};

export default PixiComponent;
