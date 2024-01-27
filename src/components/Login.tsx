import React, { useState } from 'react';

interface FormData {
  mobile : string;
  password: string;
}

const Login: React.FC = () => {
  //hooks
   const [count , setCount]= useState(0)
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
  });
console.log("formData",formData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData({
    //   ...formData,
    //   ["email"]:
    //    "alok@gmail.com",
    // });
    setCount(1)
    // count=1
console.log("targetname",e.target.name,"targetvalue",e.target.value);
    // formData["email"]="alok@gmail.com"
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3005/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful signup
        console.log('User login successfully!');
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Error during signup:', await response.json());
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  return (
    <div className="container mx-auto mt-8 p-4 bg-white max-w-md rounded-md shadow-md">
       {/* <img src={logo} alt="Logo" className="h-16 w-16" /> */}
      <h2 className="text-2xl font-medium mb-4">Login Form</h2>
      <form className='text-left' onSubmit={handleSubmit}>
    
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Mobile :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
