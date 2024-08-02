import React, { useState } from "react";

const MultipleStates: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    console.log(name)
    
  }

  const handleAgeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value)
    console.log(age)
  }
  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    console.log(email)
  }

  return <div>
    <input type="text" className="border p-2" value={name} onChange={handleNameChange} />
    <input type="text" className="border p-2" value={age} onChange={handleAgeChange} />
    <input type="text" className="border p-2" value={email} onChange={handleEmailChange} />
  </div>;
};

export default MultipleStates;
