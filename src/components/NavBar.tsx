import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaChartBar, FaHistory, FaHome, FaLock, FaMoneyBill, FaMoneyCheck, FaPhone, FaQuestionCircle, FaShareAlt, FaStar, FaTrophy, FaUser, FaWallet } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemIcon, ListItemText } from "@mui/material";

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  console.log({ location, p: location.pathname });


  const items = [
    // { text: "test", icon: <FaWallet size={30} /> },
    { path: '/', text: "Home", icon: <FaHome /> },
    { path: '/editprofile', text: "See Full Profile", icon: <FaUser /> },
    { path: '/funds', text: "Add Funds", icon: <FaMoneyBill /> },
    { path: '/withdraw', text: "Withdraw", icon: <FaMoneyCheck /> },
    { path: '/wallet', text: "Wallet Statement", icon: <FaWallet /> },
    { path: '/winhistory', text: "Win History", icon: <FaTrophy /> },
    { path: '/bidhistory', text: "Bid History", icon: <FaHistory /> },
    { path: '/gamerates', text: "Game Rates", icon: <FaChartBar /> },
    { path: '/help', text: "How to Play", icon: <FaQuestionCircle /> },
    { path: '/contactus', text: "Contact Us", icon: <FaPhone /> },
    { path: '/share', text: "Share with Friends", icon: <FaShareAlt /> },
    { path: '/rateapp', text: "Rate App", icon: <FaStar /> },
    { path: '/ChangePassword', text: "Change Password", icon: <FaLock /> },
    { path: '/logout', text: "Logout", icon: <FaLock /> },
  ];


  const handleItemClick = (item: string) => {
    // console.log(Clicked on ${item});
    if (item === "/logout") {
      localStorage.removeItem("token")
      navigate("login")
    }
    else{
      navigate(item)
    }
  };

  return (
    <div className="navbar-main p-3 bg-blue-800">


      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-sm font-medium flex items-center">
          <FaWallet size={30} /> 1000
        </div>

        <div className="text-white text-md font-medium overflow-hidden">
          <div className="marquee font-bold">Welcome to Kalyan Satta Matka</div>
        </div>

        <div onClick={toggleSidebar} className="lg:flex items-center">
          <span className="text-white pr-2 flex items-center justify-between">
            <FaBars />
          </span>
        </div>
      </div>



      <div className="app-container overflow-7">
        {/* Your existing app content */}
        <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
          <div className="custom-color mx-auto w-500 text-white">
            <List>
              {items.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleItemClick(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>

    </div>
  );
};

export default Navbar;