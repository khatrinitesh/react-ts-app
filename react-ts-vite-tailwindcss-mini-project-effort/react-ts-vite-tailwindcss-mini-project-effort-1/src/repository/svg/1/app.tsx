import React from "react";

const CustomApp = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <SvgComponent className="w-16 h-16 text-blue-500" />
      </div>
    </>
  );
};

export default CustomApp;

interface SvgProps {
  className?: string;
}

const SvgComponent: React.FC<SvgProps> = ({ className }) => {
  return (
    <svg
      className={`fill-current ${className}`} // Use the className prop passed to the SVG component
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {/* SVG content */}
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21V3a9 9 0 0 0 0 18zm0-2a7 7 0 0 1 0-14V5.83A5 5 0 0 0 12 7v2a3 3 0 0 1 0 6v2.17a5 5 0 0 0 0 9.66V19z" />
    </svg>
  );
};
