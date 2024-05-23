import React,{useState} from 'react'

const CustomApp:React.FC = () => {
  return (
    <div>
      <FormWithIcons/>
    </div>
  )
}

export default CustomApp

interface FormDataProps{
    email:string;
    password:string;
}

const FormWithIcons: React.FC<FormDataProps> = () => {
    // State variables for form fields
    const [formData,setFormData] = useState<FormDataProps>({
        email:'',
        password:''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target 
        setFormData(prevData => ({
            ...prevData,
            [name]:value
        }));
    }
  
    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Process form data here
      console.log('Email:', formData.email);
      console.log('Password:', formData.password);
    };
  
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <div className="input-with-icon">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <i className="fas fa-envelope"></i> {/* Icon */}
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <i className="fas fa-lock"></i> {/* Icon */}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
  
