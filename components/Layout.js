import Head from 'next/head';

import { isMobile } from 'react-device-detect';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/sections/Footer';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Ethemerals</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#603cba" />
				<meta name="theme-color" content="#1a2732" />
			</Head>
			<div className={isMobile ? 'overflow-hidden text-white bg-black font-sans' : 'text-white bg-black font-sans'}>
				<NavBar />
				{children}
				<Footer />
			</div>
		</>
	);
}
