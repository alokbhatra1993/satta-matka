import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import SignUpForm from "./components/SignUp";
import Login from "./components/Login";
import Carousel from "./components/carousel";
import Home from "./components/Home";
import WithoutNavbar from "./components/WithoutNavbar";
import WithNavbar from "./components/WithNavbar";
import ForgotPassword from "./components/ForgotPassword";
import StarLine from "./components/StarLine";
import { BidHistory } from "./components/BidHistory";
import WinHistory from "./components/WinHistory";
import { Funds } from "./components/Funds";
import { Help } from "./components/Help";
import SecurityPin from "./components/SecurityPin";
import { MadhurNight } from "./components/MadhurNight"
import GameTime from "./components/GameTime";
import EditProfile from "./components/EditProfile";
import Withdraw from "./components/Withdraw";
import { Verify } from "crypto";
import VerifyOtp from "./components/VerifyOtp";
import ChangePassword from "./components/ChangePassword";
import DoublePanna from "./components/DoublePanna";
import GameRates from "./components/GameRates";
import ContactUs from "./components/ContactUs";
import Wallet from "./components/Wallet";

function App() {
  const token = localStorage.getItem("token");
  console.log({token});
  
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<WithoutNavbar />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<WithoutNavbar />}>
            <Route path="/signup" element={<SignUpForm />} />
          </Route>
          <Route element={<WithoutNavbar />}>
            <Route path="/security_pin" element={<SecurityPin />} />
          </Route>

          <Route element={<WithNavbar />}>
            <Route path="/" element={<Home />} />
            {/* <Route
              path="/"
              element={
                token ? (
                  <Home />
                ) : (
                  <Navigate to="/login" />
                )
              }
            /> */}
          </Route>

          <Route element={<WithoutNavbar />}>
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
          </Route>

          <Route element={<WithoutNavbar />}>
            <Route path="/starline" element={<StarLine />} />
          </Route>
          <Route element={<WithoutNavbar />}>
            <Route path="/bidhistory" element={<BidHistory />} />
          </Route>
          <Route element={<WithoutNavbar />}>
            <Route path="/winhistory" element={<WinHistory />} />
          </Route>

          <Route element={<WithoutNavbar />}>
            <Route path="/funds" element={<Funds />} />
          </Route>

          <Route element={<WithoutNavbar />}>
            <Route path="/help" element={<Help />} />
          </Route>

          <Route element={<MadhurNight />}>
            <Route path="/madhurnight" element={<MadhurNight />} />
          </Route>
          <Route element={<GameTime />}>
            <Route path="/gametime" element={<GameTime />} />
          </Route>

          <Route element={<EditProfile />}>
            <Route path="/editprofile" element={<EditProfile />} />
          </Route>


          <Route element={<Withdraw />}>
            <Route path="/withdraw" element={<Withdraw />} />
          </Route>


          <Route element={<VerifyOtp />}>
            <Route path="/VerifyOtp" element={<VerifyOtp />} />
          </Route>

          <Route element={<ChangePassword />}>
            <Route path="/ChangePassword" element={<ChangePassword />} />
          </Route>

          <Route element={<DoublePanna />}>
            <Route path="/DoublePanna" element={<DoublePanna />} />
          </Route>

          <Route element={<GameRates />}>
            <Route path="/GameRates" element={<GameRates />} />
          </Route>

          <Route element={<ContactUs />}>
            <Route path="/ContactUs" element={<ContactUs />} />
          </Route>


          <Route element={<Wallet />}>
            <Route path="/Wallet" element={<Wallet />} />
          </Route>

        
        </Routes>
      </Router>
    </div>
  );
}

export default App;


