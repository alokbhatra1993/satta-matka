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
  isDoublePanna?: boolean;
}

const DoublePanna: React.FC<NavBar2Props> = ({ isDoublePanna }) => {
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

  return (
    <div className="bg-gray-100 rounded-lg">
      <NavBar2 isDoublePanna={true} />
     <div className="container shadow-md w-100 bg-white p-3 rounded-md text-left"> <div className="flex">
        <MyDatePicker />
      </div>
      <div className="container text-left">
        <h2 className="choose_session font-bold mb-4">Choose Session</h2>
        <div className="open flex">
          <input className="mr-2" type="radio" />Open
          <input className="ml-4 mr-2" type="radio" />Close
        </div>
      </div>
      <div className="panna-new text-left mt-4">
        <label htmlFor="">Panna</label>
        <div className="input-group">
          <span className="input-group-text"><FaEdit /></span>
          <input type="text" className="form-control" placeholder="Enter Digit" />
        </div>
      </div>
      <div className="panna-new text-left mt-4">
        <label htmlFor="">Points</label>
        <div className="input-group">
          <span className="input-group-text"><FaRupeeSign /></span>
          <input type="text" className="form-control" placeholder="Enter Points" />
        </div>
      </div>
      <div className="Proceed mt-6">
        <button className="btn-proceed bg-blue-800 w-100 text-white py-2 px-4 rounded-lg">Proceed</button>
      </div>
    </div>
    </div>
  );
};

export default DoublePanna;
