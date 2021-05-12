import { useEffect, useState } from 'react';
import Image from 'next/image';

const Community = () => {
	const [imgTeam, setImgTeam] = useState('');

	useEffect(() => {
		getImages('community', setImgTeam);
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
		<section className="bg-gray-200 px-4 pb-12 mx-auto sm:pb-16 sm:px-6 lg:px-8 xl:pb-32">
			<div className="max-w-4xl mx-auto text-center">
				<a id="community">
					<h2 className="text-center xs:text-4xl md:text-7xl pt-16 md:pt-20 text-gray-700">Community</h2>
				</a>
				<p className="mt-3 text-base leading-7 sm:mt-4 text-black mb-8">
					Join our rapidly growing community of players, chat with the devs and artists, interact with others players and have your say in shaping the future of the Kingdom of the Ethemerals.
				</p>
			</div>
			<div className="text-center md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-x-8 sm:grid lg:max-w-7xl m-auto text-gray-600">
				<div className="mx-auto text-center items-center justify-center w-64 h-64 bg-white py-10 px-4 mb-5 shadow-lg rounded font-light text-sm">
					<a className="cursor-pointer">
						<Image src="/icon_big_discord.png" alt="icon" width="100" height="100" />
					</a>
					<h3 className="font-bold text-2xl">Discord</h3>
					Chat live with the Ethemeral community, artist and developers
				</div>
				<div className="mx-auto text-center items-center justify-center w-64 h-64 bg-white py-10 px-4 mb-5 shadow-lg rounded font-light text-sm">
					<a className="cursor-pointer">
						<Image src="/icon_big_twitter.png" alt="icon" width="100" height="100" />
					</a>
					<h3 className="font-bold text-2xl">Twitter</h3>
					Follow @Ethemerals for the latest news and announcements
				</div>
				<div className="mx-auto text-center items-center justify-center w-64 h-64 bg-white py-10 px-4 mb-5 shadow-lg rounded font-light text-sm">
					<a className="cursor-pointer">
						<Image src="/icon_big_instagram.png" alt="icon" width="100" height="100" />
					</a>
					<h3 className="font-bold text-2xl">Instagram</h3>
					Get the latest art and design updates
				</div>
				<div className="mx-auto text-center items-center justify-center w-64 h-64 bg-white py-10 px-4 mb-5 shadow-lg rounded font-light text-sm">
					<a className="cursor-pointer">
						<Image src="/icon_big_github.png" alt="icon" width="100" height="100" />
					</a>
					<h3 className="font-bold text-2xl">Github</h3>
					Contribute and help develop the future of the Kingdom of the Ethemerals
				</div>
			</div>

			<div className="max-w-4xl mx-auto text-center pt-20 text-black">
				<h3 className="xs:text-xl sm:text-2xl font-extrabold leading-9 sm:leading-10">About the Team</h3>
				<p className="mt-3 text-base leading-7 sm:mt-4">
					Kingdom of the Ethemerals was created by a small team of Developers and Artists. We are crypto enthusiasts, grew up on anime and consume too many memes.
					<br></br>
					We are committed to creating an engaging universe and to build a vibrant community of players, taders, artists, and collectors.
				</p>
				<br></br>
				<p>To get in touch, please email ethemerals@gmail.com</p>
			</div>
			<div className="mx-auto my-8 p-4 flex">
				<img src={imgTeam} className="mx-auto justify-center" />
			</div>
		</section>
	);
};

export default Community;
