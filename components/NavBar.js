import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Links from '../constants/Links';

const webappMainURL = Links.APP;

const Navbar = ({ toggle, isOpen, logo, symbol }) => {
	const [navbarOpac, setNavbarOpac] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 20) {
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
			<header className={`top-0 left-0 right-0 z-20 fixed bg-customblue-dark md:bg-opacity-0 ${navbarOpac ? 'animate-navbarOn' : ''}`}>
				<div className="hidden md:flex">
					<nav className="container mx-auto md:px-10 py-2">
						<div className="flex justify-between">
							{/* <!-- logo --> */}
							<div>
								<a href="#">
									<img src={logo} alt="brand icon" width="40" height="40" className="hidden md:flex" />
								</a>
							</div>

							{/* <!-- primary nav --> */}
							<div className="flex items-center space-x-1"></div>

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
					</nav>
				</div>
			</header>
			<header className={`top-0 left-0 right-0 z-20 fixed bg-customblue-dark mx-auto w-full bg-opacity-0 md:hidden ${navbarOpac ? 'animate-navbarOn' : ''}`}>
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
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
					<div className={isOpen ? 'w-full flex justify-center animate-mobileMenuOn' : 'hidden'}>
						<div onClick={toggle} className="fixed w-full h-screen"></div>
						<div className="fixed top-20 w-3/4 justify-center font-bold rounded-2xl text-gray-300 text-center shadow-2xl bg-opacity-100 py-4 mx-auto border-4 border-gray-800 bg-customblue-dark">
							<a onClick={toggle} href="#" className="block pt-0 pb-4 border-b border-gray-800">
								Home
							</a>
							<a onClick={toggle} href="#ethemerals" className="block py-4 border-b border-gray-800">
								Ethemerals
							</a>
							<a onClick={toggle} href="#battle" className="block py-4 border-b border-gray-800">
								Battle
							</a>
							<a onClick={toggle} href="#elf" className="block py-4 border-b border-gray-800">
								$ELF Token
							</a>
							<a onClick={toggle} href="#land" className="block py-4 border-b border-gray-800">
								Land
							</a>
							<a onClick={toggle} href="#community" className="block py-4 border-b border-gray-800">
								Community
							</a>
							<a onClick={toggle} href="#roadmap" className="block py-4 border-b border-gray-800">
								Roadmap
							</a>
							<div>
								<a onClick={toggle} href={webappMainURL} className="block pt-4 pb-0 text-pink-600">
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
