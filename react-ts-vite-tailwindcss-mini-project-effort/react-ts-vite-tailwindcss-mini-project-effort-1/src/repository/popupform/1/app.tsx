import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleSubmit = (formData: FormData) => {
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
  };
  return <>
    <button onClick={toggleForm}>Open Form</button>
    <PopupForm isOpen={isFormOpen} onClose={toggleForm} onSubmit={handleSubmit} />
  </>;
};

export default CustomApp;


interface PopupFormProps{
    isOpen:boolean;
    onClose:() => void;
    onSubmit:(formData:FormData) => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
      // Initialize your form data fields here
      // For example:
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(formData);
      onClose(); // Close the form after submission
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="popup-form-overlay">
        <div className="popup-form">
          <button className="close-button" onClick={onClose}>Close</button>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };