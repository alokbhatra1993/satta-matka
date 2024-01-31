// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaChartBar, FaHistory, FaHome, FaLock, FaMoneyBill, FaMoneyCheck, FaPhone, FaQuestionCircle, FaShareAlt, FaStar, FaTrophy, FaUser, FaWallet } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemIcon, ListItemText } from "@mui/material";

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const items = [
    { text: "test", icon: <FaHome /> },
    { text: "Home", icon: <FaHome /> },
    { text: "See Full Profile", icon: <FaUser /> },
    { text: "Add Funds", icon: <FaMoneyBill /> },
    { text: "Withdraw", icon: <FaMoneyCheck /> },
    { text: "Wallet Statement", icon: <FaWallet /> },
    { text: "Win History", icon: <FaTrophy /> },
    { text: "Bid History", icon: <FaHistory /> },
    { text: "Game Rates", icon: <FaChartBar /> },
    { text: "How to Play", icon: <FaQuestionCircle /> },
    { text: "Contact Us", icon: <FaPhone /> },
    { text: "Share with Friends", icon: <FaShareAlt /> },
    { text: "Rate App", icon: <FaStar /> },
    { text: "Change Password", icon: <FaLock /> },
  ];
  

  const handleItemClick = (item: string) => {
    // console.log(`Clicked on ${item}`);
    if(item==="Logout")
    {
      navigate("/login")
    }
  };

  return (
    <div className="navbar-main p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-sm font-medium flex items-center">
          <FaWallet size={30} /> 1000
        </div>

        <div className="text-white text-sm font-medium">
        <div className="marquee font-bold">Welcome to Kalyan Satta Matka</div>
        </div>

        <div onClick={toggleSidebar} className="lg:flex items-center">
          <span className="text-white pr-2 flex items-center justify-between">
            <FaBars />
          </span>
        </div>
      </div>

      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          {items.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleItemClick(item.text)}
            >
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* <div
       className={`flex flex-col ${isSidebarOpen ? 'w-64' : 'w-0 h-0'} bg-gray-800 h-screen overflow-hidden transition-width duration-300`}
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
      </div> */}
      {/* )} */}
    </div>
  );
};

export default Navbar;
