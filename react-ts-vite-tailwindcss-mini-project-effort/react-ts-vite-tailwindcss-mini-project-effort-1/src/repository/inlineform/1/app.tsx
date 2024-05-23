import React from "react";
import { useState, useRef, useEffect } from "react";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
      <FormData />
    </>
  );
};

export default CustomApp;

interface FormDataProps {
  fname: string;
  lname: string;
}
const FormData: React.FC = () => {
  const [formData, setFormdata] = useState<FormDataProps>({
    fname: "",
    lname: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

//   INPUT ELEMENT
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target
    setFormdata({
        ...formData,
        [name]:value
    });
  }

  // FORM ELEMENT
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.fname.trim() === ''){
        setError('please enter first name');
        return;
    }
    if(formData.lname.trim() === ''){
        setError('please enter last name');
        return;
    }
    setTimeout(() => {
        setSubmitted(true);
        setError('')
    },100)
    setFormdata({
        ...formData,
        [name]:value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>fname</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
        </div>
        <div>
          <label>fname</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
        </div>
        {submitted && <p>Form Submitted Successfully</p>}
        {error && <p style={{color:'red'}}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
