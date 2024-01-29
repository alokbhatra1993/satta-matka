import React, { useState } from 'react';
import logo from "../images/logo512.png";
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  mobile: number;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const navigate = useNavigate()
  //hooks
   const [count , setCount]= useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      const response = await fetch('http://localhost:3005/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful signup
        console.log('User signed up successfully!');
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Error during signup:', await response.json());
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const gotoLoginPage = ()=>{
    navigate("/login")

  }
  return (
    <div className="container mx-auto mt-8 p-4 max-w-md rounded shadow-md text-left login-primary text-white">
        <img src={logo} alt="Logo" className="flex mx-auto" />
      <h2 className="text-2xl font-bold mt-4 mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Enter your Name 
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-5 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
             Mobile No 
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-5 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Password 
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-5 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Enter your Pin 
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-5 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 mb-5 text-white py-2 rounded-5 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" onClick={handleSubmit}
        >
          Sign Up
        </button>

        <a href="#" className="mt-8 mb-2 text-white">Already have an Account?</a>

<button
  type="submit"
  className="w-full bg-yellow-500 text-white mt-3 py-2 rounded-5 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
  onClick={gotoLoginPage}
>
  Login
</button>
      </form>
    </div>
  );
};

export default SignupForm;
