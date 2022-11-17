import React from 'react';
import { rankingData } from '../data/rankingData';

const Ranking = () => {
  const renderRankItems = () => {
    return rankingData.map((item) => {
      return (
        <div className='grid grid-col-3 gap-6 mb-8' key={item.id}>
          <div className='w-[100px] h-[150px]'>
            <img
              className='w-full h-full object-cover'
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className='col-start-2 col-span-3'>
            <p className='text-4xl text-grayishBlue/25 font-extrabold'>
              {item.id}
            </p>
            <h3 className='text-lg lg:text-xl text-veryDarkBlue font-extrabold my-4'>
              {item.title}
            </h3>
            <article>
              <p>{item.content}</p>
            </article>
          </div>
        </div>
      );
    });
  };

  return (
    <section className='text-grayishBlue mb-16 grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:mt-16'>
      {renderRankItems()}
    </section>
  );
};

export default Ranking;
