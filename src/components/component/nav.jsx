import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@asset/logo.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false); // State for portfolio dropdown

  const handleMobileMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handlePortfolioDropdown = () => {
    setPortfolioOpen(prevState => !prevState);
  };

  return (
    <header>
      <nav className='h-16 w-full bg-primary text-text flex justify-between items-center px-5 fixed top-0 z-[30]'>
        <div id="logo" className="h-16">
          <Link to='/'>
            <img src={logo} alt="Logo" className=' h-full' />
          </Link>
        </div>

        {/* Laptop Menu */}
        <div id="laptop-menu" className='hidden md:flex gap-5'>
          <Link to="/">Home</Link>
          
          {/* Portfolio Dropdown */}
          <div className='relative'>
            <button onClick={handlePortfolioDropdown} className="flex items-center gap-1">
              Portfolio <i className={`fa-solid ${portfolioOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </button>
            {/* Dropdown menu for portfolio */}
            {portfolioOpen && (
              <div className="absolute top-full left-0 bg-primary shadow-lg rounded-md mt-2 w-40">
                <Link to="/portfolio/#tv-umit" className="block px-4 py-2 hover:bg-hover">TV Unit</Link>
                <Link to="/portfolio/#dressing" className="block px-4 py-2 hover:bg-hover">Dressing</Link>
                <Link to="/portfolio/#study-table" className="block px-4 py-2 hover:bg-hover">Study Table</Link>
                <Link to="/portfolio/#kitchen" className="block px-4 py-2 hover:bg-hover">Kitchen</Link>
                <Link to="/portfolio/#bedroom" className="block px-4 py-2 hover:bg-hover">Bedroom</Link>
                <Link to="/portfolio/#commercial-interior" className="block px-4 py-2 hover:bg-hover">Commercial Interior</Link>
                <Link to="/portfolio/#puja unit" className="block px-4 py-2 hover:bg-hover">Puja Unit</Link>
                <Link to="/portfolio/#wardrobe" className="block px-4 py-2 hover:bg-hover">Wardrobe</Link>
              </div>
            )}
          </div>

          <Link to="/#about-us">About Us</Link>
          <Link to="/service">Services</Link>
          <Link to="/#footer">Contact Us</Link>
        </div>

        <div id="cta-button" className='hidden md:block px-6 py-3 bg-cta text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-hover transition-colors duration-300 cursor-pointer'>
          Schedule a Consultation
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className='md:hidden'>
          <i className={`fa-solid text-3xl cursor-pointer ${menuOpen ? "fa-xmark" : "fa-bars"}`} onClick={handleMobileMenu}></i>
        </div>
      </nav>

      {/* Mobile Menu Options */}
      <div id="mobile-menu-option" className={`z-50 bg-primary w-full h-mobile-menu absolute left-0 top-16 transition-transform ease-in-out duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center flex-col gap-8">
          <Link to="/">Home</Link>
          
          {/* Portfolio Dropdown for Mobile */}
          <div className='relative'>
            <button onClick={handlePortfolioDropdown} className="flex items-center gap-1">
              Portfolio <i className={`fa-solid ${portfolioOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </button>
            {portfolioOpen && (
              <div className="bg-primary shadow-lg rounded-md mt-2 w-40">
                <Link to="/portfolio/#tv-umit" className="block px-4 py-2 hover:bg-hover">TV Unit</Link>
                <Link to="/portfolio/#dressing" className="block px-4 py-2 hover:bg-hover">Dressing</Link>
                <Link to="/portfolio/#study-table" className="block px-4 py-2 hover:bg-hover">Study Table</Link>
                <Link to="/portfolio/#kitchen" className="block px-4 py-2 hover:bg-hover">Kitchen</Link>
                <Link to="/portfolio/#bedroom" className="block px-4 py-2 hover:bg-hover">Bedroom</Link>
                <Link to="/portfolio/#commercial-interior" className="block px-4 py-2 hover:bg-hover">Commercial Interior</Link>
                <Link to="/portfolio/#puja unit" className="block px-4 py-2 hover:bg-hover">Puja Unit</Link>
                <Link to="/portfolio/#wardrobe" className="block px-4 py-2 hover:bg-hover">Wardrobe</Link>
              </div>
            )}
          </div>

          <Link to="/about">About Us</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact Us</Link>
          
          <div id="cta-button" className='px-6 py-3 bg-cta text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-hover transition-colors duration-300 cursor-pointer'>
            Schedule a Consultation
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
