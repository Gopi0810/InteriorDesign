import React from 'react'

const Button = ({name, className}) => {
  return (
      <div id="cta-button" className={`hidden md:block px-6 py-3 bg-cta text-primary font-semibold text-lg rounded-lg shadow-md hover:bg-hover transition-colors duration-300 cursor-pointer ${className}`}>{name}</div>
  )
}

export default Button
