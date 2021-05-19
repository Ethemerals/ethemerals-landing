import { useSpring, animated } from '@react-spring/three';
// import { Plane } from '@react-three/drei';
import { useFrame, useLoader, textu } from '@react-three/fiber';
import { useRef, useState } from 'react';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

const Character = (props) => {
	const [colorMap] = useLoader(THREE.TextureLoader, ['/three/char1.png']);
	const mesh = useRef();

	return (
		<>
			<mesh position={[0, 2.5, 0]} rotation={[0, 0, 0]}>
				<planeBufferGeometry attach="geometry" ref={mesh} args={[9, 9]} />
				{colorMap && <meshBasicMaterial attach="material" map={colorMap} transparent />}
			</mesh>
		</>
	);
};

export default Character;
