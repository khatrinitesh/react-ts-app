import React, { useState } from "react";

const CustomApp = () => {
  return <div>
    <CheckoutForm/>
  </div>;
};

export default CustomApp;

const CheckoutForm: React.FC = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    address: "",
    cardNum: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    address: "",
    cardNum: "",
    expiry: "",
    cvv: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name,value} =e.target;
    setFormdata(prevState => ({
        ...prevState,
        [name]:value
    }));
    setErrors(prevErrors => ({
        ...prevErrors,
        [name]:''
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {
        name: "",
      email: "",
      address: "",
      cardNum: "",
      expiry: "",
      cvv: "",
    }
    if(formData.name.trim() === ''){
        newErrors.name = "Please enter your name";
        isValid = false
    }
    if(!isValid){
        setErrors(newErrors);
        return;
    }
    console.log(formData); // you can handle form submission here
    setSuccessMessage('orderp placed successfully')
  };
  return (
    <>
      <div className="max-  w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1 */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* 2 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* 3 */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* 4 */}
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNum"
              name="cardNum"
              value={formData.cardNum}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* 5 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiry"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            {/* 6 */}
            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
