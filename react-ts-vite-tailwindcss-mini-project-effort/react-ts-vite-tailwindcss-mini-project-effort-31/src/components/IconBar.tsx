import React from 'react';
import { useiconbarStore } from '../store/iconbarStore';

const IconBar:React.FC = () => {

    const {activeTab,setActiveTab} = useiconbarStore();
  return (
    <>
       <div className="icon-bar items-center  justify-center flex gap-4 p-4 bg-gray-800">
      {/* Icon 1 - Home */}
      <div
        className={`icon items-center flex justify-center ${activeTab === 'home' ? 'text-blue-500' : 'text-white'} cursor-pointer`}
        onClick={() => setActiveTab('home')}
      >
        <i className="fas fa-home text-2xl"></i> {/* Example using FontAwesome Icon */}
        <span>Home</span>
      </div>

      {/* Icon 2 - About */}
      <div
        className={`icon items-center flex justify-center ${activeTab === 'about' ? 'text-blue-500' : 'text-white'} cursor-pointer`}
        onClick={() => setActiveTab('about')}
      >
        <i className="fas fa-info-circle text-2xl"></i>
        <span>About</span>
      </div>

      {/* Icon 3 - Services */}
      <div
        className={`icon items-center flex justify-center ${activeTab === 'services' ? 'text-blue-500' : 'text-white'} cursor-pointer`}
        onClick={() => setActiveTab('service')}
      >
        <i className="fas fa-cogs text-2xl"></i>
        <span>Services</span>
      </div>

      {/* Icon 4 - Contact */}
      <div
        className={`icon items-center flex justify-center ${activeTab === 'contact' ? 'text-blue-500' : 'text-white'} cursor-pointer`}
        onClick={() => setActiveTab('contact')}
      >
        <i className="fas fa-envelope text-2xl"></i>
        <span>Contact</span>
      </div>
    </div>
    </>
  );
}

export default IconBar;
