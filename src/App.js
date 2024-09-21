import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '@page/home';
import Nav from '@component/nav';
import About from '@page/about';
import Portfolio from '@page/portfolio';
import Contact from '@page/contact';
import Service from '@page/service';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/portfolio' element={<Portfolio />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} /> 
      </Routes>
    </div>
  )
}

export default App
