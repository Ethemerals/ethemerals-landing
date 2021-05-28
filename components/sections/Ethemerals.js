import dynamic from 'next/dynamic';
import { usePWVSpring } from '@play-when-visible/react-spring';
import { config, animated } from '@react-spring/web';

import Links from '../../constants/Links';

const imgIniSupply = '/icon_ini_supply.png';
const imgInflation = '/icon_inflation.png';
const imgTotalSupply = '/icon_totalsupply.png';

const SplideCarousel = dynamic(import('../splide/SplideCarousel'), { ssr: false });

const Ethemerals = () => {
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
		body: <span>When a cryptocurrency hits the top 100 market cap rankings they become mintable as an Ethemeral</span>,
	};

	const liItem2 = {
		title: 'Enter the Metaverse',
		body: <span>Owning an Ethemeral unlocks a suite of games and an interactive world</span>,
	};

	const liItem3 = {
		title: 'For Honor and Glory!',
		body: <span>Test your might. Only the skilled and resolute gain ranks and earn rewards</span>,
	};

	const liItem4 = {
		title: 'Dynamic Stats',
		body: <span>Ethemerals stats are modified by their real world cryptocurrency price action</span>,
	};

	const liItem5 = {
		title: 'Blood on the Streets',
		body: <span>Ethemerals are ruthless. There is no mercy, no second chances. Proceed with caution!</span>,
	};

	const liItem6 = {
		title: 'Collectable Sets',
		body: <span>Holding certain Ethemerals unlocks set bonuses and redeemable one of a kind art NFTs. 100s of combinations to be discovered</span>,
	};

	return (
		// bake in
		<section className="ethemeralsBg bg-opacity-80 pb-40 text-gray-200 leading-normal">
			<div className="mx-auto p-4 z-10 pb-10 md:pb-20 max-w-5xl ">
				<a id="ethemerals">
					<h2 className="text-5xl md:text-7xl font-medium pt-20 md:pt-40 font-ubuntu">Meet the Ethemerals</h2>
				</a>
				<p className="md:text-xl py-4">Warrior maidens, rebirthed from the souls of the top ranking cryptocurrencies. Adopt one now and enter the Kingdom of The Ethemerals!</p>
			</div>
			<SplideCarousel />

			<div className="justify-center py-20 md:py-40 grid md:grid-cols-2 max-w-5xl mx-auto">
				{descriptionListItem(liItem2)}
				{descriptionListItem(liItem1)}
				{descriptionListItem(liItem3)}
				{descriptionListItem(liItem5)}
				{descriptionListItem(liItem4)}
				{descriptionListItem(liItem6)}
			</div>
			<div className="flex justify-center pb-20">
				<a href={Links.ETHEMERALS} className="uppercase font-bold py-4 px-6 md:text-lg rounded bg-brandColor shadow-lg text-white text-md hover:bg-yellow-400 ">
					All Minted Ethemerals
				</a>
			</div>
			<div className="mx-auto justify-center items-start text-center grid md:grid-cols-3 justify-items-center md:max-w-5xl text-gray-900">
				<div className="p-4 bg-customLightBlue shadow-lg rounded-lg w-72 mt-10">
					<div ref={supplyRef} className="ethemeralsBg flex rounded m-auto items-center justify-center w-12 h-12">
						<animated.img style={supplyAnim} src={imgIniSupply} alt="icon initial supply" width="34" height="34" />
					</div>
					<h3 className="text-xl font-bold py-2">Initial Supply</h3>
					<p className="py-2">
						100 unique Ethemeral Classes released at launch, with a maximum of <span className="font-bold">10 editions</span> each. Total 1000 Initial Supply
					</p>
				</div>
				<div ref={supplyRef1} className="p-4 bg-customLightBlue shadow-lg rounded-lg w-72 mt-10">
					<div className="ethemeralsBg flex rounded m-auto items-center justify-center w-12 h-12">
						<animated.img style={supplyAnim1} src={imgInflation} alt="icon inflation" width="34" height="34" />
					</div>
					<h3 className="text-xl font-bold py-2">Inflation Rate</h3>
					<p className="py-2">
						A new Ethemeral class will become mintable once a cryptocurrency enter the <span className="font-bold">top 100</span> CoinMarketcap rankings. On average a single Ethemeral class will be
						released each week
					</p>
				</div>
				<div ref={supplyRef2} className="p-4 bg-customLightBlue shadow-lg rounded-lg w-72 mt-10">
					<div className="ethemeralsBg flex rounded m-auto items-center justify-center w-12 h-12">
						<animated.img style={supplyAnim2} src={imgTotalSupply} alt="icon total supply" width="34" height="34" />
					</div>
					<h3 className="text-xl font-bold py-2">Total Supply</h3>
					<p className="py-2">
						Maximum 420 Ethemeral classes, with 10 editions each, for a total of <span className="font-bold">4200</span> ever to be minted. Claim your piece of the kingdom now!
					</p>
				</div>
			</div>
		</section>
	);
};

export default Ethemerals;
