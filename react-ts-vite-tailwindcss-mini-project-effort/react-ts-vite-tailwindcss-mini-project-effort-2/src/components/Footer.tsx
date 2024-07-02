import React from 'react'

const Footer:React.FC = () => {

      // Function to get the current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className='footer bg-black p-2'>
        <p className='text-white font-bold'>Copyright &copy; {getCurrentYear()}</p>
    </footer>
  )
}

export default Footer