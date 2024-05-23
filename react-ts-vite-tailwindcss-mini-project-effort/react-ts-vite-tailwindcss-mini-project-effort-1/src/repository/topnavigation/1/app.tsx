import React from 'react'

const CustomApp = () => {
  return (
    <>
        <Navbar/>
    </>
  )
}

export default CustomApp

const Navbar: React.FC = () => {
    return (
      <nav id="main-navbar" className="bg-gray-800">
        <ul className="flex">
          <li className="px-4 py-2"><a href="#" className="text-yellow-500">Home</a></li>
          <li className="px-4 py-2"><a href="#" className="text-yellow-500">About</a></li>
          <li className="px-4 py-2"><a href="#" className="text-yellow-500">Portfolio</a></li>
          <li className="px-4 py-2"><a href="#" className="text-yellow-500">FAQ</a></li>
          <li className="px-4 py-2"><a href="#" className="text-yellow-500">Contact</a></li>
        </ul>
      </nav>
    );
  };