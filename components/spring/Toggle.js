import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
	const [isToggled, setToggle] = useState(false);

	const fade = useSpring({
		// fontSize: isToggled ? '2rem' : '5em',
		color: isToggled ? '#000' : 'green',
		transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(-50px,-50px,0)',
	});

	return (
		<div>
			<animated.div style={fade} className="w-96 h-96 bg-purple-900">
				Hello
			</animated.div>
			<button onClick={() => setToggle(!isToggled)}>Toggle</button>
		</div>
	);
};

export default Toggle;
