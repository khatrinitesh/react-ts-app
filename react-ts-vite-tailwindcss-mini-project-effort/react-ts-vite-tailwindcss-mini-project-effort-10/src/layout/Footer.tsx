import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer bg-[#00425a] text-white p-2'>
      <div className="container mx-auto">
        <p>&copy; copyright {currentYear}</p>
        </div>
    </footer>
  )
}

export default Footer