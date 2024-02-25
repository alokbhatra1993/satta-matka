import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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




function App() {
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

          <Route element={<WithNavbar />}>
            <Route path="/" element={<Home />} />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;


