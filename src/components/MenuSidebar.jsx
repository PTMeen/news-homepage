import React from 'react';
import menuCloseIcon from '../assets/images/icon-menu-close.svg';

const MenuSidebar = ({ isNavbarOpen, toggleNavbar }) => {
  return (
    <div
      className={`bg-veryDarkBlue/50 w-full z-90 fixed h-screen top-0 z-10 duration-300 flex opacity-0 justify-end ${
        isNavbarOpen ? 'right-0 opacity-100' : 'right-[-105%]'
      } lg:hidden`}>
      <div className='bg-white h-full w-[250px] p-4'>
        <div className='text-right lg:hidden'>
          <button onClick={toggleNavbar}>
            <img src={menuCloseIcon} alt='close menu icon' />
          </button>
        </div>

        <nav className='text-veryDarkBlue flex flex-col mt-16 text-2xl lg:hidden'>
          <a className='hover:text-softOrange duration-200 m-4' href='#'>
            Home
          </a>
          <a className='hover:text-softOrange duration-200 m-4' href='#'>
            New
          </a>
          <a className='hover:text-softOrange duration-200 m-4' href='#'>
            Popular
          </a>
          <a className='hover:text-softOrange duration-200 m-4' href='#'>
            Trending
          </a>
          <a className='hover:text-softOrange duration-200 m-4' href='#'>
            Categories
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MenuSidebar;
