import Image from 'next/image';
import Links from '../constants/Links';

const imgBattle1 = '/battle_pvp.webp';
const imgBattle2 = '/battle_eternal.webp';
const imgBattle3 = '/battle_boss.webp';
const imgPlayToEarn = '/icon_playtoearn.png';

const Docs = () => {
	return (
		<section className="battleBg px-4 pb-24 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32 leading-normal">
			<div className="mx-auto p-4 z-10 pb-10 md:pb-20 max-w-5xl ">
				<a id="battle">
					<h2 className="text-7xl font-medium pt-20 md:pt-40 font-ubuntu">Docs</h2>
				</a>
				<p>Coming Soon</p>
			</div>
		</section>
	);
};

export default Docs;
