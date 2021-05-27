import Head from 'next/head';

import { isMobile } from 'react-device-detect';
import NavBar from '../components/navigation/NavBar';
import LandingContent from '../components/LandingContent';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ethemerals</title>
			</Head>
			<div className={isMobile ? 'overflow-hidden text-white bg-black font-sans' : 'text-white bg-black font-sans'}>
				<NavBar />
				<LandingContent />
			</div>
		</>
	);
}
