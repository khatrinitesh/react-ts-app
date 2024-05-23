import React from 'react'

const CustomApp = () => {
  return (
    <div>
      <MyComponent value={444}/>
    </div>
  )
}

export default CustomApp

interface Props {
    value:any; // accept any type of value 
}

const isNumeric = (value:any):boolean => {
    return !isNaN(value); // check if the value is not NAN
}

const MyComponent: React.FC<Props> = ({ value }) => {
    const isValueNumeric = isNumeric(value);

    return (
        <div>
            {isValueNumeric ? (
                <p>{value} is numeric</p>
            ) : (
                <p>{value} is not numeric</p>
            )}
        </div>
    );
};