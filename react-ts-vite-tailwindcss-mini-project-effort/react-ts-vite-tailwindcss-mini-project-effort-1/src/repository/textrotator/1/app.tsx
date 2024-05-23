import React from "react";
import styled, { keyframes } from 'styled-components';

const CustomApp = () => {
  return (
    <>
     <RotatingText/>
    </>
  )
};

export default CustomApp;

// Keyframes for animations
const rotateTextUp = keyframes`
  0% {
    transform: translate3d(0, 80px, 0);
    opacity: 0;
  }
  
  20%, 80% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  
  100% {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }
`;

const fadeTextIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 80px, 0);
  }
  
  50%, 100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// Styled components
const RotatingTextContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  text-align: center;
`;

const RotatingTextContent = styled.div`
  position: relative;
  width: 100%;
`;

const RotatingTextDescription = styled.p`
  font-family: 'Georgia', serif;
  font-style: italic;
  font-size: 14px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const RotatingTextAdjective = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 40px;
  left: 0;
  margin-bottom: 0;
  margin-top: 30px;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  top: 0;

  @media (min-width: 768px) {
    font-size: 70px;
  }

  &:nth-of-type(1) {
    animation: ${rotateTextUp} 1.5s .75s;
  }

  &:nth-of-type(2) {
    animation: ${rotateTextUp} 1.5s 2s;
  }

  &:nth-of-type(3) {
    animation: ${fadeTextIn} 1.5s 3.25s forwards;
  }
`;

const TwitterLink = styled.a`
  bottom: 0;
  position: fixed;
  right: 0;
  width: 50px;
`;

const RotatingText: React.FC = () => {
    return (
      <RotatingTextContainer>
        <RotatingTextContent>
          <RotatingTextDescription>
            I'll make your website&hellip;
          </RotatingTextDescription>
          <RotatingTextAdjective>beautiful</RotatingTextAdjective>
          <RotatingTextAdjective>maintainable</RotatingTextAdjective>
          <RotatingTextAdjective>perfect 👌</RotatingTextAdjective>
        </RotatingTextContent>
  
        {/* Shameless plug 😉 */}
        <TwitterLink href="https://twitter.com/KeenanPayne_" title="Follow me on Twitter" target="_blank">
          <img src="https://assets.codepen.io/174608/twitter.svg" alt="Twitter Logo" />
        </TwitterLink>
      </RotatingTextContainer>
    );
  };
  