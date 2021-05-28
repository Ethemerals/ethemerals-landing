import { useState, useEffect } from 'react';

import Links from '../../constants/Links';

import { usePWVSpring } from '@play-when-visible/react-spring';
import { config, animated } from '@react-spring/web';

const imgLogoElf = './logo_elf.svg';
const imgLogoUniswap = './logo_uniswap.svg';
const imgPiechart = './piechart.svg';

const ElfCard = ({ props }) => (
	<div className="shadow-lg rounded p-4 bg-gray-50 relative mx-auto my-4 md:my-10 max-w-xs">
		<div ref={props.ref} className="flex m-auto items-center w-12 h-12 justify-center">
			<animated.img style={props.anim} src={`/${props.icon}.png`} alt="icon" width="60" height="60" />
		</div>
		<p className="text-gray-900 font-bold mb-2">{props.title}</p>
		<p className="text-gray-500 text-sm mb-2">{props.description}</p>
	</div>
);

const Elf = () => {
	const animation = {
		from: { scale: 0 },
		to: { scale: 1 },
		config: config.wobbly,
	};

	const [iconRef, iconAnim] = usePWVSpring({
		animation: animation,
	});

	const [iconRef2, iconAnim2] = usePWVSpring({
		animation: animation,
	});

	const [iconRef3, iconAnim3] = usePWVSpring({
		animation: animation,
	});

	const [iconRef4, iconAnim4] = usePWVSpring({
		animation: animation,
	});

	return (
		<section className="px-4 pb-24 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32 leading-normal bg-gray-200 text-gray-800">
			<div className="mx-auto p-4 z-10 pb-10 md:pb-20 max-w-5xl ">
				<a id="elf">
					<h2 className="text-7xl font-medium pt-20 md:pt-40 font-ubuntu flex items-center text-brandColor">
						<img src={imgLogoElf} width="50" height="50"></img>
						<span className="ml-2">ELF</span>
					</h2>
				</a>
				<h3 className="text-lg sm:text-2xl font-extrabold pt-4 md:pt-8">Introducing the Ethemerals Life Force Token</h3>
				<p className="mt-3 sm:mt-4">
					The Ethemeral Life Force <span className="font-bold">(ELF)</span> flows within each Ethemeral and is an integral part of the ecosystem. ELF holders will be able to revive damaged Ethemerals,
					mint at a discount, purchase land and items. ELF tokens do not have monetary value and are used to incentivize player participation.
				</p>
				<p className="mt-3 sm:mt-4">Ethemerals are born with a fixed amount of ELF and gain more by engaging in battle. Players are able to redeem the locked ELF from their Ethemerals.</p>
				<p className="mt-3 sm:mt-4 font-bold">
					ELF is deflationary, on each transaction a fee of 2% is sent to the core NFT contract, to be used as rewards for active players and to reduce circulating supply
				</p>
			</div>
			<div className="text-center justify-center grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 lg:max-w-5xl m-auto">
				<ElfCard
					props={{
						icon: 'icon_gift',
						title: 'Rewards',
						description: 'Participate in battles and earn ELF. Climb the rankings for a chance to redeem the Highest Honor reward',
						ref: iconRef,
						anim: iconAnim,
					}}
				/>
				<ElfCard
					props={{
						icon: 'icon_heart',
						title: 'Staking',
						description: 'ELF holders and liquidity providers can lock up their tokens to earn ELF',
						ref: iconRef2,
						anim: iconAnim2,
					}}
				/>
				<ElfCard
					props={{
						icon: 'icon_gov',
						title: 'Governance',
						description: 'Bonus Ethemeral coin classes, art and design upgrades and ecosystem changes can be voted on by ELF holders',
						ref: iconRef3,
						anim: iconAnim3,
					}}
				/>
				<ElfCard
					props={{
						icon: 'icon_payment',
						title: 'Payment',
						description: 'ELF will be accepted as payment within the Kingdom of the Ethemerals. Future land sales and items can be purchased with ELF',
						ref: iconRef4,
						anim: iconAnim4,
					}}
				/>
			</div>

			<div className="justify-center mx-auto text-center mt-10 md:mt-20">
				<p className="mb-2 text-pink-700">Trade $ELF on Uniswap Exchange</p>
				<div className="max-w-xs mx-auto bg-gray-50 p-4 mb-16 rounded-lg shadow-lg hover:bg-white">
					<a href={Links.UNISWAP}>
						<img src={imgLogoUniswap} alt="elf metric piechart" width="640" height="160" />
					</a>
				</div>
			</div>
			<div className="grid sm:grid-cols-2 text-center justify-center max-w-lg mx-auto uppercase gap-x-8 gap-y-4">
				<a href={Links.ELF} className="p-2 font-bold shadow-lg rounded-lg bg-brandColor-pale text-white hover:bg-yellow-400">
					Provide Liquidity
				</a>
				<a href={Links.ELF} className="p-2 font-bold shadow-lg rounded-lg bg-brandColor-pale text-white hover:bg-yellow-400">
					Stake and Earn ELF
				</a>
			</div>

			<div className="m-auto text-center max-w-5xl pb-40 textMetric">
				<h2 className="text-7xl font-medium pt-40 md:pt-40 pb-5 md:pb-10 font-ubuntu items-center textMetric">
					<span>METRICS</span>
				</h2>
				<div className="text-center md:grid md:grid-cols-2">
					<div className="flex mx-auto text-center items-center justify-center mb-8">
						<img src={imgPiechart} alt="elf metric piechart" width="400" height="400" />
					</div>
					<div className="text-left md:px-10 xs:px-4">
						<div className="metricsA p-4 my-4 shadow-md">
							<h3 className="font-bold text-lg my-1">40% Gameplay Rewards</h3>
							<p>Majority of the ELF tokens will be locked within the core contract and can only be redeemed as rewards to active players.</p>
						</div>
						<div className="metricsB p-4 my-4 shadow-md">
							<h3 className="font-bold text-lg my-1">30% - Liquidity</h3>
							<p>Locked for liquidity on Uniswap and other exchanges. Staking and farming bonuses</p>
						</div>
						<div className="metricsC p-4 my-4 shadow-md">
							<h3 className="font-bold text-lg my-1">30% - Community</h3>
							<p>To promote community involvement, an ELF fund is reserved for bug bounties, artists, community managers and community developers extending NFT gameplay contracts and ecosystem.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Elf;
