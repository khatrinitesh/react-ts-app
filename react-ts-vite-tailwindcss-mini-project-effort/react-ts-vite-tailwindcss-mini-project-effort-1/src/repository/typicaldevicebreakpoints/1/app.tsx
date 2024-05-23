import React from 'react';
import styled from 'styled-components';

// Define breakpoints
const breakpoints = {
    small: '576px',
    medium: '768px',
    large: '992px',
    extraLarge: '1200px',
  };

  // Example styled component with responsive styles
const StyledComponent = styled.div`
padding: 20px;
background-color: lightgray;

@media (min-width: ${breakpoints.small}) {
  background-color: lightblue;
}

@media (min-width: ${breakpoints.medium}) {
  background-color: lightgreen;
}

@media (min-width: ${breakpoints.large}) {
  background-color: lightcoral;
}

@media (min-width: ${breakpoints.extraLarge}) {
  background-color: lightsalmon;
}
`;

const CustomApp = () => {
  return (
    <>
         <StyledComponent>
        This component changes its background color based on screen size.
      </StyledComponent>
    </>
  )
}

export default CustomApp

