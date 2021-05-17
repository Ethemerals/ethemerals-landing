import { useEffect, useState } from 'react';
// import Carousel from '../Carousel';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import Links from '../../constants/Links';

const CharStage = dynamic(import('../pixi/CharStage'), { ssr: false });

const Ethemerals = () => {
	const [windowWidth, setWindowWidth] = useState(400);

	const handleResize = (e) => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			window.addEventListener('resize', handleResize);
			setWindowWidth(window.innerWidth);
		}

		return () => {
			if (typeof window !== 'undefined' && typeof document !== 'undefined') {
				window.addEventListener('resize', handleResize);
			}
		};
	}, []);

	const descriptionListItem = (props) => (
		<div className="p-4">
			<h3 className="text-xl font-semibold">
				<span className="flex items-center">
					<svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.76953 7.8079L7.31215 5.76008C6.79109 5.32586 6 5.69639 6 6.37466V9.62526C6 10.3035 6.79109 10.6741 7.31215 10.2398L9.76953 8.19201C9.88947 8.09207 9.88947 7.90785 9.76953 7.8079Z"
							fill="white"
						/>
					</svg>
					{props.title}
				</span>
			</h3>
			<p className="text-white leading-loose">{props.body}</p>
		</div>
	);

	const liItem1 = {
		title: 'Crypto Sweat and Tears',
		body: <span>When a cryptocurrency hits the top 100 market cap rankings they are rebirthed as an Ethemeral</span>,
	};

	const liItem2 = {
		title: 'Enter the Battlefield',
		body: <span>For glory and Honor! Own an Ethemeral to unlock the suite of on chain games</span>,
	};

	const liItem3 = {
		title: 'Playable Characters',
		body: <span>All Ethemerals are born equal, but with skill and perseverance can gain ranks and earn rewards</span>,
	};

	const liItem4 = {
		title: 'Dynamic Stats',
		body: <span>Each Ethemerals stats are modified by their real world cryptocurrency price action</span>,
	};

	const liItem5 = {
		title: 'Blood on the Streets',
		body: <span>Ethemerals are ruthless, Proceed with caution or be reaped by other Ethemerals</span>,
	};

	const liItem6 = {
		title: 'Set Bonus and Rewards',
		body: <span>Collectors holding certain Ethemerals receive gameplay bonuses and the ability to mint one of a kind art NFTs. 100s of combinations to be discovered</span>,
	};

	return (
		// bake in
		<section className="ethemeralsBg bg-opacity-80 pb-20">
			<a id="ethemerals">
				<h2 className="text-center text-4xl md:text-7xl pt-16 md:pt-20">Meet the Ethemerals</h2>
			</a>
			<div className="text-center my-5">
				<p className="lg:w-3/4 md:w-full m-auto xs:px-4 sm:px-4 pb-3 leading-loose text-white xs:text-base md:text-2xl sm:font-normal">
					Ethemerals are beautifully handcrafted limited edition collectibles. Each Ethemeral is backed by a unique NFT minted on the Ethereum Blockchain. Owning one gives you exclusive access to the
					Kingdom of The Ethemerals Universe.
				</p>
			</div>
			<div className="overflow-hidden m-auto justify-center flex">
				<CharStage windowWidth={windowWidth} />
			</div>
			<div className="justify-center grid md:grid-cols-2 max-w-5xl mx-auto">
				{descriptionListItem(liItem1)}
				{descriptionListItem(liItem2)}
				{descriptionListItem(liItem3)}
				{descriptionListItem(liItem4)}
				{descriptionListItem(liItem5)}
				{descriptionListItem(liItem6)}
			</div>
			<div className="flex justify-center py-10 md:py-14">
				<a href={Links.ETHEMERALS} className="uppercase py-4 px-6 text-sm md:text-lg rounded bg-indigo-900 shadow-lg text-white text-md hover:bg-yellow-300 ">
					All Minted Ethemerals
				</a>
			</div>
			<div className="mx-auto justify-center items-center space-y-6 text-center grid md:grid-cols-3 justify-items-center md:max-w-5xl">
				<div className="p-4 bg-blue-200 shadow-lg rounded-lg w-72">
					<div className="flex rounded bg-customblue m-auto items-center justify-center w-12 h-12">
						<Image src="/icon_ini_supply.png" alt="icon" width="34" height="34" />
					</div>
					<h3 className="text-xl text-gray-700 font-semibold py-2">Initial Supply</h3>
					<p className="text-gray-700 py-2">
						<span className="font-bold">60 Ethemeral Classes</span> released at launch, with a maximum of <span className="font-bold">10 editions</span> each. Classes based on CoinMarketcap rankings
						snapshot taken on 31st July 2021.
					</p>
				</div>
				<div className="p-4 bg-green-200 shadow-lg rounded-lg w-72">
					<div className="flex rounded bg-customblue m-auto items-center justify-center w-12 h-12">
						<Image src="/icon_inflation.png" alt="icon" width="34" height="34" />
					</div>
					<h3 className="text-xl text-gray-700 font-semibold py-2">Inflation Rate</h3>
					<p className="text-gray-700 xs:py-2 py-4">
						When new coins enter the <span className="font-bold">top 100 CoinMarketcap rankings</span> they will be given the honor of becoming an Ethemeral. Given life by our artists, become mintable
						and playable. On average a single mintable Ethemeral class will be released each week
					</p>
				</div>
				<div className="p-4 bg-blue-200 shadow-lg rounded-lg w-72">
					<div className="flex rounded bg-customblue m-auto items-center justify-center w-12 h-12">
						<Image src="/icon_totalsupply.png" alt="icon" width="34" height="34" />
					</div>
					<h3 className="text-xl text-gray-700 font-semibold py-2">Total Supply</h3>
					<p className="text-gray-700 xs:py-2 py-4">
						A Maximum 420 Ethemeral classes, with 10 editions each, for a total of <span className="font-bold">4200</span> ever to be mintable. At the inflation rate, the last coin will be minted in 6
						years. <span className="font-bold">Open a capsule now!</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Ethemerals;
