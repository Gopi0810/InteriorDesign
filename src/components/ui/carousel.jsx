import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const Carousel = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  useEffect (() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='carousel-sontainer' className='w-full h-full overflow-hidden relative'>
        {items.map((item, index) => (
            <img src={item} alt={`slide ${index}`} className={`absolute z-10 w-full h-full object-cover ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`} />
        ))}
        <div id="text-container" className=' w-full h-full flex absolute top-0 z-20 justify-center items-center flex-col gap-7'>
            <div id="heading" className='text-4xl font-bold text-white text-center sm:text-[5vw]'>
                Elevate Your Living Spaces
            </div>
            <div id="subheading" className='text-2xl font-light text-white text-center sm:text-[2vw]'>
                Discover our curated collection of elegant and timeless designs to transform your home.
            </div>
            <Link to='/'><div id="cta-button" className='px-6 py-3 bg-cta text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-hover transition-colors duration-300 cursor-pointer'>Explore Our Services</div> </Link>
        </div>

    </div>
  );
};

export default Carousel;
