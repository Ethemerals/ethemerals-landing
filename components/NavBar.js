import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ toggle, isOpen, logo, symbol }) => {
	const [navbarOpac, setNavbarOpac] = useState(false);

	const webappMainURL = 'https://d1b1rc939omrh2.cloudfront.net';

	let headerCSS = 'top-0 left-0 right-0 z-20 fixed bg-black md:bg-opacity-0';
	let headerCSSOpac = 'top-0 left-0 right-0 z-20 fixed bg-black md:bg-opacity-100';

	let headerCSSXS = 'top-0 left-0 right-0 z-20 fixed bg-black md:hidden flex justify-center mx-auto w-full bg-opacity-0';
	let headerCSSOpacXS = 'top-0 left-0 right-0 z-20 fixed bg-customblue-dark md:hidden flex justify-center mx-auto w-full bg-opacity-100';

	const changeBackground = () => {
		if (window.scrollY >= 100) {
			setNavbarOpac(true);
		} else {
			setNavbarOpac(false);
		}
	};

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		window.addEventListener('scroll', changeBackground);
	}

	return (
		// <!-- navbar goes here -->
		<>
			<header className={navbarOpac ? headerCSSOpac : headerCSS}>
				<div className="hidden md:flex">
					<nav className="container mx-auto px-6 md:px-10 py-2">
						<div className="mx-auto px-4">
							<div className="flex justify-between">
								<div className="flex space-x-4">
									{/* <!-- logo --> */}
									<div>
										<a href="#">
											<img src={logo} alt="brand icon" width="40" height="40" className="hidden md:flex" />
										</a>
									</div>

									{/* <!-- primary nav --> */}
									<div className="flex items-center space-x-1"></div>
								</div>

								{/* <!-- secondary nav --> */}
								<div className="flex items-center space-x-1">
									<a href="#ethemerals" className="px-3 text-white hover:text-gray-300">
										Ethemerals
									</a>
									<a href="#battle" className="px-3 text-white hover:text-gray-300">
										Battle
									</a>
									<a href="#elf" className="px-3 text-white hover:text-gray-300 flex items-center">
										<img src={symbol} className="w-6 h-6"></img>
										<span className="pl-1">ELF</span>
									</a>
									<a href="#land" className="px-3 text-white hover:text-gray-300">
										Land
									</a>
									<a href="#community" className="px-3 text-white hover:text-gray-300">
										Community
									</a>
									<a href={webappMainURL} className="py-2 px-3 bg-pink-600 hover:bg-yellow-300 text-white hover:text-blue-900 shadow-lg rounded transition duration-300">
										Open App
									</a>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</header>
			<header className={navbarOpac ? headerCSSOpacXS : headerCSSXS}>
				<nav>
					{/* <!-- mobile menu --> */}
					{/* <!-- mobile button goes here --> */}
					<div className="flex items-center w-screen justify-between xs:space-x-2 sm:space-x-20">
						<div className="mt-2  -ml-2 px-4">
							<a href="#">
								<Image src="/icon_xs.png" alt="icon" width="34" height="34" />
							</a>
						</div>

						<span className="block px-4 text-yellow-400 uppercase font-bold text-sm text-center">Kingdom of the Ethemerals</span>

						<button className="mobile-menu-button px-4 py-2" onClick={toggle}>
							<svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
					<div className={isOpen ? 'md:hidden w-full flex justify-center' : 'hidden'}>
						<div onClick={toggle} className="fixed w-full h-screen"></div>
						<div className="fixed top-20 w-3/4 justify-center font-bold rounded-2xl bg-gray-200 text-gray-500 text-center shadow-2xl bg-opacity-100 py-4 mx-auto border-4 border-gray-500">
							<a onClick={toggle} href="#" className="block pt-0 pb-4 border-b border-gray-300">
								Home
							</a>
							<a onClick={toggle} href="#ethemerals" className="block py-4 border-b border-gray-300">
								Ethemerals
							</a>
							<a onClick={toggle} href="#battle" className="block py-4 border-b border-gray-300">
								Battle
							</a>
							<a onClick={toggle} href="#elf" className="block py-4 border-b border-gray-300">
								$ELF Token
							</a>
							<a onClick={toggle} href="#land" className="block py-4 border-b border-gray-300">
								Land
							</a>

							<a onClick={toggle} href="#community" className="block py-4 border-b border-gray-300">
								Community
							</a>
							<a onClick={toggle} href="#roadmap" className="block py-4 border-b border-gray-300">
								Roadmap
							</a>
							<div>
								<a onClick={toggle} href={webappMainURL} className="block pt-4 pb-0 text-pink-600 hover:text-gray-300">
									Open App
								</a>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
