import { useEffect, useState } from 'react';

import Image from 'next/image';

const Battle = () => {
	const [imgBattle1, setImgBattle1] = useState('');
	const [imgBattle2, setImgBattle2] = useState('');
	const [imgBattle3, setImgBattle3] = useState('');

	useEffect(() => {
		getImages('pvpbattle', setImgBattle1);
		getImages('eternalbattle', setImgBattle2);
		getImages('raidbattle', setImgBattle3);
	}, []);

	const getImages = async (imageName, setImg) => {
		try {
			const response = await fetch(`api/images/${imageName}`);
			const json = await response.json();
			setImg(json.url);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="battleBg px-4 pb-12 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32">
			<div className="max-w-4xl mx-auto text-center">
				<a id="battle">
					<h2 className="text-center xs:text-4xl md:text-7xl pt-16 md:pt-20">Battle</h2>
				</a>
				<div className="text-center md:mb-12 lg:mb-20 xs:py-6 sm:py-12 lg:pb-0">
					<p className="lg:w-3/4 md:w-full m-auto xs:px-4 sm:px-4 leading-loose text-white xs:text-base md:text-2xl sm:font-normal">
						The Kingdom of the Ethemerals needs you! Send your Ethemerals to battle to gain ranks, earn rewards and honor. Only the skilled and degenerates will rise to greatness.
					</p>
				</div>
			</div>
			<div className="mt-20 xs:mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 lg:gap-x-20 lg:max-w-4xl">
				<div className="visible xs:hidden sm:block sm:flex-shrink-0">
					<img src={imgBattle2} className="rounded-lg mx-auto justify-center" />
					<p className="text-2xl font-extrabold leading-none text-white pt-4">PvP</p>
					<p className="mt-2 xs:mb-20 text-base leading-6 text-white">
						Settle those scores! Send your team of Ethemerals into the PvP arena. Outcomes determined by the Ethemerals coins real price data and group stat bonuses.
					</p>
				</div>

				<div className="flex-shrink-0">
					<img src={imgBattle1} className="rounded-lg mx-auto justify-center" />
					<p className="text-2xl font-extrabold leading-none text-white pt-4">Eternal Battle</p>
					<p className="mt-2 xs:mb-20 text-base leading-6 text-white">
						Join the eternal battle between cryptocurrencies. Stake your Ethemerals Honor Points and have real price data from Oracles determine the outcome. But watch out! There are reaper Ethemerals
						waiting on the sidelines.
					</p>
				</div>

				<div className="xs:visible sm:hidden flex-shrink-0">
					<img src={imgBattle2} className="rounded-lg mx-auto justify-center" />
					<p className="text-2xl font-extrabold leading-none text-white pt-4">PvP</p>
					<p className="mt-2 xs:mb-20 text-base leading-6 text-white">
						Settle those scores! Send your team of Ethemerals into the PvP arena. Outcomes determined by the Ethemerals coins real price data and group stat bonuses.
					</p>
				</div>

				<div className="flex-shrink-0">
					<img src={imgBattle3} className="rounded-lg mx-auto justify-center" />
					<p className="text-2xl font-extrabold leading-none text-white pt-4">Boss Raids</p>
					<p className="mt-2 xs:mb-10 text-base leading-6 text-white">Invaders are approaching the Kingdom! Gather your Ethemerals, Stand beside your allies and defend this sacred land.</p>
				</div>
			</div>
			<div className="flex mx-auto text-center items-center justify-center shadow-inner">
				<Image src="/icon_playtoearn.png" alt="icon" width="256" height="256" />
			</div>
			<div className="max-w-4xl mx-auto text-center xs:pt-0 pt-6">
				<p className="text-2xl font-extrabold leading-none text-white">Play to Earn</p>

				<p className="mt-3 text-base leading-7 sm:mt-4 text-white">
					Ethemerals earn $ELF (Ethemeral Life Force) every time they are sent to battle. Rewards increase based on how well they performed. A percentage of the rewards gets allocated to the{' '}
					<span className="font-bold">Highest Honor fund </span>. Redeemable by the top ranking Ethemeral
				</p>
			</div>
			<div className="flex justify-center xs:py-10 py-20">
				<a href="#" className="uppercase py-4 px-6 xs:text-sm md:text-lg rounded bg-indigo-900 shadow-lg text-white text-md hover:bg-yellow-300 ">
					Onto Battle!
				</a>
			</div>
		</section>
	);
};

export default Battle;
