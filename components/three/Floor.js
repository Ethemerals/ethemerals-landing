import { useSpring, animated } from '@react-spring/three';
// import { Plane } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Floor = (props) => {
	const [colorMap] = useLoader(TextureLoader, ['https://aws1.discourse-cdn.com/mcneel/original/3X/1/2/1246b4b2ae43a559be6a56557770efe1627fcd5b.jpg']);
	const mesh = useRef();

	return (
		<>
			<mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeBufferGeometry attach="geometry" ref={mesh} args={[20, 20]} />
				<meshStandardMaterial map={colorMap} />
			</mesh>
		</>
	);
};

export default Floor;
