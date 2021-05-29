import Image from 'next/image';
import Links from '../../constants/Links';

const imgBattle1 = '/battle_pvp.webp';
const imgBattle2 = '/battle_pvp.png';
const imgBattle3 = '/battle_boss.webp';
const imgPlayToEarn = '/icon_playtoearn.png';

const Battle = () => {
	return (
		<section className="battleBg px-4 pb-24 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32 leading-normal">
			<div className="mx-auto p-4 z-10 pb-10 md:pb-20 max-w-5xl ">
				<a id="battle">
					<h2 className="text-7xl font-medium pt-20 md:pt-40 font-ubuntu">Battle</h2>
				</a>
				<p className="md:text-xl py-4">
					The Kingdom of the Ethemerals needs you! Send your Ethemerals into battle to gain ranks, earn rewards and honor. Only the skilled and degenerates will rise to greatness.
				</p>
			</div>
			<div className="mt-16 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 lg:gap-x-20 lg:max-w-4xl">
				<div className="hidden sm:block">
					<Image src={imgBattle2} className="rounded-lg mx-auto justify-center" alt="Two fighters attacking" width="270" height="270" />
					<p className="text-2xl font-bold pt-4">PvP</p>
					<p className="mt-2 mb-20">Settle those scores! Jump into the PvP arena. Outcomes are determined by the coins real price action and group stat bonuses.</p>
				</div>

				<div className="">
					<Image src={imgBattle1} className="rounded-lg mx-auto justify-center" alt="Two fighters close up" width="270" height="270" />
					<p className="text-2xl font-bold pt-4">Eternal Battle</p>
					<p className="mt-2 mb-20">Stake your Ethemerals Honor Points and join the eternal battle between cryptocurrencies. But be warned, Reapers are waiting on the sidelines.</p>
				</div>

				<div className="visible sm:hidden">
					<Image src={imgBattle2} className="rounded-lg mx-auto justify-center" alt="Two fighters attacking" width="270" height="270" />
					<p className="text-2xl font-bold pt-4">PvP</p>
					<p className="mt-2 mb-20">Settle those scores! Jump into the PvP arena. Outcomes are determined by the coins real price action and group stat bonuses.</p>
				</div>

				<div className="">
					<Image src={imgBattle3} className="rounded-lg mx-auto justify-center" alt="Big boss infront of a team of fighters" width="270" height="270" />
					<p className="text-2xl font-bold pt-4">Boss Raids</p>
					<p className="mt-2 mb-10">Invaders are approaching the Kingdom! Gather your Ethemerals, stand beside your allies and defend this sacred land.</p>
				</div>
			</div>
			<div className="flex mx-auto text-center items-center justify-center xs:pt-20 sm:pt-0">
				<Image src={imgPlayToEarn} alt="icon" width="320" height="256" alt="ethemeral logo fully rendered with wings" />
			</div>
			<div className="max-w-4xl mx-auto text-center xs:pt-0 pt-6 md:max-w-lg">
				<p className="text-2xl font-bold">Play to Earn</p>

				<p className="mt-3">
					Ethemerals earn $ELF each time they are sent to battle. Rewards increase based on how well they performed. A percentage of the rewards are allocated to the{' '}
					<span className="font-bold">Highest Honor fund.</span> Redeemable by top ranking Ethemerals
				</p>
			</div>
			<div className="flex justify-center py-20">
				<a href={Links.Battle} className="uppercase font-bold py-4 px-6 xs:text-sm md:text-lg rounded bg-indigo-900 shadow-lg text-white text-md hover:bg-yellow-400 cursor-pointer">
					TO Battle!
				</a>
			</div>
		</section>
	);
};

export default Battle;
