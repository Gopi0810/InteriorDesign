import React from 'react'
import Carousel from '@ui/carousel';
import { Link } from 'react-router-dom';
import MovingBrand from '@component/movingBrand';

const Home = () => {
  // const ip = '192.168.1.9:3000';
  const ip = '6bh4zzwn-3000.inc1.devtunnels.ms'
  const images = [
    `http://${ip}/interior1.jpg`,
    `http://${ip}/interior2.jpg`,
    `http://${ip}/interior3.jpg`
  ];
  const portfolio = [
    {
      "title": "Portfolio 1",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos "
    },
    {
      "title": "Portfolio 2",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos "
    },
    {
      "title": "Portfolio 3",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos "
    },
    {
      "title": "Portfolio 4",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos "
    },
    {
      "title": "Portfolio 5",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos "
    },
    {
      "title": "Portfolio 6",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos "
    }
  ];

  const service = [
    {
      'title': 'Design Consultation',
      'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos illo ipsa tenetur asperiores eligendi provident, ab libero consectetur modi.'
    },
    {
      'title': 'Full Room Makeovers',
      'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos illo ipsa tenetur asperiores eligendi provident, ab libero consectetur modi.'
    },
    {
      'title': 'Custom Furniture Design',
      'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id officiis nobis sequi consequatur vel in iusto delectus ex eos illo ipsa tenetur asperiores eligendi provident, ab libero consectetur modi.'
    }
  ]

  const brandLogo = [
  `http://${ip}/b1.png`,
  `http://${ip}/b2.png`,
  `http://${ip}/b3.png`,
  `http://${ip}/b4.png`,
  `http://${ip}/b5.png`,
  `http://${ip}/b6.png`,
  `http://${ip}/b7.png`,
  `http://${ip}/b8.png`,
  `http://${ip}/b9.png`,
  `http://${ip}/b10.png`,
  `http://${ip}/b11.png`,
  `http://${ip}/b12.png`
  ];

  return (
    <div id='home-page'>
      {/* Hero Section */}
      <section id="hero-section" className='h-mobile-menu'>
        <Carousel className='h-full' items={images}/>
      </section>
      {/* About Us Section */}
      <section id="about-us" className='px-4 py-16 bg-beige text-text md:px-[10vw]'>
        <h2 className='text-center text-6xl font-serif mb-3'>About Us</h2>
        <div className=" flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2">
            <p id="para1" className='text-lg mb-4 text-justify'>
              At our interior design company, we believe in creating spaces that reflect your personality and enhance your lifestyle. Our mission is to transform houses into homes, offices into inspiring workplaces, and spaces into experiences.
            </p>
            <p id="para2" className='text-lg mb-5 text-justify'>
              With a team of passionate designers and years of experience, we bring creativity, functionality, and a touch of elegance to every project we undertake.
            </p>
            <Link to='/'>
              <div id="cta-button" className='px-6 py-3 w-fit bg-cta text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-hover transition-colors duration-300 cursor-pointer'>Explore Our Services</div>
            </Link>
            </div>
          <img src={images[1]} alt="" className='rounded-xl md:w-1/2'/>
        </div>
      </section>
      {/* Services section */}
      <section id="service" className="bg-beige pb-10">
        <h2 className='text-center text-6xl font-serif mb-3 '>Services</h2>
        <div id="service-conatiner" className="my-6 flex flex-col gap-8 md:w-96 md:mx-auto lg:flex-row lg:mx-[10vw] lg:gap-10 lg:w-auto">
          {service.map((item, index) => (
            <div id={`service${index + 1}`} className="flex flex-col items-center  rounded-xl gap-3 lg:w-1/3 bg-primary p-6">
            <img src={images[index]} alt="" className='w-20 h-20'/>
            <h3>{item.title}</h3>
            <p className='text-justify text-lg'>{item.description}</p>
          </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <Link to='' className=''>
            <button type='button' className='px-6 py-3 bg-cta text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-hover transition-colors duration-300 cursor-pointer' >View All Services</button>
          </Link>
        </div>
      </section>

      {/* Portfolio section */}
      <section id="portfolio" className="bg-primary py-10">
        <div className="">
          <h2 className='text-center text-6xl font-serif mb-3 '>Portfolio</h2>
          <div id="portfolio-container" className='flex flex-wrap flex-row justify-center'>
            {portfolio.map((item, index) => (
              <div id={`portfolio${index}`} className="flex flex-col mb-5 w-96 m-10 bg-[#fff] rounded-xl md:w-1/3 lg:w-1/4">
                <img src={images[index % 3]} alt="" className='rounded-xl'/>
                <h3 className='px-5 mt-5'>{portfolio[index].title}</h3>
                <p className='px-5 mb-5 text-justify'>{portfolio[index].description}</p>
                <Link to='' className='align-middle block'>  
                  <button className='w-full text-center my-4 px-6 py-3 bg-cta text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-hover transition-colors duration-300 cursor-pointer'>View Details</button>
                </Link>
              </div>
            ))}
          </div>
          <div id="brand-carousel">
            <div className="flex items-center mb-10">
              <hr className="flex-grow border-t border-cta" />
              <h2 className="mx-4 text-2xl font-serif md:text-6xl">Partner Brand</h2>
              <hr className="flex-grow border-t border-cta" />
            </div>
            <MovingBrand images={brandLogo}/>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section id="footer" className="p-10 bg-text text-[#fff]">
        <div className='flex flex-col md:justify-around md:flex-row'>
          <div className="mb-5">
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p>123 Design Street Cityville,<br /> State 12345 Phone: (123) 456-7890<br /> Email: info@interiordesign.com</p>
          </div>
          <div className="mb-5">
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <div className='flex flex-col gap-1'>
              <Link to="">Home</Link>
              <Link to="">Portfolio</Link>
              <Link to="">About Us</Link>
              <Link to="">Services</Link>
              <Link to="">Contact Us</Link>
            </div>
          </div>
          <div className="mb-5">
            <h3 className='text-xl font-semibold mb-4'>Newsletter</h3>
            <div className="flex flex-row gap-1">
              <input type="email" className="bg-primary rounded-xl p-3 w-[200px] md:w-auto" placeholder='Enter Your Email' />
              <Link to=''>
                <button className='text-center px-6 py-3 bg-cta text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-hover transition-colors duration-300 cursor-pointer'>Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
