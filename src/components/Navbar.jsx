import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import menuIcon from '../assets/images/icon-menu.svg';
import MenuSidebar from './MenuSidebar';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);

  return (
    <>
      <div
        className={`flex justify-between items-center mx-auto w-[90%] max-w-[1240px] py-8 duration-300 lg:py-12`}>
        <div>
          <img className='scale-75' src={logo} alt='our logo' />
        </div>
        <nav className='hidden lg:block text-grayishBlue'>
          <a className='hover:text-softOrange duration-200 ml-12' href='#'>
            Home
          </a>
          <a className='hover:text-softOrange duration-200 ml-12' href='#'>
            New
          </a>
          <a className='hover:text-softOrange duration-200 ml-12' href='#'>
            Popular
          </a>
          <a className='hover:text-softOrange duration-200 ml-12' href='#'>
            Trending
          </a>
          <a className='hover:text-softOrange duration-200 ml-12' href='#'>
            Categories
          </a>
        </nav>
        <button className='lg:hidden' onClick={toggleNavbar}>
          <img src={menuIcon} alt='menu icon' />
        </button>
      </div>
      <MenuSidebar isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </>
  );
};

export default Navbar;
