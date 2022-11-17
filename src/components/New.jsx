import React from 'react';
import { newNewsData } from '../data/newNewsData';

const New = () => {
  const renderNewNewsItems = () => {
    return newNewsData.map((item, index) => {
      const { id, title, content } = item;
      return (
        <article
          key={id}
          className={
            index !== newNewsData.length - 1
              ? 'pb-2 mb-4 lg:mb-8 border-b border-b-grayishBlue'
              : null
          }>
          <h3 className='text-offWhite font-bold text-lg cursor-pointer hover:text-softOrange duration-300'>
            {title}
          </h3>
          <p className='my-2 lg:my-4'>{content}</p>
        </article>
      );
    });
  };

  return (
    <section className='bg-veryDarkBlue pt-8 placeholder:lg:py-4 mx-auto px-4 lg:px-8 my-16 lg:my-0 text-gray-400'>
      <h2 className='text-softOrange font-extrabold text-3xl lg:text-4xl'>
        New
      </h2>
      <div className='my-8'>{renderNewNewsItems()}</div>
    </section>
  );
};

export default New;
