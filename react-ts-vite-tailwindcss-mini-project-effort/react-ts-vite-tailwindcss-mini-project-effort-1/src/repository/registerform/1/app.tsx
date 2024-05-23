import React, { useEffect, useState } from "react";
// import './style.css';

const CustomApp: React.FC = () => {

    const handleSubmit= (formData:FormData) => {
        console.log(formData);
        
    }
  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
};

export default CustomApp;

interface RegisterFormProps {
    onSubmit: (formData: FormData) => void;
  }
  
  interface FormData {
    username: string;
    email: string;
    password: string;
  }
  
  const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
      username: '',
      email: '',
      password: '',
    });
  
    const [validity, setValidity] = useState<Record<string, boolean>>({
      username: true,
      email: true,
      password: true,
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      // Perform validation
      validateField(name, value);
    };
  
    const validateField = (name: string, value: string) => {
      // Add your validation logic here
      // For example, check if the value is not empty
      const isValid = value.trim() !== '';
      setValidity({ ...validity, [name]: isValid });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Check if all fields are valid before submitting
      if (Object.values(validity).every((isValid) => isValid)) {
        onSubmit(formData);
      } else {
        // Handle form submission with invalid fields
        console.log('Form submission aborted due to invalid fields.');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className={`w-full px-3 py-2 border rounded focus:outline-none ${validity.username ? 'border-blue-500' : 'border-red-500'}`} />
          {!validity.username && <p className="text-red-500">Username is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-3 py-2 border rounded focus:outline-none ${validity.email ? 'border-blue-500' : 'border-red-500'}`} />
          {!validity.email && <p className="text-red-500">Email is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`w-full px-3 py-2 border rounded focus:outline-none ${validity.password ? 'border-blue-500' : 'border-red-500'}`} />
          {!validity.password && <p className="text-red-500">Password is required.</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Register</button>
      </form>
    );
  };
  
    
