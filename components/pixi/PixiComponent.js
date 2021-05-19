import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';

// import PixiApp from './PixiApp';
// import { Application } from '@pixi/app';
// import { AppLoaderPlugin } from '@pixi/loaders';
// import { Sprite } from '@pixi/sprite';
// import { Container } from '@pixi/display';

const app = new PIXI.Application({
	autoResize: true,
	backgroundColor: 0x2998c2,
	antialias: true,
	backgroundAlpha: true,
	resolution: 1,
});

function resize(width, scale) {
	app.stage.scale.set(scale);
	app.renderer.resize(width, width);
}

const PixiComponent = () => {
	const gameCanvas = useRef(null);

	const maxWidth = 800;
	const [windowWidth, setWindowWidth] = useState(800);
	const [stageWidth, setStageWidth] = useState(windowWidth);
	const [scaleWidth, setScaleWidth] = useState(1);

	const handleResize = (e) => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			window.addEventListener('resize', handleResize);
			handleResize();
		}
	}, []);

	useEffect(() => {
		if (windowWidth > 800) {
			setStageWidth(800);
		} else if (windowWidth < 256) {
			setStageWidth(256);
		} else {
			setStageWidth(windowWidth);
		}
	}, [windowWidth]);

	useEffect(() => {
		setScaleWidth(stageWidth / maxWidth);
	}, [stageWidth]);

	useEffect(() => {
		if (gameCanvas.current.childNodes.length < 1) {
			gameCanvas.current.appendChild(app.view);
			resize(stageWidth, scaleWidth);
			app.loader.add('char1', './pixi/char1.png').load(run);
		}

		resize(stageWidth, scaleWidth);
	}, [scaleWidth]);

	function run() {
		console.log('hello');
		console.log('loaded running');

		try {
			app.renderer.plugins.interaction.autoPreventDefault = false;
			app.renderer.view.style.touchAction = 'auto';
			let sprite = new PIXI.Sprite(app.loader.resources.char1.texture);

			sprite.anchor.set(0.5);

			// Move the sprite to the center of the screen
			sprite.x = stageWidth / 2;
			sprite.y = stageWidth / 2;

			app.stage.addChild(sprite);

			// Listen for animate update
			app.ticker.add(function (delta) {
				// Rotate mr rabbit clockwise
				sprite.rotation += 0.01 * delta;
			});
		} catch (error) {
			console.log(error);
		}

		console.log('loaded end');
	}

	return (
		<>
			<div ref={gameCanvas}></div>
		</>
	);
};

export default PixiComponent;
