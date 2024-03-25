import React, { useState } from "react";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash, FaEdit, FaRupeeSign } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { NavBar2 } from "./NavBar2";
import { MyDatePicker } from "./MyDatePicker";

interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface NavBar2Props {
  isGameRates?: boolean;
}

const DoublePanna: React.FC<NavBar2Props> = ({ isGameRates }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ChangePasswordFormData>();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      const response = await fetch("your-api-url", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Password changed successfully");
      } else {
        console.error("Failed to change password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleGameButtonClick = (label: string, value: number) => {
    // Handle game button click
    console.log(`${label} - ${value} button clicked`);
  };

  return (
    <div className="bg-gray-100 rounded-lg">
      <NavBar2 isGameRates={true} />
      <div className="container mx-auto gamerates">
      <div>
        <button
          onClick={() => handleGameButtonClick("Jodi Digit", 1000)}
          className="flex justify-around items-center w-full bg-blue-800 text-white p-3 mb-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <span>Jodi Digit</span>
          <span>10-1000</span>
        </button>
        <button
          onClick={() => handleGameButtonClick("Single Panna", 1400)}
          className="flex justify-around items-center w-full bg-blue-800 text-white p-3 mb-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <span>Single Panna</span>
          <span>10-1400</span>
        </button>
        <button
          onClick={() => handleGameButtonClick("Double Panna", 2400)}
          className="flex justify-around items-center w-full bg-blue-800 text-white p-3 mb-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <span>Double Panna</span>
          <span>10-2400</span>
        </button>
        <button
          onClick={() => handleGameButtonClick("Triple Panna", 7000)}
          className="flex justify-around items-center w-full bg-blue-800 text-white p-3 mb-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <span>Triple Panna</span>
          <span>10-7000</span>
        </button>
        <button
          onClick={() => handleGameButtonClick("Half Sangam", 10000)}
          className="flex justify-around items-center w-full bg-blue-800 text-white p-3 mb-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <span>Half Sangam</span>
          <span>10-10000</span>
        </button>
        <button
          onClick={() => handleGameButtonClick("Full Sangam", 100000)}
          className="flex justify-around items-center w-full bg-blue-800 text-white p-3 mb-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <span>Full Sangam</span>
          <span>10-100000</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default DoublePanna;
