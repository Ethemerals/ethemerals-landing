import { useEffect, useState } from 'react';

import Image from 'next/image';

import Links from '../../constants/Links';

const imgBattle1 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Fpvpbattle?alt=media&token=bc25debd-9313-4845-842b-8968434036f5';
const imgBattle2 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Feternalbattle?alt=media&token=b3ca31de-e04b-4249-a07b-11ec8f108f4e';
const imgBattle3 = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Fraidbattle?alt=media&token=17537bb7-c763-45d1-a846-26f64d0b60e9';

const Battle = () => {
	return (
		<section className="battleBg px-4 pb-12 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32">
			<div className="max-w-4xl mx-auto text-center">
				<a id="battle">
					<h2 className="text-center text-4xl md:text-7xl pt-16 md:pt-20">Battle</h2>
				</a>
				<div className="text-center py-6">
					<p className="leading-loose text-white text-base md:text-2xl sm:font-normal">
						The Kingdom of the Ethemerals needs you! Send your Ethemerals to battle to gain ranks, earn rewards and honor. Only the skilled and degenerates will rise to greatness.
					</p>
				</div>
			</div>
			<div className="mt-16 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 lg:gap-x-20 lg:max-w-4xl">
				<div className="hidden sm:block flex-shrink-0">
					<img src={imgBattle2} className="rounded-lg mx-auto justify-center" />
					<p className="text-2xl font-extrabold leading-none text-white pt-4">PvP</p>
					<p className="mt-2 xs:mb-20 text-base leading-6 text-white">
						Settle those scores! Send your team of Ethemerals into the PvP arena. Outcomes determined by the Ethemerals coins real price data and group stat bonuses.
					</p>
				</div>

				<div className="flex-shrink-0">
					<img src={imgBattle1} className="rounded-lg mx-auto justify-center" />
					<p className="text-2xl font-extrabold leading-none text-white pt-4">Eternal Battle</p>
					<p className="mt-2 mb-20 text-base leading-6 text-white">
						Join the eternal battle between cryptocurrencies. Stake your Ethemerals Honor Points and have real price data from Oracles determine the outcome. But watch out! There are reaper Ethemerals
						waiting on the sidelines.
					</p>
				</div>

				<div className="visible sm:hidden flex-shrink-0">
					<img src={imgBattle2} className="rounded-lg mx-auto justify-center" />
					<p className="text-2xl font-extrabold leading-none text-white pt-4">PvP</p>
					<p className="mt-2 mb-20 text-base leading-6 text-white">
						Settle those scores! Send your team of Ethemerals into the PvP arena. Outcomes determined by the Ethemerals coins real price data and group stat bonuses.
					</p>
				</div>

				<div className="flex-shrink-0">
					<img src={imgBattle3} className="rounded-lg mx-auto justify-center" />
					<p className="text-2xl font-extrabold leading-none text-white pt-4">Boss Raids</p>
					<p className="mt-2 mb-10 text-base leading-6 text-white">Invaders are approaching the Kingdom! Gather your Ethemerals, Stand beside your allies and defend this sacred land.</p>
				</div>
			</div>
			<div className="flex mx-auto text-center items-center justify-center xs:pt-20 sm:pt-0">
				<Image src="/icon_playtoearn.png" alt="icon" width="256" height="256" />
			</div>
			<div className="max-w-4xl mx-auto text-center xs:pt-0 pt-6">
				<p className="text-2xl font-extrabold leading-none text-white">Play to Earn</p>

				<p className="mt-3 text-base leading-7 text-white">
					Ethemerals earn $ELF (Ethemeral Life Force) every time they are sent to battle. Rewards increase based on how well they performed. A percentage of the rewards gets allocated to the{' '}
					<span className="font-bold">Highest Honor fund </span>. Redeemable by the top ranking Ethemeral
				</p>
			</div>
			<div className="flex justify-center py-20">
				<a href={Links.Battle} className="uppercase py-4 px-6 xs:text-sm md:text-lg rounded bg-indigo-900 shadow-lg text-white text-md hover:bg-yellow-300 ">
					Onto Battle!
				</a>
			</div>
		</section>
	);
};

export default Battle;
