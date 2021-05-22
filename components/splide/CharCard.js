import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const CharCard = ({ charName }) => {
	console.log(charName);
	return (
		<SplideSlide>
			<div className="container flex justify-center mx-auto">
				<div className="outer flex justify-center mx-auto">
					<div className="inner bg-pink-500 flex justify-center mx-auto">
						<div className="left-side z-50 absolute animate-bounce">
							<img src={`./splide/${charName}_left.png`} className="" alt={`${charName} left bar`} />
						</div>
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
