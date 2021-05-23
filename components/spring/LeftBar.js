import { useEffect, useState, forwardRef } from 'react';
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';

const LeftBar = ({ charName }) => {
	const [show, set] = useState(false);
	const transitions = useTransition(show, {
		from: { opacity: 0, x: 500 },
		enter: { opacity: 1, x: 0 },
		leave: { opacity: 0, x: 500 },
		// reverse: show,
		// delay: 200,
		// config: config.molasses,
	});

	useEffect(() => {
		set(true);
	}, []);

	return transitions(
		(styles, item) =>
			item && (
				<animated.div style={styles} className="left-side z-50 absolute">
					<img src={`./splide/${charName}_left.png`} className="" alt={`${charName} left bar`} />
				</animated.div>
			)
	);
};

export default LeftBar;
