import React, { useState } from "react";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import singleDigit from "../images/single-digit (1).svg"; 
import { NavBar2 } from "./NavBar2";

interface NavBar2Props {
  isEditProfile?: boolean;
}

export const EditProfile: React.FC<NavBar2Props> = ({ isEditProfile }) => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("your-api-url", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileData),
        });
        if (response.ok) {
          // Handle success
          console.log("Profile updated successfully");
        } else {
          // Handle error
          console.error("Failed to update profile");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      mobile: "",
    };

    if (!profileData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!profileData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!profileData.mobile) {
      errors.mobile = "Mobile is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(profileData.mobile)) {
      errors.mobile = "Mobile is invalid";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  return (
    <div>
      <NavBar2 isEditProfile={true} />
      <div className="d-flex justify-content-center mt-6">
        <div className="position-relative flex">
          <img src={singleDigit} alt="Profile Image" className="w-24 h-24 rounded-circle mb-4" />
          <label htmlFor="edit-profile" className="edit-profile-icon">
            <FaEdit />
            <input type="file" id="edit-profile" className="d-none" />
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-100 text-left container">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={profileData.name}
            onChange={handleInputChange}
            className={`form-control ${validationErrors.name && "is-invalid"}`}
          />
          <div className="invalid-feedback">{validationErrors.name}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={profileData.email}
            onChange={handleInputChange}
            className={`form-control ${validationErrors.email && "is-invalid"}`}
          />
          <div className="invalid-feedback">{validationErrors.email}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Mobile"
            value={profileData.mobile}
            onChange={handleInputChange}
            className={`form-control ${validationErrors.mobile && "is-invalid"}`}
          />
          <div className="invalid-feedback">{validationErrors.mobile}</div>
        </div>
       
      </form>
    </div>
  );
};

export default EditProfile;
