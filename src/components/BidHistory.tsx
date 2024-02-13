import React from "react";
import { MyDatePicker } from "./MyDatePicker";

export const BidHistory: React.FC = () => {
  return (
    <>
      <div className="container mx-auto p-4 max-w-md rounded-lg shadow-md  text-white mt-4">
        <div className="navbar-main p-4 mb-6">
          <button>Back</button>
        </div>

        <div className="login-primary px-4 py-4">
          <div className="flex justify-between ">
            <h1 className="text-white">From Date</h1>
            <h1 className="text-white">To Date</h1>
          </div>

          <div className="flex justify-between">
            <MyDatePicker />

            <MyDatePicker />
          </div>
        </div>

        <button className="rounded bg-blue-300 submit-request px-5 py-2 text-black">
          Submit Request
        </button>
      </div>
    </>
  );
};

export default BidHistory;
