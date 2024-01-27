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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
