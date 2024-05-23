import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
  const [isFullscreenSearchOpen, setIsFullscreenSearchOpen] =
    useState<boolean>(false);

  const openFullscreenSearch = () => {
    setIsFullscreenSearchOpen(true);
  };

  const closeFullscreenSearch = () => {
    setIsFullscreenSearchOpen(false);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openFullscreenSearch}
        >
          Open Fullscreen Search
        </button>
        {isFullscreenSearchOpen && (
          <FullScreen onClose={closeFullscreenSearch} />
        )}
      </div>
    </>
  );
};

export default CustomApp;

const FullScreen: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // implement your search logic here, for example, redirect to a search result
    console.log("Search query:", searchQuery);
    onClose(); // close the fullscreen search after submitting
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={onClose}>
      </div>
      <div className="bg-white p-8 rounded shadow-lg z-[9999] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <form onSubmit={handleSubmit}>
            <input
              className="border border-gray-400 rounded px-4 py-2 mb-4 w-full"
              type="text"
              placeholder="Enter your search query..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
    </>
  );
};
