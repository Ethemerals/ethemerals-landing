// import * as PIXI from 'pixi.js';
import { Application } from '@pixi/app';
import { AppLoaderPlugin } from '@pixi/loaders';
import { Sprite } from '@pixi/sprite';
import { Container } from '@pixi/display';
// const Application = PIXI.Application;
// const Loader = PIXI.Loader;

Application.registerPlugin(AppLoaderPlugin);

const appContainer = {};
const app = new Application({
	width: 300,
	height: 300,
	backgroundColor: 0x2980b9,
	antialias: true,
	transparent: false,
	resolution: 1,
});

app.loader.add('./char1.png');
app.loader.load(() => {
	setup();
});

//load an image and run the `setup` function when it's done
// Loader.add('./char1.png').load(setup);
// console.log(Loader);

//This `setup` function will run when the image has loaded
function setup() {
	console.log('loaded');

	let container = new Container();
	container.width = 512;
	container.height = 512;
	container.backgroundColor = 0xc22e00;
	let sprite = Sprite.from('./char1.png');
	sprite.width = 512;
	sprite.height = 512;

	app.stage.addChild(sprite);
	app.ticker.add();
	console.log(app);

	// let cat = new PIXI.Sprite(PIXI.Loader.resources['./char.png'].texture);
	// app.stage.addChild(cat);
}

export default app;
