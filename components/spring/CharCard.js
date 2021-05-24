import { useEffect, useState, forwardRef, createRef } from 'react';
import LeftBar from './LeftBar';

const CharCard = ({ charName }) => {
	// const charName = 'compound';
	return (
		<div className="z-20 bg-gray-800">
			<img src={`./splide/${charName}.png`} alt={`${charName} image`} />
		</div>
		// <div className="flex justify-center mx-auto">
		// 	<div className="outer flex justify-center mx-auto">
		// 		<div className="inner bg-pink-500 flex justify-center mx-auto">
		// 			<LeftBar charName={charName} />
		// 			<div className="z-40">
		// 				<img src={`./splide/${charName}.png`} className="" alt={`${charName} image`} />
		// 			</div>
		// 			{/* <div className="right-side z-30 absolute ">
		// 				<img src={`./splide/${charName}_right.png`} className="" alt={`${charName} right bar`} />
		// 			</div> */}
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default CharCard;
