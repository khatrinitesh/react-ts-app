import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const CustomApp = () => {
  return (
    <>
        <CurtainMenu/>
    </>
  )
}

export default CustomApp

const CurtainMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed right-0 bottom-0 m-4 p-2 bg-blue-500 text-white rounded-full shadow-lg focus:outline-none"
        >
          Open Menu
        </button>
  
        <Transition
          show={isOpen}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-white w-64 h-full shadow-lg">
              {/* Your menu content goes here */}
              <ul className="py-4">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 3</li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    );
  };