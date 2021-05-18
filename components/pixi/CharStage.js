import React, { useState, useEffect } from 'react';
import { Stage, Container, Sprite, useTick, render } from '@inlet/react-pixi';
import {} from 'pixi.js';

const RotatingBunny = () => {
	const [rotation, setRotation] = useState(0);
	useTick((delta) => delta && setRotation(rotation + 0.05 * delta));
	return <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" anchor={0.5} scale={2} rotation={rotation} />;
};

const CharStage = () => {
	const [windowWidth, setWindowWidth] = useState(800);
	const [stageWidth, setStageWidth] = useState(windowWidth);
	const [scaleWidth, setScaleWidth] = useState(maxWidth);
	console.log(render);

	// CONSTANTS
	const maxWidth = 800;

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
		} else if (windowWidth < 200) {
			setStageWidth(200);
		} else {
			setStageWidth(windowWidth);
		}
	}, [windowWidth]);

	useEffect(() => {
		setScaleWidth(stageWidth / maxWidth);
	}, [stageWidth]);

	return (
		<Stage width={windowWidth} height={windowWidth} options={{ backgroundColor: 0xc22e00, antialias: true }}>
			<Container position={[windowWidth / 2, windowWidth / 2]}>
				<RotatingBunny />
			</Container>
		</Stage>
	);
};

export default CharStage;
