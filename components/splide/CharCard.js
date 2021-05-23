import { useEffect, useState, forwardRef, createRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import LeftBar from './LeftBar';

const CharCard = ({ charName, visible }) => {
	const ref = createRef();

	useEffect(() => {
		console.log(charName, visible);
	}, [visible]);

	return (
		<SplideSlide>
			<div className="container flex justify-center mx-auto">
				<div className="outer flex justify-center mx-auto">
					<div className="inner bg-pink-500 flex justify-center mx-auto">
						<LeftBar charName={charName} ref={ref} />
						<div className="z-40">
							<img src={`./splide/${charName}.png`} className="" alt={`${charName} image`} />
						</div>
						<div className="right-side z-30 absolute ">
							<div className="animate-wiggle">
								<img src={`./splide/${charName}_right.png`} className="" alt={`${charName} right bar`} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</SplideSlide>
	);
};

export default CharCard;
