import React, { useState } from "react";
import logo from "../images/logo512.png";

const ForgotPassword: React.FC = () => {

    const [formData, setFormData] = useState({
        mobile: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { }

    const handleSubmit = async (e: React.FormEvent) => { }

    return (
        <div className="container mx-auto p-4 max-w-md rounded-sm shadow-md login-primary text-white">
            <img src={logo} alt="Logo" className="flex mx-auto" />
            <h2 className="text-2xl font-bold mb-2 mt-4">Forgot Password!</h2>
            <form className="text-left" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Mobile Number
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-5 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 bg-blue-800 text-white py-2 mb-2 rounded-5 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    onClick={handleSubmit}
                >
                    Submit Request
                </button>

                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white mt-2 py-2 rounded-5 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                // onClick={goToSignUpPage}
                >
                    backtologin
                </button>
            </form>
        </div>
    )

}

export default ForgotPassword;