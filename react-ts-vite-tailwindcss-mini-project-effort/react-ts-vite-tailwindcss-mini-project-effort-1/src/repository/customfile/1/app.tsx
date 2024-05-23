import React, { useState } from 'react';


const CustomApp = () => {
  return (
    <>
        <CustomFileInput/>
    </>
  )
}

export default CustomApp

const CustomFileInput: React.FC = () => {
    const [fileName, setFileName] = useState<string>('');
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]; // Get the first file selected
      if (file) {
        setFileName(file.name);
        // Here you can do whatever you want with the file, for example, upload it to a server
      }
    };
  
    return (
      <div>
        <label htmlFor="fileInput" className="block font-medium text-gray-700">
          Upload File
        </label>
        <div className="mt-2 flex items-center">
          <span className="mr-2">{fileName || 'No file chosen'}</span>
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
            Browse
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
    );
  };

