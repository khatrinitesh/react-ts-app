import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer bg-black text-white p-2'>
      <div className="container mx-auto">
        <p className=''>&copy; copyright {currentYear}</p>
        </div>
    </footer>
  )
}

export default Footer
