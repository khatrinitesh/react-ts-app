import React, { useState } from 'react';
import Banner from '../layout/Banner';
import InputField from '../components/InputField';
import FillForm  from '../components/UseForm';
import SelectField from '../components/SelectField';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormValues } from '../types';

const Contact = () => {
  const {
    values,
    errors,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
  } = FillForm();
  

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (!values.name || !values.email || !values.city || !values.phoneNumber || !values.location) {
      toast.error('Please fill in all fields correctly.');
      return;
    }
    
    // Attempt to submit the form
    const success = await handleSubmit();

    if (success) {
      toast.success('Form submitted successfully!');
    } else {
      toast.error('Submission failed. Please try again.');
    }
  };


  return (
    <div className='content'>
      <Banner title='Contact' description='Mollit qui velit sunt mollit cupidatat ex Lorem enim excepteur nulla deserunt elit labore est.'/>
      <div className="container mx-auto">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <InputField
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <InputField
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <InputField
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <InputField
              type="text"
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <SelectField
              value={values.location}
              onChange={handleSelectChange}
              options={location} // Ensure `location` is defined in your scope
              placeholder="Select your location"
            />
            {errors.location && <p className="text-red-500">{errors.location}</p>}
          </div>

          <button
            type="submit"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        
        {/* ToastContainer to display the toast notifications */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
