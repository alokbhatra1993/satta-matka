import React, { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavBar2 } from "./NavBar2";

const StarLine: React.FC = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = async (e: React.FormEvent) => {};

  return (
    <>
          <NavBar2 isStarLine={true} />
      <div className="container mx-auto p-4 max-w-md rounded-sm shadow-md login-primary text-white mt-4 rounded">

        <h1 className="text-lg font-bold">Star Line Games</h1>
        <div className="flex justify-content-between">
          <p>Left Digit</p>
          <p>10-90</p>
        </div>
        <div className="flex justify-content-between mt-2">
          <p>Right Digit</p>
          <p>10-90</p>
        </div>
        <div className="flex justify-content-between mt-2">
          <p>Jodi Digit</p>
          <p>10-900</p>
        </div>
      </div>
      <div className="mt-6">
        <Link
          className="mr-2 px-4 py-2 login-primary text-white rounded"
          to="/bid-history"
        >
          BID HISTORY
        </Link>
        <Link
          className="mr-2 px-4 py-2 login-primary text-white rounded"
          to="/win-history"
        >
          WIN HISTORY
        </Link>
      </div>
      <div className="max-w-md mx-auto rounded-xl overflow-hidden satta-matka-home mt-4">
        <div className="satta-matka">
          <div className="md:flex-shrink-0"></div>
          <div className="card-bg">
            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
                DESAWAR
              </div>
              <div className="flex align-items-center justify-around">
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                >
                  **
                </a>

                <div className="flex">
                  {" "}
                  <a className="btn-card-closed rounded-5" href="#">
                    Closed
                  </a>
                  <span className="text-red-500 flex items-center ml-3">
                    Closed
                  </span>
                </div>
              </div>
              <p className="mt-1 text-black border-top-0 justify-center !important items-center">
                05:30 PM
              </p>
            </div>

            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
                FARIDABAD
              </div>
              <div className="flex align-items-center justify-around">
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                >
                  **
                </a>

                <div className="flex">
                  {" "}
                  <a className="btn-card rounded-5" href="#">
                    Play Now
                  </a>
               
                  <span className="text-green-500 flex items-center ml-3">
                    Running
                  </span>
                </div>
              </div>
            
              <p className="mt-1 text-black border-top-0 justify-center !important items-center">
                06:30 PM
              </p>
            </div>

            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
                GAZIABAD
              </div>
              <div className="flex align-items-center justify-around">
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                >
                  **
                </a>

                <div className="flex">
                  {" "}
                  <a className="btn-card rounded-5" href="#">
                    Play Now
                  </a>
               
                  <span className="text-green-500 flex items-center ml-3">
                    Running
                  </span>
                </div>
              </div>
            
              <p className="mt-1 text-black border-top-0 justify-center !important items-center">
                06:30 PM
              </p>
            </div>
            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
                GALI
              </div>
              <div className="flex align-items-center justify-around">
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                >
                  **
                </a>

                <div className="flex">
                  {" "}
                  <a className="btn-card rounded-5" href="#">
                    Play Now
                  </a>
               
                  <span className="text-green-500 flex items-center ml-3">
                    Running
                  </span>
                </div>
              </div>
            
              <p className="mt-1 text-black border-top-0 justify-center !important items-center">
                11:30 PM
              </p>
            </div>


         
        
          </div>
        </div>
       
      </div>
      <a className="mr-2 px-4 py-2 mt-3 flex justify-center login-primary text-white rounded w-100" href="#">
                    Chart
                  </a>
    </>
  );
};

export default StarLine;
