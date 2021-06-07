import Image from 'next/image';
import Links from '../../constants/Links';

import { isMobile } from 'react-device-detect';

import { usePWVSpring } from '@play-when-visible/react-spring';
import { config, animated } from '@react-spring/web';

// import CommunityGraphic from '../splide/CommunityGraphic';

const imgS = '/community_sm.jpg';
const imgM = '/community_md.jpg';
const imgL = '/community_lg.jpg';

const SocialCard = ({ props }) => (
	<div className="shadow-lg rounded-lg p-4 bg-gray-100 relative mx-auto my-4 md:my-10 w-60 h-60">
		<a ref={props.ref} className="flex m-auto items-center w-24 h-24 justify-center cursor-pointer" href={props.href} target="_blank">
			<animated.div style={props.anim}>
				<Image src={`/${props.icon}.png`} alt={`${props.icon} icon`} width="80" height="80" />
			</animated.div>
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
			<section className="bg-gray-200 text-gray-800 px-4 pb-4 mx-auto sm:pb-8 sm:px-6 lg:px-8 xl:pb-24 leading-normal">
				<div className="mx-auto p-4 z-10 pb-10 md:pb-20 max-w-5xl ">
					<a id="community">
						<h2 className="textMetric text-5xl md:text-7xl font-medium pt-20 md:pt-40 font-ubuntu overflow-hidden pb-4">Community</h2>
					</a>
					<p className="md:text-xl pb-4">
						Join our rapidly growing community of players, chat with the devs and artists, interact with other players and have your say in shaping the future of the Kingdom of the Ethemerals.
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
							description: 'Check out work in progress character designs and art submissions',
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
				<div className="mx-auto p-4 z-10 max-w-5xl ">
					<h3 className="text-3xl font-medium pt-20 md:pt-40 font-ubuntu textMetric">About the Team</h3>
					<p className="md:text-xl py-4">
						Kingdom of the Ethemerals is an on going project, created by a small talented team of Developers and Artists from around the globe. We strive to create beautiful and unique NFT assets to
						collect and enjoy!
					</p>
					<p className="md:text-xl py-4">We are committed to creating an engaging universe and to build a vibrant community of players, traders, artists and collectors.</p>
					<p className="md:text-xl py-4">To get in touch, send an email to contact@ethemerals.com</p>
				</div>
			</section>
			<div className="bg-gray-200 hidden md:flex justify-center">
				<Image src={imgL} alt="four artist and developers" width="1920" height="555" />
			</div>
			<div className="bg-gray-200 flex md:hidden justify-center">
				<Image src={imgS} alt="four artist and developers" width="1080" height="407" />
			</div>
		</>
	);
};

export default Community;
