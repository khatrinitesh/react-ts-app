import React from 'react';

const CurlyBraces = () => {
  return (
    <div>
      <ToDoList/>
    </div>
  );
}

export default CurlyBraces;


const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };

  
function ToDoList(){
    return(
        <>
        <div style={person.theme}>
        <h1>{person.name}</h1>
        </div>
        </>
    )
  }