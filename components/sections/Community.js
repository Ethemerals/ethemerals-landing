import { useEffect, useState } from 'react';
import Image from 'next/image';
import Links from '../../constants/Links';

const imgTeam = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Fcommunity?alt=media&token=646ab889-f210-4086-ae26-95f3bd7775d9';
// const imgTeam = '/community.png';
const imgS = './community/community_s.png';
const imgM = './community/community_m.png';
const imgL = './community/community_l.png';

const Community = () => {
	return (
		<>
			<section className="bg-gray-200 text-gray-800 px-4 pb-24 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32 leading-normal">
				<div className="mx-auto p-4 z-10 pb-10 md:pb-20 max-w-5xl ">
					<a id="community">
						<h2 className="textMetric text-5xl md:text-7xl font-medium pt-20 md:pt-40 font-ubuntu overflow-hidden pb-4">Community</h2>
					</a>
					<p className="md:text-xl pb-4">
						Join our rapidly growing community of players, chat with the devs and artists, interact with others players and have your say in shaping the future of the Kingdom of the Ethemerals.
					</p>
				</div>
				<div className="text-center sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 md:max-w-3xl lg:max-w-7xl m-auto text-gray-700">
					<div className="bg-gray-100 font-light mx-auto text-center items-center justify-center w-64 h-64 py-8 px-4 mb-6 shadow rounded ">
						<a href={Links.DISCORD} className="cursor-pointer">
							<Image src="/icon_big_discord.png" alt="icon" width="100" height="100" />
						</a>
						<h3 className="font-bold text-2xl">Discord</h3>
						Chat live with the community, artist and developers
					</div>
					<div className=" bg-gray-100 font-light mx-auto text-center items-center justify-center w-64 h-64 py-8 px-4 mb-6 shadow rounded ">
						<a href={Links.TWITTER} className="cursor-pointer">
							<Image src="/icon_big_twitter.png" alt="icon" width="100" height="100" />
						</a>
						<h3 className="font-bold text-2xl">Twitter</h3>
						Follow @Ethemerals for the latest news and announcements
					</div>
					<div className=" bg-gray-100 font-light mx-auto text-center items-center justify-center w-64 h-64 py-8 px-4 mb-6 shadow rounded ">
						<a href={Links.INSTAGRAM} className="cursor-pointer">
							<Image src="/icon_big_instagram.png" alt="icon" width="100" height="100" />
						</a>
						<h3 className="font-bold text-2xl">Instagram</h3>
						Get the latest art and design updates
					</div>
					<div className=" bg-gray-100 font-light mx-auto text-center items-center justify-center w-64 h-64 py-8 px-4 mb-6 shadow rounded ">
						<a href={Links.GITHUB} className="cursor-pointer">
							<Image src="/icon_big_github.png" alt="icon" width="100" height="100" />
						</a>
						<h3 className="font-bold text-2xl">Github</h3>
						Contribute and develop the future of the Kingdom of the Ethemerals
					</div>
				</div>
				<div className="mx-auto p-4 z-10 pb-10 md:pb-20 max-w-5xl ">
					<h3 className="text-3xl font-medium pt-20 md:pt-40 font-ubuntu textMetric">About the Team</h3>
					<p className="md:text-xl py-4">Kingdom of the Ethemerals was created by a small team of Developers and Artists. We are crypto enthusiasts, grew up on anime and too many memes.</p>
					<p className="md:text-xl py-4">We are committed to creating an engaging universe and to build a vibrant community of players, traders, artists, and collectors.</p>
					<p className="md:text-xl py-4">To get in touch, please email ethemerals@gmail.com</p>
				</div>
			</section>
			<div className="bg-gray-200 hidden lg:block">
				<img src={imgL} className="" alt="icon" width="2048" height="604" />
			</div>
			<div className="bg-gray-200 hidden sm:block lg:hidden">
				<img src={imgM} className="" alt="icon" width="1719" height="606" />
			</div>
			<div className="bg-gray-200 block sm:hidden">
				<img src={imgS} className="" alt="icon" width="1196" height="608" />
			</div>
		</>
	);
};

export default Community;
