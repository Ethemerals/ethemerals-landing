import Image from 'next/image';
import { config, animated } from '@react-spring/web';
import { usePWVSpring } from '@play-when-visible/react-spring';

const imgCom1 = '/community_1.png';
const imgCom2 = '/community_2.png';
const imgCom3 = '/community_3.png';
const imgCom4 = '/community_4.png';

const CommunityGraphic = () => {
	// const [com1Ref, com1Anim] = usePWVSpring({
	// 	// animation: {
	// 	// 	from: { opacity: 0, x: '8vw' },
	// 	// 	to: { opacity: 1, x: '0vw' },
	// 	// 	config: config.molasses,
	// 	// },
	// });

	// const [com2Ref, com2Anim] = usePWVSpring({
	// 	// animation: {
	// 	// 	from: { opacity: 0, x: '-12vw' },
	// 	// 	to: { opacity: 1, x: '0vw' },
	// 	// 	config: config.molasses,
	// 	// },
	// });

	// const [com3Ref, com3Anim] = usePWVSpring({
	// 	// animation: {
	// 	// 	from: { x: '2vw' },
	// 	// 	to: { x: '0vw' },
	// 	// },
	// });

	return (
		<div className="max-h-96 bg-gray-200">
			<div className="z-40">
				<img src={imgCom1} className="" alt={`left infomation graphic`} width="1297" height="700" />
			</div>
			{/* <div className="z-30">
				<animated.div style={charAnim}>
					<img src={`/splide/${charName}.png`} alt={`${charName} ethemeral character`} width="800" height="800" />
				</animated.div>
			</div>
			<animated.div style={rightBarAnim} className="right-side z-20 absolute ">
				<img src={`/splide/${charName}_right.png`} alt={`${charName} right information graphic`} width="250" height="800" />
			</animated.div> */}
		</div>
	);
};

export default CommunityGraphic;
