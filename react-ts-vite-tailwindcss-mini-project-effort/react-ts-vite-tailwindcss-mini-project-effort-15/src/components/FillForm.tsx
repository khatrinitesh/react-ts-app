import React, { FormEvent, useState } from "react";
import InputField from "./InputField";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FillFormComp: React.FC = () => {
    const [formValues, setFormValues] = useState({
        nameWithSpaces: "",
        nameWithoutSpaces: "",
        email: "",
        phone: "",
      });
      const [errors, setErrors] = useState({
        nameWithSpaces: "",
        nameWithoutSpaces: "",
        email: "",
        phone: "",
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        if (name === "nameWithSpaces") {
          setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
        } else if (name === "nameWithoutSpaces") {
          // Restrict to alphabetic characters only and remove any spaces
          const alphaValue = value.replace(/[^a-zA-Z\s]/g, "").trim();
          setFormValues((prevValues) => ({ ...prevValues, [name]: alphaValue }));
        } else if (name === "email") {
          // Remove spaces from email value
          const emailValue = value.replace(/\s+/g, "");
          setFormValues((prevValues) => ({ ...prevValues, [name]: emailValue }));
        } else if (name === "phone") {
          // Restrict phone number input to numeric values only
          const numericValue = value.replace(/[^0-9]/g, "");
          setFormValues((prevValues) => ({ ...prevValues, [name]: numericValue }));
        } else {
          // For other inputs, use the value as is
          setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
        }
      };
    
    
      const validate = (): boolean => {
        let valid = true;
        const newErrors = {
          nameWithSpaces: "",
          nameWithoutSpaces: "",
          email: "",
          phone: "",
        };
    
        // Validate name with spaces
        if (!formValues.nameWithSpaces) {
          newErrors.nameWithSpaces = "Name with spaces is required";
          valid = false;
        }
    
        // Validate name without spaces
        if (!formValues.nameWithoutSpaces || /[^a-zA-Z\s]/.test(formValues.nameWithoutSpaces)) {
          newErrors.nameWithoutSpaces = "Name without spaces must be alphabetic characters only";
          valid = false;
        }
    
        // Validate email (remove spaces and check format)
        const cleanedEmail = formValues.email.replace(/\s+/g, "");
        if (!cleanedEmail || !/\S+@\S+\.\S+/.test(cleanedEmail)) {
          newErrors.email = "A valid email is required";
          valid = false;
        }
    
        // Validate phone (exactly 10 digits)
        if (!formValues.phone || !/^[0-9]{10}$/.test(formValues.phone)) {
          newErrors.phone = "Phone number must be exactly 10 digits";
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
          toast.success("Form submitted successfully!");
          console.log("Form Values:", formValues);
          // Handle form submission (e.g., send data to a server)
        } else {
          toast.error("Please fix the errors in the form.");
        }
      };

  return (
    <>
      <div className="max-w-md mx-auto p-4 m-4 bg-white border rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Custom Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              
              className="block text-sm font-medium uppercase text-gray-700"
            >
              Name (with spacing) <sup className="text-red-500">*</sup>
            </label>
            <InputField
              id="nameWithSpaces"
              name="nameWithSpaces"
              type="text"
              value={formValues.nameWithSpaces}
              onChange={handleChange}
              error={errors.nameWithSpaces}
              placeholder="Enter your name with spaces"
            />
          </div>
          <div className="mb-4">
            <label
              
              className="block text-sm font-medium uppercase text-gray-700"
            >
              Name (without spacing) <sup className="text-red-500">*</sup>
            </label>
            <InputField
              id="nameWithoutSpaces"
              name="nameWithoutSpaces"
              type="text"
              value={formValues.nameWithoutSpaces}
              onChange={handleChange}
              error={errors.nameWithoutSpaces}
              placeholder="Enter your name without spaces"
            />
          </div>
          <div className="mb-4">
          <label
              
              className="block text-sm font-medium uppercase text-gray-700"
            >
              Email <sup className="text-red-500">*</sup>
            </label>
            <InputField
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your email"
          />
          </div>
          <div className="mb-4">
          <label
              
              className="block text-sm font-medium uppercase text-gray-700"
            >
              Phone <sup className="text-red-500">*</sup>
            </label>
            <InputField
            id="phone"
            name="phone"
            type="text"
            value={formValues.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="Enter your phone number"
            maxLength={10}
          />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default FillFormComp;
