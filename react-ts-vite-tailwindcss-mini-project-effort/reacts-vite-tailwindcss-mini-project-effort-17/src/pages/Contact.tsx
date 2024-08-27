import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Banner from '../layout/Banner';
import InputField from '../components/InputField'; 

const Contact:React.FC = () => {

  const [username,setUsername] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [error,setError]  = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      // Limit password length to 8 characters
      if (value.length <= 8) {
        setPassword(value);
        setError('');
      } else {
        setError('Password must be at most 8 characters long.');
        toast.error('Password must be at most 8 characters long.');
      }
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!username || !password){
      setError('Both fields are required');
      toast.error('Both fields are required');
      return;
    }
    setError('');
    toast.success('form submitted successfully')
  }
  


  return (
    <div className='content'>
      <Banner title='Contact' desc='Sunt amet ea ut ut eu fugiat reprehenderit.'/>
      <div className="container mx-auto">
      <form method='post' className='contact-form' onSubmit={handleSubmit}>
      <InputField
            name="username"
            id="username"
            type="text"
            disabled={false}
            maxlength={20}
            error={error}
            autocomplete="username"
            placeholder="Enter your username"
            value={username}
            onChange={handleChange}
          />
          <InputField
            name="password"
            id="password"
            type="password"
            disabled={false}
            maxlength={8}
            error={error}
            autocomplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
      <button type="submit">Submit</button>
      </form>
      <ToastContainer /> {/* Container for toast notifications */}
      </div>
    </div>
  );
}

export default Contact;
