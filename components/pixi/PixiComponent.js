import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
// import PixiApp from './PixiApp';
// import { Application } from '@pixi/app';
// import { AppLoaderPlugin } from '@pixi/loaders';
// import { Sprite } from '@pixi/sprite';
// import { Container } from '@pixi/display';

const app = new PIXI.Application({
	width: 512,
	height: 512,
	backgroundColor: 0x2998c2,
	antialias: true,
	transparent: false,
	resolution: 1,
});

function run() {
	console.log('hello');
	console.log('loaded running');

	try {
		app.renderer.plugins.interaction.autoPreventDefault = false;
		app.renderer.view.style.touchAction = 'auto';
		let sprite = new PIXI.Sprite(app.loader.resources.char1.texture);
		console.log(app.renderer.plugins.interaction);
		sprite.anchor.set(0.5);

		// Move the sprite to the center of the screen
		sprite.x = app.renderer.width / 2;
		sprite.y = app.renderer.height / 2;

		app.stage.addChild(sprite);

		// Listen for animate update
		app.ticker.add(function (delta) {
			// Rotate mr rabbit clockwise
			sprite.rotation += 0.1 * delta;
		});

		// app.render.ticker.add(delta => gameLoop(delta));
	} catch (error) {
		console.log(error);
	}
	// // this.app.render.ticker.add((delta) => gameLoop(delta));

	console.log('loaded end');
}

const PixiComponent = () => {
	const gameCanvas = useRef(null);
	const started = useRef(false);

	useEffect(() => {
		if (gameCanvas.current.childNodes.length < 1) {
			gameCanvas.current.appendChild(app.view);
			app.loader.add('char1', './char1.png').load(run);
		}
	}, []);

	return (
		<>
			<div ref={gameCanvas}></div>
		</>
	);
};

export default PixiComponent;
