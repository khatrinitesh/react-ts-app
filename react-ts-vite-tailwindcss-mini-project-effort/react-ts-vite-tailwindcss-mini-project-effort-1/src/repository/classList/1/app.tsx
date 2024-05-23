import React from "react";

const CustomApp = () => {
    const isActive = false;
  return <div>
    <ClassList isActive={isActive}/>
  </div>;
};

export default CustomApp;

interface Props {
  isActive: boolean;
}

const ClassList: React.FC<Props> = ({ isActive }) => {
  return (
    <>
      <div
        className={`flex ${
          isActive ? "bg-blue-500 text-white" : "bg-gray-200"
        } p-4 rounded-md shadow`}
      >
        <p>{isActive ? "Active" : "Inactive"}</p>
      </div>
    </>
  );
};
