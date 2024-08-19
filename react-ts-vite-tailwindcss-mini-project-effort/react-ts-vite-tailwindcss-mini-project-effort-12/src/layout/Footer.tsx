import React from 'react'

const Footer:React.FC = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer bg-black text-white items-center flex'>
      <div className="container mx-auto">
      <p>&copy; copyright {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
