import React, { useState, useEffect } from 'react';
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';

import CharCard from './CharCard';

const data = [
	{
		name: 'Rare Wind',
		description: '#a8edea → #fed6e3',
		css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
		height: 200,
	},
	{
		name: 'Saint Petersburg',
		description: '#f5f7fa → #c3cfe2',
		css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
		height: 400,
	},
	{
		name: 'Deep Blue',
		description: '#e0c3fc → #8ec5fc',
		css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
		height: 400,
	},
	{
		name: 'Ripe Malinka',
		description: '#f093fb → #f5576c',
		css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
		height: 400,
	},
	{
		name: 'Perfect White',
		description: '#fdfbfb → #ebedee',
		css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
		height: 400,
	},
	{
		name: 'Near Moon',
		description: '#5ee7df → #b490ca',
		css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
		height: 400,
	},
	{
		name: 'Wild Apple',
		description: '#d299c2 → #fef9d7',
		css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
		height: 200,
	},
	{
		name: 'Ladoga Bottom',
		description: '#ebc0fd → #d9ded8',
		css: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
		height: 400,
	},
	{
		name: 'Sunny Morning',
		description: '#f6d365 → #fda085',
		css: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
		height: 200,
	},
	{
		name: 'Lemon Gate',
		description: '#96fbc4 → #f9f586',
		css: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
		height: 400,
	},
	{
		name: 'Salt Mountain',
		description: ' #FFFEFF → #D7FFFE',
		css: 'linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)',
		height: 200,
	},
	{
		name: 'New York',
		description: ' #fff1eb → #ace0f9',
		css: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
		height: 400,
	},
	{
		name: 'Soft Grass',
		description: ' #c1dfc4 → #deecdd',
		css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
		height: 400,
	},
	{
		name: 'Japan Blush',
		description: ' #ddd6f3 → #faaca8',
		css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
		height: 200,
	},
];

const colors = ['red', 'black', 'hotpink', 'white', 'green'];

const chars = [
	{
		bgColor: 'red',
		name: 'compound',
	},
	{
		bgColor: 'yellow',
		name: 'binance',
	},
	{
		bgColor: 'green',
		name: 'luna',
	},
	{
		bgColor: 'pink',
		name: 'xlm',
	},
];

export default function SpringCarousel() {
	const [open, set] = useState(false);
	const [cardIndex, setCardIndex] = useState(0);
	const [oldIndex, setOldIndex] = useState(0);

	// const CurrentCharCard = () => <CharCard charName={chars[cardIndex].name} />;
	useEffect(() => {
		console.log('new', cardIndex);
	}, [cardIndex, oldIndex]);

	const handleNext = () => {
		const index = cardIndex;
		setCardIndex(index + 1);
		setOldIndex(index);
	};

	const handlePrevious = () => {
		const index = cardIndex;
		setCardIndex(index - 1);
		setOldIndex(index);
	};

	const bgColor = useSpring({
		to: { background: chars[cardIndex].bgColor },
		from: { background: chars[oldIndex].bgColor },
	});

	const cardTransitions = useTransition(cardIndex, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	const springApi = useSpringRef();
	const { size, ...rest } = useSpring({
		ref: springApi,
		config: config.stiff,
		from: { size: '20%', background: 'hotpink' },
		to: {
			size: open ? '100%' : '20%',
			background: open ? 'white' : 'hotpink',
		},
	});

	const transApi = useSpringRef();
	const transition = useTransition(open ? data : [], {
		ref: transApi,
		trail: 400 / data.length,
		from: { opacity: 0, scale: 0 },
		enter: { opacity: 1, scale: 1 },
		leave: { opacity: 0, scale: 0 },
	});

	// This will orchestrate the two animations above, comment the last arg and it creates a sequence
	// useChain(open ? [springApi, transApi] : [transApi, springApi]);
	useChain(open ? [springApi, transApi] : [transApi, springApi], [0, open ? 0.1 : 0.6]);

	return (
		<animated.div style={bgColor} className="caro-wrapper mt-8 overflow-visible">
			{/* <animated.div style={{ ...rest, width: size, height: size }} className="caro-container">
				{transition((style, item) => (
					<animated.div className="caro-item" style={{ ...style, background: item.css }} />
				))}
			</animated.div> */}

			{cardTransitions((styles, item) => {
				return item === 0 ? (
					<animated.div className="w-full h-full absolute" style={styles}>
						<CharCard charName={chars[0].name} />
					</animated.div>
				) : (
					''
				);
			})}
			{cardTransitions((styles, item) => {
				return item === 1 ? (
					<animated.div className="w-full h-full absolute" style={styles}>
						<CharCard charName={chars[1].name} />
					</animated.div>
				) : (
					''
				);
			})}
			{/* <animated.div>
        <CharCard charName={chars[0].name} />
      </animated.div>

      <CharCard charName={chars[1].name} />
      <CharCard charName={chars[2].name} /> */}

			<button className="absolute left-4" onClick={() => handlePrevious()}>
				Prev
			</button>
			<button className="absolute right-4" onClick={() => handleNext()}>
				Next
			</button>
		</animated.div>
	);
}
