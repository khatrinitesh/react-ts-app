import React from "react";

const CustomApp = () => {
  return(
    <>
     <StyledHR/>
    </>
  )
};

export default CustomApp;

interface StyledHrProps {
  color?: string;
  thickness: string;
}

const StyledHR: React.FC<StyledHrProps> = ({color,thickness}) => {
  return (
    <>
      <hr
        className={`border-${color} border-solid border-t ${thickness} my-4`}
        style={{ borderTopColor: color, borderTopWidth: thickness }}
      />
    </>
  );
};
