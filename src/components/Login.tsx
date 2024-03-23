import React from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo512.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface FormData {
  mobile: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new URLSearchParams();
      formData.append("mobile", data.mobile);
      formData.append("password", data.password);

      const response = await fetch("https://smapidev.co.in/api/Api/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=d2a8bfc834befa449f25ec1a4d1e4de08c515354'
        },
        body: formData,
      });
      response.json().then((data: any) => {
        localStorage.setItem("token", data.data.token)
        alert(data.message);
        navigate("/security_pin")
      }).catch((error: any) => {
        alert(error);
      })

    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const goToSignUpPage = () => {
    navigate("/signup");
  };

  return (
    <div className="container mx-auto p-4 max-w-md rounded-5 shadow-md login-primary text-white">
      <img src={logo} alt="Logo" className="flex mx-auto" />
      <h2 className="text-2xl font-bold mb-2 mt-4">Welcome Back!</h2>
      <form className="text-left" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            {...register("mobile", { required: true, minLength: 10, maxLength: 10 })}
            className="w-full px-4 py-2 border rounded-5 focus:outline-none focus:border-blue-500 text-black"
          />
          {errors.mobile && errors.mobile.type === "required" && <span className="text-red-500">Mobile number is required</span>}
          {errors.mobile && errors.mobile.type === "minLength" && <span className="text-red-500">Mobile number must be exactly 10 digits</span>}
          {errors.mobile && errors.mobile.type === "maxLength" && <span className="text-red-500">Mobile number must be exactly 10 digits</span>}

        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 border rounded-5 focus:outline-none focus:border-blue-500 text-black"
          />
          <button className="hideshow absolute top-9 right-2 text-black" type="button" onClick={handleTogglePassword}>
            {showPassword ? <FaEye className="mr-2" /> : <FaEyeSlash />}
          </button>
          {errors.password && <span className="text-red-500">Password is required</span>}
        </div>
        <a href="#" className="mt-4 mb-2 text-white-700 flex justify-end text-sm">Forgot Password.</a>
        <button
          type="submit"
          className="w-full mt-4 bg-blue-800 text-white py-2 mb-2 rounded-5 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Login
        </button>

        <a href="#" className="mt-1 mb-2 text-white-700 flex justify-center text-sm">Don't have an account?</a>

        <button
          type="button"
          className="w-full bg-yellow-500 text-white mt-2 py-2 rounded-5 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={goToSignUpPage}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
