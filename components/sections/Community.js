import { useEffect, useState } from 'react';
import Links from '../../constants/Links';

import { usePWVSpring } from '@play-when-visible/react-spring';
import { config, animated } from '@react-spring/web';

const imgS = './community/community_s.png';
const imgM = './community/community_m.png';
const imgL = './community/community_l.png';

{
	/* <div className=" bg-gray-100 font-light mx-auto text-center items-center justify-center w-64 h-64 py-8 px-4 mb-6 shadow rounded ">
<a href={Links.TWITTER} className="cursor-pointer">
  <img src="/icon_big_twitter.png" alt="icon" width="100" height="100" />
</a>
<h3 className="font-bold text-2xl">Twitter</h3>
Follow @Ethemerals for the latest news and announcements
</div> */
}

const SocialCard = ({ props }) => (
	<div className="shadow-lg rounded-lg p-4 bg-gray-100 relative mx-auto my-4 md:my-10 w-60 h-60">
		<a ref={props.ref} className="flex m-auto items-center w-24 h-24 justify-center cursor-pointer" href={props.href} target="_blank">
			<animated.img style={props.anim} src={`/${props.icon}.png`} alt="icon" width="80" height="80" />
		</a>
		<p className="text-gray-900 font-bold text-2xl mt-3">{props.title}</p>
		<p className="text-gray-500 text-sm">{props.description}</p>
	</div>
);

const Community = () => {
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
				<div className="text-center sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 md:max-w-3xl lg:max-w-5xl m-auto text-gray-700">
					<SocialCard
						props={{
							icon: 'icon_big_discord',
							title: 'Discord',
							description: 'Chat live with the Ethemeral community, artist and developers',
							ref: iconRef,
							anim: iconAnim,
							href: Links.DISCORD,
						}}
					/>
					<SocialCard
						props={{
							icon: 'icon_big_twitter',
							title: 'Twitter',
							description: 'Follow @Ethemerals for the latest news and announcements',
							ref: iconRef2,
							anim: iconAnim2,
							href: Links.TWITTER,
						}}
					/>
					<SocialCard
						props={{
							icon: 'icon_big_instagram',
							title: 'Instagram',
							description: 'Get the latest art and design updates',
							ref: iconRef3,
							anim: iconAnim3,
							href: Links.INSTAGRAM,
						}}
					/>
					<SocialCard
						props={{
							icon: 'icon_big_github',
							title: 'Github',
							description: 'Contribute and develop the future of the Kingdom of the Ethemerals',
							ref: iconRef4,
							anim: iconAnim4,
							href: Links.GITHUB,
						}}
					/>
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
