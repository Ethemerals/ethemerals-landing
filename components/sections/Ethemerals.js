import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { usePWVSpring } from '@play-when-visible/react-spring';
import { config, animated } from '@react-spring/web';

import LinkModal from '../Modals/LinkModal';

import Links from '../../constants/Links';

const imgIniSupply = '/icon_ini_supply.png';
const imgInflation = '/icon_inflation.png';
const imgTotalSupply = '/icon_totalsupply.png';

const SplideCarousel = dynamic(import('../splide/SplideCarousel'), { ssr: false });

const Ethemerals = ({ toggle }) => {
	const animation = {
		from: { scale: 0 },
		to: { scale: 1 },
		config: config.wobbly,
	};

	const [supplyRef, supplyAnim] = usePWVSpring({
		animation: animation,
	});

	const [supplyRef1, supplyAnim1] = usePWVSpring({
		animation: animation,
	});

	const [supplyRef2, supplyAnim2] = usePWVSpring({
		animation: animation,
	});

	const descriptionListItem = (props) => (
		<div className="p-4">
			<h3 className="text-xl font-medium">
				<span className="flex items-center text-customLightBlue">
					<svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.76953 7.8079L7.31215 5.76008C6.79109 5.32586 6 5.69639 6 6.37466V9.62526C6 10.3035 6.79109 10.6741 7.31215 10.2398L9.76953 8.19201C9.88947 8.09207 9.88947 7.90785 9.76953 7.8079Z"
							fill="#77D9E2"
						/>
					</svg>
					{props.title}
				</span>
			</h3>
			<p>{props.body}</p>
		</div>
	);

	const liItem1 = {
		title: 'Crypto Sweat and Tears',
		body: (
			<span>
				These dynamic playable characters are based on every coin in the top 100 Coinmarketcap.com rankings. Bitcoin, Etheruem, Uniswap, Polkadot... Even lesser known coins are beautifully brought to
				life.
			</span>
		),
	};

	const liItem2 = {
		title: 'Enter the Metaverse',
		body: <span>Your Ethemeral is the key that unlocks an ecosystem of cryptocurrency related games and an interactive world to explore and conquer</span>,
	};

	const liItem3 = {
		title: 'For Honor and Glory!',
		body: <span>Test your resolve. Only the skilled and determined climb the rankings, gain Honor Points and earn $ELF rewards</span>,
	};

	const liItem4 = {
		title: 'Collectable Ownable Tradeable',
		body: <span>Limited and scarce native assets on the Etheruem blockchain. Available to be traded on the marketplace and secondary markets such as opensea.io </span>,
	};

	const liItem5 = {
		title: 'Blood on the Streets',
		body: <span>Ethemerals are ruthless. Stake your Honor Points. There is no mercy, no second chances. Angel and Reaper Ethemerals are waiting on the sidelines. Proceed with caution!</span>,
	};

	const liItem6 = {
		title: 'Collectable Sets',
		body: <span>Owning certain Ethemerals unlocks set bonuses and redeemable one of a kind NFTs. 100s of combinations to be discovered</span>,
	};

	return (
		// bake in
		<section className="ethemeralsBg bg-opacity-80 pb-40 text-gray-200 leading-normal">
			<div className="mx-auto p-4 z-10 pb-10 md:pb-20 max-w-5xl ">
				<a id="ethemerals">
					<h2 className="text-5xl md:text-7xl font-medium pt-20 md:pt-40 font-ubuntu">Meet the Ethemerals</h2>
				</a>
				<p className="md:text-xl py-4">
					Anime inspired female warriors, birthed from the souls of the top ranking cryptocurrencies and beautifully handcrafted by our talented artists. Adopt one now and enter the interactive
					Kingdom of The Ethemerals!
				</p>
			</div>
			<SplideCarousel />

			<div className="justify-center py-20 md:py-40 grid md:grid-cols-2 max-w-5xl mx-auto">
				{descriptionListItem(liItem1)}
				{descriptionListItem(liItem2)}
				{descriptionListItem(liItem4)}
				{descriptionListItem(liItem3)}
				{descriptionListItem(liItem5)}
				{descriptionListItem(liItem6)}
			</div>
			<div className="flex justify-center pb-20">
				<a onClick={toggle} className="uppercase font-bold py-4 px-6 md:text-lg rounded bg-brandColor shadow-lg text-white text-md hover:bg-yellow-400 cursor-pointer">
					All Minted Ethemerals
				</a>
			</div>
			<div className="mx-auto justify-center items-start text-center grid md:grid-cols-3 justify-items-center md:max-w-5xl text-gray-900">
				<div className="p-4 bg-customLightBlue shadow-lg rounded-lg w-72 mt-10">
					<div ref={supplyRef} className="ethemeralsBg flex rounded m-auto items-center justify-center w-12 h-12">
						<animated.div style={supplyAnim}>
							<Image src={imgIniSupply} alt="icon initial supply" width="34" height="34" />
						</animated.div>
					</div>
					<h3 className="text-xl font-bold py-2">Initial Supply</h3>
					<p className="py-2">
						100 unique Ethemeral classes released at launch, with a maximum of <span className="font-bold">10 editions</span> each. Total 1000 Initial Supply
					</p>
				</div>
				<div className="p-4 bg-customLightBlue shadow-lg rounded-lg w-72 mt-10">
					<div ref={supplyRef1} className="ethemeralsBg flex rounded m-auto items-center justify-center w-12 h-12">
						<animated.div style={supplyAnim1}>
							<Image src={imgInflation} alt="icon inflation" width="34" height="34" />
						</animated.div>
					</div>
					<h3 className="text-xl font-bold py-2">Inflation Rate</h3>
					<p className="py-2">
						A new Ethemeral class will become mintable once a cryptocurrency enters the <span className="font-bold">top 100</span> CoinMarketcap rankings. On average a single Ethemeral class will be
						released each week. Plus monthly bonus community voted coins.
					</p>
				</div>
				<div className="p-4 bg-customLightBlue shadow-lg rounded-lg w-72 mt-10">
					<div ref={supplyRef2} className="ethemeralsBg flex rounded m-auto items-center justify-center w-12 h-12">
						<animated.div style={supplyAnim2}>
							<Image src={imgTotalSupply} alt="icon total supply" width="34" height="34" />
						</animated.div>
					</div>
					<h3 className="text-xl font-bold py-2">Total Supply</h3>
					<p className="py-2">
						A Maximum 420 Ethemeral classes, with 10 editions each, for a total of <span className="font-bold">4200</span> will ever be mintable. Claim your piece of the kingdom now!
					</p>
				</div>
			</div>
		</section>
	);
};

export default Ethemerals;
