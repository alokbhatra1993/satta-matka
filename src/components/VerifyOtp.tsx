import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaMobileAlt, FaKey } from 'react-icons/fa';
import logo from "../images/logo512.png";

const VerifyOtp = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const handleVerifyOtp = () => {
    // Implement your OTP verification logic here
  };

  const handleResendOtp = () => {
    // Implement your resend OTP logic here
  };

  const handleToggleOtpVisibility = () => {
    setShowOtp(!showOtp);
  };

  return (
    <div className="container mx-auto p-4 max-w-md rounded-5 shadow-md login-primary text-white">
      {/* Your logo */}
      <img src={logo} alt="Logo" className="flex mx-auto mb-4" />

      {/* Mobile number input */}
      <div className="mb-4 relative">
        <label htmlFor="mobile" className="block text-left text-sm font-medium mb-1">
          <FaMobileAlt className="absolute top-9 left-3 text-black" />
          Mobile Number
        </label>
        <input
          type="mobile"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="w-full px-4 py-2 pl-10 border rounded-5 focus:outline-none focus:border-blue-500 text-black"
        />
      </div>

      {/* OTP input */}
      <div className="mb-4 relative">
        <label htmlFor="otp" className="text-left block text-sm font-medium mb-1">
          <FaKey className="absolute top-9 left-3 text-black" />
          OTP
        </label>
        <input
          type={showOtp ? 'text' : 'password'}
          id="otp"
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="w-full px-4 py-2 pl-10 border rounded-5 focus:outline-none focus:border-blue-500 text-black"
        />
        <button className="hideshow absolute top-9 right-2 text-black" type="button" onClick={handleToggleOtpVisibility}>
          {showOtp ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <button
        type="button"
        onClick={handleResendOtp}
        className="text-white text-right mt-2 text-sm underline"
      >
        Resend OTP
      </button>

      {/* Verify OTP button */}
      <button
        type="button"
        onClick={handleVerifyOtp}
        className="w-full mt-4 bg-blue-800 text-white py-2 mb-2 rounded-5 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Verify OTP
      </button>

      {/* Resend OTP link */}
     
    </div>
  );
};

export default VerifyOtp;
