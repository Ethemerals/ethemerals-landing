import React, { useState, useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';
import Links from '../../constants/Links';
import { useTransition, useSpring, animated, config } from '@react-spring/web';
import useMeasure from 'react-use-measure';

import MobileNavItems from './MobileMenuItems';
import MenuItems from './MenuItems';

const logo = 'https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Fethemavator?alt=media&token=bf7c5413-970a-4705-afca-cd71a46b4ba0';

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isTop, setIsTop] = useState(true);

	const mobileNavTransition = useTransition(isVisible, {
		from: { y: 600, opacity: 0 },
		enter: { x: 0, y: 50, opacity: 1 },
		leave: { y: 50, opacity: 0 },
	});

	const navbarTopStyles = useSpring({
		backgroundColor: isTop ? 'rgba(14,21,28,0)' : 'rgba(14,21,28,1)',
	});

	const toggle = () => {
		setIsVisible(!isVisible);
	};

	const changeIsTop = () => {
		if (window.scrollY < 20) {
			setIsTop(true);
		} else {
			setIsTop(false);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			window.addEventListener('scroll', changeIsTop);
		}
	}, []);

	return (
		// <!-- navbar goes here -->
		<>
			<animated.header style={navbarTopStyles} className="top-0 left-0 right-0 z-50 fixed">
				<div className="hidden md:flex">
					<nav className="container mx-auto md:px-10 py-2">
						<div className="flex justify-between">
							{/* <!-- logo --> */}
							<div>
								<a href="#">
									<img src={logo} alt="brand icon" width="40" height="40" className="hidden md:flex" />
								</a>
							</div>

							{/* <!-- secondary nav --> */}
							<MenuItems />
						</div>
					</nav>
				</div>
			</animated.header>

			<animated.header style={navbarTopStyles} className="top-0 left-0 right-0 z-50 fixed mx-auto w-full md:hidden">
				<nav>
					{/* <!-- mobile menu --> */}
					{/* <!-- mobile button goes here --> */}
					<div className="flex items-center w-screen justify-between sm:px-10">
						<div className="mt-2 pl-2">
							<a href="#">
								<Image src="/icon_xs.png" alt="icon" width="30" height="30" />
							</a>
						</div>

						<span className="text-yellow-400 uppercase font-bold text-sm">Kingdom of the Ethemerals</span>

						<button className="pr-2" onClick={toggle}>
							<svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</nav>
				{mobileNavTransition(
					(style, item) =>
						item && (
							<animated.div style={style} className="flex justify-center">
								<div onClick={toggle} className="fixed w-full h-screen"></div>
								<MobileNavItems toggle={toggle} />
							</animated.div>
						)
				)}
			</animated.header>
		</>
	);
};

export default Navbar;
