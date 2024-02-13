import React from "react"
import DateRangePicker from "./DateRangePicker";

export const BidHistory: React.FC = () => {
    return (
        <>
            <div className="container mx-auto p-4 max-w-md rounded-lg shadow-md login-primary text-white mt-4">
                <div className="flex justify-between">
                    <h1 className="text-white">From Date</h1>
                    <h1 className="text-white">To Date</h1>
                </div>

                {/* Include the DateRangePicker component here */}
                <div className="flex justify-between">
                    <DateRangePicker />
                </div>

                <button className="rounded bg-blue-300 submit-request px-5 py-2 text-black">Submit Request</button>
            </div>
        </>
    )
}

export default BidHistory;
