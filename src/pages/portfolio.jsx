import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioSections = [
  { id: 'tv-units', title: 'TV Units' },
  { id: 'dressing-areas', title: 'Dressing Areas' },
  { id: 'study-tables', title: 'Study Tables' },
  { id: 'kitchens', title: 'Kitchens' },
  { id: 'bedrooms', title: 'Bedrooms' },
  { id: 'commercial-interiors', title: 'Commercial Interiors' },
  { id: 'puja-units', title: 'Puja Units' },
  { id: 'wardrobes', title: 'Wardrobes' },
];

const Carousel = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length),
      3000
    );

    return () => resetTimeout();
  }, [currentIndex, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  // const ip = '192.168.1.9:3000';
  const ip = '6bh4zzwn-3000.inc1.devtunnels.ms'
  const images = [
    `http://${ip}/interior1.jpg`,
    `http://${ip}/interior2.jpg`,
    `http://${ip}/interior3.jpg`
  ];
  return (
    <div className="relative overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">{title}</h2>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img src={item} alt="Hello" className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-amber-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={goToPrevious} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200">
        <ChevronLeft className="w-6 h-6 text-amber-900" />
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200">
        <ChevronRight className="w-6 h-6 text-amber-900" />
      </button>
    </div>
  );
};

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">

      <main className="container mx-auto px-4 pt-20 md:pt-24 pb-12">
        {portfolioSections.map((section) => (
          <section key={section.id} id={section.id} className="mb-12 md:mb-16">
            <Carousel
              title={section.title}
              items={[
                {
                  image: `/placeholder.svg?height=300&width=400&text=${section.title} 1`,
                  title: `${section.title} Project 1`,
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                  image: `/placeholder.svg?height=300&width=400&text=${section.title} 2`,
                  title: `${section.title} Project 2`,
                  description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                  image: `/placeholder.svg?height=300&width=400&text=${section.title} 3`,
                  title: `${section.title} Project 3`,
                  description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
              ]}
            />
          </section>
        ))}
      </main>

      <footer className="bg-amber-800 text-amber-100 py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">&copy; 2023 Interior Design Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}