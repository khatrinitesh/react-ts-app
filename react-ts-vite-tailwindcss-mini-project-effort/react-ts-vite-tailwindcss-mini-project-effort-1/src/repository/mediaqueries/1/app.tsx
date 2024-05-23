import React, { useState } from "react";

const CustomApp = () => {
 
  return (
    <>
        <MediaQueries/>
    </>
  );    
};

export default CustomApp;

const MediaQueries: React.FC = () => {
    return (
      <>
       <div class="text-center md:text-right">Centered text on small screens, left-aligned on medium screens and above</div>
      </>
    );
  };
  

