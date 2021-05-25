import { useState, useEffect } from 'react';
import Head from 'next/head';

import { isMobile } from 'react-device-detect';
import NavBar from '../components/navigation/NavBar';
import LandingContent from '../components/LandingContent';

export default function Home() {
	console.log('isMobile', isMobile);
	return (
		<>
			<Head>
				<title>Ethemerals</title>
			</Head>
			<div className={isMobile ? 'overflow-hidden text-white bg-black' : 'text-white bg-black'}>
				<NavBar />
				<LandingContent />
			</div>
		</>
	);
}
