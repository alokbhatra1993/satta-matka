import React from "react";
import { MyDatePicker } from "./MyDatePicker";
import { FaArrowLeft } from 'react-icons/fa';
import { NavBar2 } from "./NavBar2";


export const BidHistory: React.FC = () => {
  return (
    <>
     <NavBar2 isBidHistory={true}/>
      <div className="container mx-auto p-4 rounded-lg text-white mt-4">
       

        <div className="login-primary px-4 py-4 rounded-4">
          <div className="flex justify-around ">
            <h1 className="text-white">From Date</h1>
            <h1 className="text-white">To Date</h1>
          </div>

          <div className="flex justify-around">
            <MyDatePicker />

            <MyDatePicker />
          </div>

        <button className="rounded mt-3 bg-blue-800 submit-request px-5 py-2 text-white">
          SUBMIT REQUEST
        </button>
        </div>

      </div>
    </>
  );
};

export default BidHistory;
