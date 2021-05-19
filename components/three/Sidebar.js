import { useSpring, animated } from '@react-spring/three';
// import { Plane } from '@react-three/drei';
import { useFrame, useLoader, textu } from '@react-three/fiber';
import { useRef, useState } from 'react';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

const Sidebar = (props) => {
	const [colorMap] = useLoader(THREE.TextureLoader, ['https://aws1.discourse-cdn.com/mcneel/original/3X/1/2/1246b4b2ae43a559be6a56557770efe1627fcd5b.jpg']);
	const mesh = useRef();

	return (
		<>
			<mesh position={[4, 2.5, -2]} rotation={[0, -Math.PI / 4, 0]}>
				<planeBufferGeometry attach="geometry" ref={mesh} args={[4, 9]} />
				{colorMap && <meshBasicMaterial attach="material" map={colorMap} transparent />}
			</mesh>
		</>
	);
};

export default Sidebar;
