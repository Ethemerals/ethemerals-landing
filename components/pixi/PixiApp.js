// import * as PIXI from 'pixi.js';
import { Application } from '@pixi/app';
import { AppLoaderPlugin } from '@pixi/loaders';
import { Sprite } from '@pixi/sprite';
import { Container } from '@pixi/display';
// const Application = PIXI.Application;
// const Loader = PIXI.Loader;

Application.registerPlugin(AppLoaderPlugin);

export default class PixiApp {
	constructor() {
		// objects

		this.render;

		this.init();
		// this.load();
	}

	init() {
		this.render = new Application({
			width: 512,
			height: 512,
			backgroundColor: 0x2998c2,
			antialias: true,
			transparent: false,
			resolution: 1,
		});

		// this.app.renderer.autoResize = true;

		// PIXI CONTAINERS
		// this.containerBG = new Container();
		// this.containerBG.x = this.width / 2;
		// this.containerBG.y = this.height / 2;
		// this.containerBG.pivot.x = this.containerBG.width / 2;
		// this.containerBG.pivot.y = this.containerBG.height / 2;
		// this.render.stage.addChild(this.containerBG);
		// this.containerCam = new Container();
		// this.render.stage.addChild(this.containerCam);
		// this.containerUI = new Container();
		// this.render.stage.addChild(this.containerUI);

		// this.app.loader.add('./char1.png').load(this.run);
	}

	// load() {
	// 	loader.add(['./bg_title.jpg']).load(run);
	// }

	run() {
		console.log('loaded running');

		try {
			let sprite = new Sprite(this.app.loader.resources['./char1.png'].texture);
			// let sprite = Sprite.from('./char1.png');
			sprite.width = 512;
			sprite.height = 512;

			this.app.stage.addChild(sprite);
		} catch (error) {
			console.log(error);
		}
		// this.app.render.ticker.add((delta) => gameLoop(delta));

		console.log('loaded end');
		// this.app.ticker.add();
		// console.log(this.app);
		// this.app.render();
	}
}
