import React, { useState } from 'react';

const Example:React.FC = () => {

    const handleSubmitter:SubmitHandler  = (data) => {
        console.log('Submitted data:', data);
        return true;
    }

   
  return (
    <>
        <ListComp onSubmit={handleSubmitter} />
    </>
  )
}

export default Example

type SubmitHandler = (data:{name:string;age:number}) => boolean;

interface UserProps {
    onSubmit: SubmitHandler;
  }
  

const ListComp:React.FC<UserProps> = ({onSubmit}) => {

    const handleSubmit = () => {
        const formData = {
          name: 'nitesh',
          age: 34
        };
        // Call the onSubmit function and handle its return value
        const success = onSubmit(formData);
        if (success) {
          alert('Form submitted successfully');
        } else {
          alert('Form submission failed');
        }
      };
    return(
        <>
         <button onClick={handleSubmit}>Submit</button>
        </>
    )
}