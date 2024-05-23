import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
      <DropdownApp/>
    </>
  )
}

export default CustomApp

const DropdownApp:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
         <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        Click me
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
        </>
    )
}


