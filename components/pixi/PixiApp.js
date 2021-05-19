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

		this.app;

		this.init();
		// this.load();
	}

	init() {
		this.app = new Application({
			width: 256,
			height: 256,
			backgroundColor: 0x4890b9,
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

		this.app.loader.add('./char1.png').load(this.run);
	}

	// load() {
	// 	loader.add(['./bg_title.jpg']).load(run);
	// }

	run() {
		console.log('loaded running');

		console.log(this.app);

		// let sprite = new Sprite(this.app.loader.resources['./char1.png'].texture);
		// let sprite = Sprite.from('./char1.png');
		// sprite.width = 512;
		// sprite.height = 512;

		// this.app.stage.addChild(sprite);
		// this.app.ticker.add();
		// console.log(this.app);
		// this.app.render();
	}
}
