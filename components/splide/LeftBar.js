import { useEffect, useState, forwardRef } from 'react';

const LeftBar = forwardRef(({ charName }, ref) => {
	return (
		<div ref={ref} className="left-side z-50 absolute animate-bounce">
			<img src={`./splide/${charName}_left.png`} className="" alt={`${charName} left bar`} />
		</div>
	);
});

export default LeftBar;
