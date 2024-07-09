import React from 'react'

const Footer = () => {
    const getCurrentYear = new Date().getFullYear();
  return (
    <footer className='bg-black text-white p-2'>
        <p>
            &copy; copyright {getCurrentYear}
        </p>
    </footer>
  )
}

export default Footer