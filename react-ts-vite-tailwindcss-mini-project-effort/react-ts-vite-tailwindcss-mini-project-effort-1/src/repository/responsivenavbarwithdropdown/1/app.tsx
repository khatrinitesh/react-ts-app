import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
      <Navbar/>
    </>
  )
}

export default CustomApp


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-white text-lg font-semibold">Logo</a>
            </div>
  
            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleNavbar}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
  
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
  
              {/* Dropdown menu */}
              <div className="relative">
                <button
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Services
                </button>
                <div className="absolute top-10 bg-gray-800 rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Service 1</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Service 2</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Service 3</a>
                </div>
              </div>
  
              <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      </nav>
    );
  };