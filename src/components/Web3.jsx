import React from 'react';
import web3Mobile from '../assets/images/image-web-3-mobile.jpg';
import web3Desktop from '../assets/images/image-web-3-desktop.jpg';

const Web3 = () => {
  return (
    <section className='col-start-1 col-span-2'>
      <div className='w-full max-h-[500px] overflow-hidden '>
        <img
          className='max-w-full max-h-full object-cover lg:hidden'
          src={web3Mobile}
          alt='web 3'
        />
        <img
          className='max-w-full max-h-full object-cover hidden lg:block'
          src={web3Desktop}
          alt='web3'
        />
      </div>
      <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-12'>
        <h1 className='text-5xl font-extrabold text-veryDarkBlue'>
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <article className='my-8 lg:my-0 lg:mb-8 text-grayishBlue'>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
          </article>
          <button className='bg-softRed hover:bg-softOrange duration-300 text-white py-3 px-6 text-sm font-semibold tracking-[5px]'>
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Web3;
