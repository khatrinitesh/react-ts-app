import React, { useState } from "react";

const CustomApp = () => {
 
  return (
    <>
      <Contact />
    </>
  );
};

export default CustomApp;

const Contact:React.FC = () => {
    const email = 'example@example.com';
    return(
        <>
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to email us:</p>
        <a href={`mailto:${email}?subject=Inquiry&body=Hi, I have a question regarding...`}>{email}</a>
        </>
    )
}