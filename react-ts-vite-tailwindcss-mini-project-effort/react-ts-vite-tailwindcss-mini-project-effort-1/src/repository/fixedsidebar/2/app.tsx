import React,{useState } from 'react'

const CustomApp = () => {
  return (
    <>
       <MainContent />
    </>
  )
}

export default CustomApp

const Sidebar: React.FC = () => {
    return (
      <div className="bg-gray-800 text-white w-64 py-6 px-8 h-screen fixed top-0 left-0">
        <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
        <ul>
          <li className="my-2"><a href="#" className="text-blue-400 hover:text-blue-500">Link 1</a></li>
          <li className="my-2"><a href="#" className="text-blue-400 hover:text-blue-500">Link 2</a></li>
          <li className="my-2"><a href="#" className="text-blue-400 hover:text-blue-500">Link 3</a></li>
        </ul>
      </div>
    );
}

const MainContent: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }
  
    return (
      <div className="bg-gray-200 min-h-screen">
        {/* Hamburger menu */}
        <button onClick={toggleSidebar} className="absolute top-4 left-4 md:hidden">
          <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
  
        {/* Sidebar */}
        <div className={`transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} md:translate-x-0 md:relative md:static`}>
          {/* Include Sidebar component */}
          <Sidebar />
        </div>
  
        {/* Main content */}
        <div className="ml-64 md:ml-0 p-8">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>Your main content goes here.</p>
        </div>
      </div>
    );
  }
  