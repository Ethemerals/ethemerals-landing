import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Html, Stats, useProgress, OrbitControls, PerspectiveCamera, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Box = dynamic(import('../three/Box'), { ssr: false });
const Floor = dynamic(import('../three/Floor'), { ssr: false });
const Character = dynamic(import('../three/Character'), { ssr: false });
const Sidebar = dynamic(import('../three/Sidebar'), { ssr: false });

function CustomLoader() {
	const { progress } = useProgress();
	return (
		<Html center>
			<span style={{ color: 'white' }}>{progress} % loaded</span>
		</Html>
	);
}

const Stage = () => {
	const myCamera = useRef();

	return (
		<Canvas>
			<React.Suspense fallback={<CustomLoader />}>
				<PerspectiveCamera fov={20} aspect={1} near={0.1} far={100} ref={myCamera} makeDefault position={[0, 0, 30]} />
				<OrbitControls
					// maxAzimuthAngle={10.15}
					// minAzimuthAngle={-10.15}
					maxAzimuthAngle={1.15}
					minAzimuthAngle={-1.15}
					maxPolarAngle={Math.PI / 1.85}
					minPolarAngle={Math.PI / 1.95}
					camera={myCamera.current}
					enablePan={false}
					enableZoom={false}
					enableRotate={true}
					target={[0, 2, 0]}
					// rotateSpeed={0.1}
				/>
				<ambientLight />
				{/* <pointLight position={[10, 10, 10]} /> */}

				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
				<Character />
				<Sidebar />
				<Floor />
				<Stats />
			</React.Suspense>
		</Canvas>
	);
};

export default Stage;
