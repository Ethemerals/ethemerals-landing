import { useReducer, useRef, useState, useEffect } from 'react';
import { Stage, Sprite, Container, useTick } from '@inlet/react-pixi';
// import Rectangle from './Rectangle';

const reducer = (_, { data }) => data;

const Bunny = () => {
	const [motion, update] = useReducer(reducer);
	const iter = useRef(0);
	useTick((delta) => {
		const i = (iter.current += 0.05 * delta);
		update({
			type: 'update',
			data: {
				x: Math.sin(i) * 100,
				y: Math.sin(i / 1.5) * 100,
				rotation: Math.sin(i) * Math.PI,
				anchor: Math.sin(i / 2),
			},
		});
	});
	return <Sprite image="./icon_heart.png" {...motion} />;
};

const maxWidth = 800;

const CharStage = ({ windowWidth }) => {
	const [stageWidth, setStageWidth] = useState(maxWidth);
	const [scaleWidth, setScaleWidth] = useState(maxWidth);
	console.log(windowWidth);
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
		<Stage width={stageWidth} height={stageWidth} options={{ backgroundColor: 0xeef1f5 }}>
			{/* <Rectangle x={100} y={100} width={500} heigth={300} fill={0xff0000} /> */}
			<Container position={[0, 0]} scale={(scaleWidth, scaleWidth)}>
				<Sprite image="./char1.png" />

				<Bunny />
			</Container>
		</Stage>
	);
};

export default CharStage;
