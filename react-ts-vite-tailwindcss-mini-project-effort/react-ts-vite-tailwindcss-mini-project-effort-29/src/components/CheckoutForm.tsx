import React from 'react';
import { motion } from 'framer-motion';
import { useCheckoutFormStore } from '../store/store';


const CheckoutForm = () => {

    // Access the state and actions from Zustand store
  const { name, email, address, setName, setEmail, setAddress } = useCheckoutFormStore();

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'address') setAddress(value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Checkout Successful!\nName: ${name}\nEmail: ${email}\nAddress: ${address}`);
  };
  return (
    <>
      <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="checkout-form"
      style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}
    >
      <h2>Checkout Form</h2>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="form-field">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
          required
          placeholder="Enter your address"
        />
      </div>

      <motion.button
        type="submit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit
      </motion.button>
    </motion.form>
    </>
  );
}

export default CheckoutForm;
