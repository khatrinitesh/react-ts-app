import React from 'react'

const CustomApp = () => {
  return (
    <div>
      <ClaymorphismBox/>
    </div>
  )
}

export default CustomApp

const ClaymorphismBox: React.FC = () => {
    return (
      <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
        <h1 className="text-2xl font-bold mb-4">Claymorphism Box</h1>
        <p className="text-gray-700">This is an example of claymorphism style box.</p>
      </div>
    );
  };
