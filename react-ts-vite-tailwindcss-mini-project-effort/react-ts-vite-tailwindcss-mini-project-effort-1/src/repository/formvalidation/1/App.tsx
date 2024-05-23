import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <div>
        <Form/>
    </div>
  )
}

export default CustomApp

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    errors: {
      firstName: string;
      lastName: string;
      email: string;
    };
  }

  const Form: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
      firstName: '',
      lastName: '',
      email: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
      },
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState({
        ...formState,
        [name]: value,
        errors: {
          ...formState.errors,
          [name]: validateField(name, value),
        },
      });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Validate all fields before submitting
      const { firstName, lastName, email } = formState;
      const errors = {
        firstName: validateField('firstName', firstName),
        lastName: validateField('lastName', lastName),
        email: validateField('email', email),
      };
      setFormState({
        ...formState,
        errors,
      });
      // If there are no errors, submit the form
      if (!Object.values(errors).some(error => !!error)) {
        console.log('Form submitted:', formState);
      }
    };
  
    const validateField = (name: string, value: string): string => {
      switch (name) {
        case 'firstName':
        case 'lastName':
          return value.trim() ? '' : 'This field is required';
        case 'email':
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format';
        default:
          return '';
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
          <span className="error">{formState.errors.firstName}</span>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
          <span className="error">{formState.errors.lastName}</span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <span className="error">{formState.errors.email}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };

