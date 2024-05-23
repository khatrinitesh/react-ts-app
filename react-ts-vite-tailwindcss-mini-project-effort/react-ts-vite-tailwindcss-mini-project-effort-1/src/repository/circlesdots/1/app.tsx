import React from "react";

const CustomApp = () => {
  const dotsData = [
    { color: "bg-red-500" },
    { color: "bg-blue-500" },
    { color: "bg-green-500" },
    // Add more dots data as needed
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <Circle dots={dotsData} />
    </div>
  );
};

export default CustomApp;

interface Dot {
  color: string;
}
const Circle: React.FC<{ dots: Dot[] }> = ({ dots }) => {
  return (
    <>
      <div className="flex justify-center items-center space-x-2">
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${dot.color} shadow`}
          ></div>
        ))}
      </div>
    </>
  );
};
