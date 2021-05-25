import { useEffect, useState, useRef } from 'react';
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';
import { usePWVSpring } from '@play-when-visible/react-spring';
import { isMobile } from 'react-device-detect';

const LeftBar = ({ charName }) => {
	const [leftRef, leftBarAnim] = usePWVSpring({
		animation: {
			from: { opacity: 0, x: '10vw' },
			to: { opacity: 1, x: 0 },
			config: config.molasses,
		},

		// delay: 200,
		// config: config.molasses,
	});

	const [rightRef, rightBarAnim] = usePWVSpring({
		animation: {
			from: { opacity: 0, x: '-20vw' },
			to: { opacity: 1, x: 0 },
			config: config.molasses,
		},

		// delay: 200,
		// config: config.molasses,
	});

	return (
		<div ref={rightRef} className="inner flex justify-center mx-auto">
			<div ref={leftRef} className="left-side z-40 md:w-100 absolute">
				<animated.div style={leftBarAnim}>
					<img src={`./splide/${charName}_left.png`} className="" alt={`${charName} left bar`} />
				</animated.div>
			</div>
			<div className="z-30">
				<img src={`./splide/${charName}.png`} alt={`${charName} image`} />
			</div>
			<animated.div style={rightBarAnim} className="right-side z-20 absolute ">
				<img src={`./splide/${charName}_right.png`} alt={`${charName} right bar`} />
			</animated.div>
		</div>
	);
};

export default LeftBar;
