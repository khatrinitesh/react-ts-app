import React, { useState, useEffect } from "react";
// import "./style.css";
import { styled } from 'styled-components';



const TextArea1 = styled.textarea`
    resize:none
`

const CustomApp: React.FC = () => {

  return (
    <>
      <MyComponent/>
    </>
  );
};

export default CustomApp;

const MyComponent: React.FC = () => {
    return (
      <div>
        <TextArea1></TextArea1>
      </div>
    );
  };