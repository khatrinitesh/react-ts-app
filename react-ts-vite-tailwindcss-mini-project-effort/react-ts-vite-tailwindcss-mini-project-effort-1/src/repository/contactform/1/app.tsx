import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default CustomApp;

interface Contact {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<Contact> = (name, email, message) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    // Check if the email follows a valid pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      alert("Please enter a valid email address");
      return;
    }
    // Check if name and message are provided
    if(!formData.name.trim() == !formData.message.trim()){
        alert("Please enter your name and message");
    return;
    }
    e.preventDefault();
    console.log(formData); // handle form submission logic here
    setSubmitted(true);
  };
  return (
    <>
     {submitted ? (
        <div>
          <h2>Thank you for your submission!</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Type name..." />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Type email..." />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};
