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

let containerChar;
let containerSidebar;
let containerBadge;

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
			app.loader.add('char1', './pixi/compound.png').add('sidebar', 'https://aws1.discourse-cdn.com/mcneel/original/3X/1/2/1246b4b2ae43a559be6a56557770efe1627fcd5b.jpg').load(run);
		}

		resize(stageWidth, scaleWidth);
	}, [scaleWidth]);

	// PIXI DO IT
	function run() {
		console.log('hello');
		console.log('loaded running');

		try {
			app.renderer.plugins.interaction.autoPreventDefault = false;
			app.renderer.view.style.touchAction = 'auto';

			// CONTAINERS
			containerSidebar = new PIXI.Container();
			containerSidebar.x = 640;
			app.stage.addChild(containerSidebar);

			containerBadge = new PIXI.Container();
			app.stage.addChild(containerBadge);

			containerChar = new PIXI.Container();
			app.stage.addChild(containerChar);

			// GRAPHICS
			const graphicsSidebar = new PIXI.Graphics();
			graphicsSidebar.beginFill(0xde3249);
			graphicsSidebar.drawRect(0, 0, 160, 800);
			graphicsSidebar.endFill();
			containerSidebar.addChild(graphicsSidebar);

			const graphicsBadge = new PIXI.Graphics();
			graphicsBadge.beginFill(0xc59900);
			graphicsBadge.drawRect(0, 0, 160, 400);
			graphicsBadge.endFill();
			containerBadge.addChild(graphicsBadge);

			const dragButton = new PIXI.Graphics();
			dragButton.beginFill(0x000000, 0.1);
			dragButton.drawRect(0, 400, 800, 600);
			dragButton.endFill();
			dragButton.interactive = true;
			dragButton.buttonMode = true;
			dragButton.on('pointerdown', onDragStart).on('pointerup', onDragEnd).on('pointerupoutside', onDragEnd).on('pointermove', onDragMove);

			app.stage.addChild(dragButton);

			const char1 = new PIXI.Sprite(app.loader.resources.char1.texture);
			containerChar.addChild(char1);
			// char1.on('pointerdown', onDragStart).on('pointerup', onDragEnd).on('pointerupoutside', onDragEnd).on('pointermove', onDragMove);

			// Move the sprite to the center of the screen
			// char1.x = stageWidth / 2;
			// char1.y = stageWidth / 2;
			// char1.scale.set(0.8);
			// char1.skew.set(0.25, 0);

			// Listen for animate update
			app.ticker.add(function (delta) {
				// Rotate mr rabbit clockwise
				// sprite.rotation += 0.01 * delta;
			});
		} catch (error) {
			console.log(error);
		}

		console.log('loaded end');
	}

	function onDragStart(event) {
		// store a reference to the data
		// the reason for this is because of multitouch
		// we want to track the movement of this particular touch
		console.log('dragStart');
		this.data = event.data;
		// this.alpha = 0.5;
		this.dragging = true;
	}

	function onDragEnd() {
		console.log('dragEnd');
		// this.alpha = 1;
		this.dragging = false;
		// // set the interaction data to null
		this.data = null;
	}

	function onDragMove() {
		if (this.dragging) {
			// console.log('dragMove');
			const Ox = this.data.originalEvent.movementX;
			const Oy = this.data.originalEvent.movementY;
			containerSidebar.x = containerSidebar.x + Ox * -1;
			containerSidebar.y = containerSidebar.y + Oy * -1;
			containerBadge.x = containerBadge.x + Ox;
			containerBadge.y = containerBadge.y + Oy;
			containerChar.x = containerChar.x + Ox * 0.5;
			containerChar.y = containerChar.y + Oy * 0.5;
			// console.log(this.data.originalEvent);
			// console.log(this.data.originalEvent.movementX, this.data.originalEvent.movementY);

			// const newPosition = this.data.getLocalPosition(this.parent);
			// this.x = newPosition.x;
			// this.y = newPosition.y;
		}
	}

	return (
		<>
			<div ref={gameCanvas}></div>
		</>
	);
};

export default PixiComponent;
