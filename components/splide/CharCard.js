import { config, animated } from '@react-spring/web';
import { usePWVSpring } from '@play-when-visible/react-spring';

const CharCard = ({ charName }) => {
	const [leftRef, leftBarAnim] = usePWVSpring({
		animation: {
			from: { opacity: 0, x: '8vw' },
			to: { opacity: 1, x: '0vw' },
			config: config.molasses,
		},
	});

	const [rightRef, rightBarAnim] = usePWVSpring({
		animation: {
			from: { opacity: 0, x: '-12vw' },
			to: { opacity: 1, x: '0vw' },
			config: config.molasses,
		},
	});

	const [charRef, charAnim] = usePWVSpring({
		animation: {
			from: { x: '2vw' },
			to: { x: '0vw' },
		},
	});

	return (
		<div ref={rightRef} className="inner flex justify-center mx-auto">
			<div ref={leftRef} className="left-side z-40 md:w-100 absolute">
				<animated.div style={leftBarAnim}>
					<img src={`./splide/${charName}_left.png`} className="" alt={`${charName} left bar`} />
				</animated.div>
			</div>
			<div ref={charRef} className="z-30">
				<animated.div style={charAnim}>
					<img src={`./splide/${charName}.png`} alt={`${charName} ethemeral character`} />
				</animated.div>
			</div>
			<animated.div style={rightBarAnim} className="right-side z-20 absolute ">
				<img src={`./splide/${charName}_right.png`} alt={`${charName} right bar`} />
			</animated.div>
		</div>
	);
};

export default CharCard;
