import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <div>
      <ExampleApp/>
    </div>
  )
}

export default CustomApp

interface MyData{
    id:number;
    name:string;
    age:number;

}

const ExampleApp:React.FC = () => {
    const [data,setData] = useState<MyData>({
        id:1,
        name:'john',
        age:34
    });

    const btnRemove = (propertyName:(keyof MyData)[]) => {
        const newData = {...data};
        propertyName.forEach(propertyName => {
            delete newData[propertyName]
        });
        setData(newData);
    }

    return(
        <>

        <p>Id: {data.id}</p>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <button onClick={() => btnRemove('name')}>&times;</button>
        <br/>
        <button onClick={() => btnRemove(['name','age','id'])}>&times; Name and ID</button>
        </>
    )
}