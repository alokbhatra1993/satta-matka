// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-sm font-medium">Your Logo</div>

        <div className="text-white text-sm font-medium"> Welcome to Kalyan Satta Matka </div>

        {/* Hamburger menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>


        {/* Wallet icon (adjust this part based on your actual icon or content) */}

           
        <div className="hidden lg:flex items-center">
          <span className="text-white pr-2">Your Wallet Icon</span>
        </div>
      </div>

      

      {/* Sidebar (hidden by default on larger screens) */}
      {isSidebarOpen && (
        <div className="lg:hidden">
          {/* Sidebar content goes here */}
          <div className="bg-gray-700 p-4 sidebar-left">
            <span className="text-white">Home</span>
            <span className="text-white">See Full Profile</span>
            <span className="text-white">Add Funds</span>
            <span className="text-white">Withdraw</span>
            <span className="text-white">Wallet Statament</span>
            <span className="text-white">Win History</span>
            <span className="text-white">How to Play</span>
          </div>
        </div>
      )}
    </div>
  
  );
};

export default Navbar;
