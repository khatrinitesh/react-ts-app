import React,{useState} from "react";

const CustomApp = () => {
  return <div>
    <CustomCheckbox/>
  </div>;
};

export default CustomApp;

const CustomCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="appearance-none cursor-pointer h-6 w-6 rounded border-2 border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="ml-2 text-lg">Custom Checkbox</span>
      </div>
      {isChecked && <>Checked</>}
    </>
  );
};
