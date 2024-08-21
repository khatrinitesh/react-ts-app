import React from 'react'

const Footer:React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-blue-400 p-2'>
        <div className="container mx-auto text-center">
            <p className='text-white'>&copy; copyright {currentYear}</p>
        </div>
    </footer>
  )
}

export default Footer