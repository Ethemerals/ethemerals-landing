import { useState, useEffect } from 'react';
import Head from 'next/head';

import { isMobile } from 'react-device-detect';
import NavBar from '../components/NavBar';
import LandingContent from '../components/LandingContent';

const imgEthemavator = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Fethemavator?alt=media&token=bf7c5413-970a-4705-afca-cd71a46b4ba0';
const imgElfsymbol = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Felflogo?alt=media&token=0f925aa3-0f38-4ce2-8713-0d767f82d3dd';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	let bodyClassName = '';

	if (isMobile) {
		bodyClassName = 'overflow-hidden';
	}

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={bodyClassName}>
			<Head>
				<title>Ethemerals</title>
			</Head>
			<div className="text-white bg-black">
				<NavBar toggle={toggle} isOpen={isOpen} logo={imgEthemavator} symbol={imgElfsymbol} />
				<LandingContent />
			</div>
		</div>
	);
}
