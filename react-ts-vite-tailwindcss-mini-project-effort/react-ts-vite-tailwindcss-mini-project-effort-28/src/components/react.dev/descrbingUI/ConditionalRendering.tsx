import React, { useEffect, useState } from 'react';
import { isStream } from './../../../../node_modules/minipass/dist/esm/index';

const ConditionalRendering = () => {
  return (
    <div>
        <PeopleResult/>


    </div>
  );
}

export default ConditionalRendering;


// function Cup({guests}){
//     return(
//         <h2>Tea #{guests}</h2>
//     )
// }

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  
  function PeopleResult(){
    const [datapeople,setDatapeople] = useState([])

    useEffect(() => {
        console.log('Data has been updated:', datapeople);
        setDatapeople(people);
    },[])

    const chemists = datapeople.filter((person) => person.profession === 'chemist')

    return(
        <>
        <h1>Chemists</h1>
      <ul className='list-disc'>
        {/* Render chemists */}
        {chemists.map((chemist) => (
          <li key={chemist.id}>
            <h3>{chemist.name} - {chemist.profession}</h3>
          </li>
        ))}
      </ul>
      <hr/>
         <ul className='list-disc'>
         {datapeople.map((val) => (
            <>
             <li key={val.id}>
                <h3>{val.name} - {val.profession}</h3>
             </li>
            </> 
         ))}
        </ul>
        </>
       
    )
  }

function Item({name,isPacked}){
    if(isPacked){
        return <li>{name} ✓ <del>{name}</del></li>
    }
    else{
        return <li>{name} - example</li>
    }
}