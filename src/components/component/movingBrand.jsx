import React from 'react';

const MovingBrand = ({ images }) => {
  return (
    <div className='overflow-hidden'>
      <div className='flex animate-marquee'>
        {images.map((image, index) => (
          <img key={index} src={image} alt="brand" className='w-32 h-auto mr-20' />
        ))}
        {images.map((image, index) => (
          <img key={index + images.length} src={image} alt="brand" className='w-32 h-auto mr-20' />
        ))}
      </div>
    </div>
  );
};

export default MovingBrand;
