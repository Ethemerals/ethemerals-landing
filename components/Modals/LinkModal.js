import { useEffect, useState } from 'react';
import Links from '../../constants/Links';

const LinkModal = ({ toggle }) => {
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		const difference = +new Date(`${year}-9-1`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		let timer1 = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);

		return () => {
			clearTimeout(timer1);
		};
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval, index) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span key={index}>
				{timeLeft[interval]} {interval}{' '}
			</span>
		);
	});

	return (
		<div onClick={toggle} className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-40 bg-opacity-60 bg-black">
			<div className="mx-5 max-w-lg h-40 w-full relative border-gray-400 bg-opacity-100 bg-gray-700 border-2 rounded-xl flex justify-center">
				<div className="vertical-center text-center">
					<p className="text-xl">Mainnet Launch In:</p>
					<p className="text-base md:text-2xl pb-4"> {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
					<p className="text-xs md:text-sm">
						Can't wait? Join our{' '}
						<a href={Links.DISCORD} target="_blank" className="hover:text-white">
							discord
						</a>{' '}
						and become a beta tester
					</p>
				</div>
			</div>
		</div>
	);
};

export default LinkModal;
