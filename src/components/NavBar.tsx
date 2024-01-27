// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWallet } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
       

        <div className="text-white text-sm font-medium flex items-center">
          <FaWallet size={30} /> 1000
        </div>

        <div className="text-white text-sm font-medium">
          Welcome to Kalyan Satta Matka
        </div>

        <div onClick={toggleSidebar} className="hidden lg:flex items-center">
          <span className="text-white pr-2">
            <FaBars/>
          </span>
        </div>
      </div>

      <div
        className={`flex flex-col ${
          !isSidebarOpen ? "hidden" : "w-64"
        } bg-gray-800 h-screen`}
      >
        <div className="bg-white-700 p-4 sidebar-left">
          <span className="text-black">Home</span>
          <span className="text-black">See Full Profile</span>
          <span className="text-black">Add Funds</span>
          <span className="text-black">Withdraw</span>
          <span className="text-black">Wallet Statament</span>
          <span className="text-black">Win History</span>
          <span className="text-black">How to Play</span>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Navbar;
