import { useEffect, useState } from 'react';
import Image from 'next/image';
import Links from '../../constants/Links';

const imgTeam = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Fcommunity?alt=media&token=646ab889-f210-4086-ae26-95f3bd7775d9';
// const imgTeam = '/community.png';

const Community = () => {
	return (
		<>
			<section className="bg-gray-200 mx-auto px-6 lg:px-8 pb-10">
				<div className="max-w-4xl mx-auto text-center">
					<a id="community">
						<h2 className="text-center text-4xl md:text-7xl pt-16 md:pt-20 text-indigo-900">Community</h2>
					</a>
					<p className="mt-3 text-base leading-7 sm:mt-8 text-black mb-8 md:mb-16">
						Join our rapidly growing community of players, chat with the devs and artists, interact with others players and have your say in shaping the future of the Kingdom of the Ethemerals.
					</p>
				</div>
				<div className="text-center sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 md:max-w-3xl lg:max-w-7xl m-auto text-gray-600">
					<div className="bg-gray-100 mx-auto text-center items-center justify-center w-64 h-64 py-10 px-4 mb-5 shadow rounded font-light text-sm">
						<a href={Links.DISCORD} className="cursor-pointer">
							<Image src="/icon_big_discord.png" alt="icon" width="100" height="100" />
						</a>
						<h3 className="font-bold text-2xl">Discord</h3>
						Chat live with the Ethemeral community, artist and developers
					</div>
					<div className="bg-gray-100 mx-auto text-center items-center justify-center w-64 h-64 py-10 px-4 mb-5 shadow rounded font-light text-sm">
						<a href={Links.TWITTER} className="cursor-pointer">
							<Image src="/icon_big_twitter.png" alt="icon" width="100" height="100" />
						</a>
						<h3 className="font-bold text-2xl">Twitter</h3>
						Follow @Ethemerals for the latest news and announcements
					</div>
					<div className="bg-gray-100 mx-auto text-center items-center justify-center w-64 h-64 py-10 px-4 mb-5 shadow rounded font-light text-sm">
						<a href={Links.INSTAGRAM} className="cursor-pointer">
							<Image src="/icon_big_instagram.png" alt="icon" width="100" height="100" />
						</a>
						<h3 className="font-bold text-2xl">Instagram</h3>
						Get the latest art and design updates
					</div>
					<div className="bg-gray-100 mx-auto text-center items-center justify-center w-64 h-64 py-10 px-4 mb-5 shadow rounded font-light text-sm">
						<a href={Links.GITHUB} className="cursor-pointer">
							<Image src="/icon_big_github.png" alt="icon" width="100" height="100" />
						</a>
						<h3 className="font-bold text-2xl">Github</h3>
						Contribute and help develop the future of the Kingdom of the Ethemerals
					</div>
				</div>

				<div className="max-w-4xl mx-auto text-center pt-10 md:pt-20 text-black">
					<h3 className="xs:text-xl sm:text-2xl font-extrabold leading-10 text-indigo-900">About the Team</h3>
					<p className="mt-3 text-base leading-7 sm:mt-4">
						Kingdom of the Ethemerals was created by a small team of Developers and Artists. We are crypto enthusiasts, grew up on anime and consume too many memes.
						<br></br>
						We are committed to creating an engaging universe and to build a vibrant community of players, taders, artists, and collectors.
					</p>
					<br></br>
					<p>To get in touch, please email ethemerals@gmail.com</p>
				</div>
			</section>
			<div className="mx-auto justify-items-center w-full bg-gray-200">
				<img src={imgTeam} alt="icon" width="2048" height="537" />
			</div>
		</>
	);
};

export default Community;
