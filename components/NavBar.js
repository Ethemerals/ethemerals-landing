import React, {useState, useEffect} from 'react';
import Link from 'next/link';


const Navbar = ({ toggle, isOpen, logo }) => {

  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [navbarOpac, setNavbarOpac] = useState(false);

  let headerCSS = 'top-0 left-0 right-0 z-20 fixed bg-black xs:bg-opacity-0 md:bg-opacity-0';
  let headerCSSOpac = 'top-0 left-0 right-0 z-20 fixed bg-black xs:bg-opacity-0 md:bg-opacity-100';

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavbarOpac(true);
    } else {
      setNavbarOpac(false);
    }
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    // <!-- navbar goes here -->
    <header className={navbarOpac ? headerCSSOpac : headerCSS }>
      <nav className="container mx-auto px-6 md:px-10 py-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between">

            <div className="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <a href="#">
                  <img src={logo} alt="brand icon" width="40" height="40" className="hidden md:flex"/>

                </a>
              </div>

              {/* <!-- primary nav --> */}
              <div className="hidden md:flex items-center space-x-1">

              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#ethemerals" className="px-3 text-white hover:text-gray-300">Ethemerals</a>
              <a href="#battle" className="px-3 text-white hover:text-gray-300">Battle</a>
              <a href="#elf" className="px-3 text-white hover:text-gray-300">$ELF</a>
              <a href="#land" className="px-3 text-white hover:text-gray-300">Land</a>
              <a href="#community" className="px-3 text-white hover:text-gray-300">Community</a>
              <a href="#" className="py-2 px-3 bg-pink-600 hover:bg-yellow-300 text-white hover:text-yellow-800 rounded transition duration-300">Play Now</a>
            </div>


          </div>
        </div>


      </nav>
      <div className="justify-center">
        {/* <!-- mobile menu --> */}
        {/* <!-- mobile button goes here --> */}
        <div className="md:hidden flex items-center fixed top-5 right-10">
          <button className="mobile-menu-button" onClick={toggle}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className={
          isOpen ? "mobile-menu md:hidden fixed top-14 right-0 w-full px-4 bg-black bg-opacity-50 text-right py-4" : "hidden"
        }>
          <a onClick={toggle} href="#" className="block py-2 px-7 text-sm text-right text-white hover:text-gray-300">Home</a>
          <a onClick={toggle} href="#ethemerals" className="block py-2 px-7 text-sm text-right text-white hover:text-gray-300">Ethemerals</a>
          <a onClick={toggle} href="#battle" className="block py-2 px-7 text-sm text-right text-white hover:text-gray-300">Battle</a>
          <a onClick={toggle} href="#elf" className="block py-2 px-7 text-sm text-right text-white hover:text-gray-300">$ELF Token</a>
          <a onClick={toggle} href="#land" className="block py-2 px-7 text-sm text-right text-white hover:text-gray-300">Land</a>
          <a onClick={toggle} href="#community" className="block py-2 px-7 text-sm text-right text-white hover:text-gray-300">Community</a>
          <a onClick={toggle} href="#" className="block py-2 px-7 text-sm text-right text-white hover:text-gray-300">Play Now</a>
          <div onClick={toggle} className="fixed w-full h-screen mt-16"></div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;