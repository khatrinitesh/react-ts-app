import { useState } from 'react';
import { FormValues } from '../types';

// Define validation rules
const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  if (!values.name) errors.name = 'Name is required';
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.phoneNumber) errors.phoneNumber = 'Phone number is required';
  if (!values.city) errors.city = 'City is required';
  if (!values.location) errors.location = 'Location is required';

  return errors;
};

 const FillForm = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    location: ''
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, location: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, handle form submission
      console.log('Form submitted:', values);
    }
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
  };
};

export default FillForm;