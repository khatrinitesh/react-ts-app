import React from 'react'

const CustomApp = () => {
  return (
    <>
      <Header/>
    </>
  )
}

export default CustomApp

const Header: React.FC = () => {
    return (
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-semibold">Logo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">Services</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
