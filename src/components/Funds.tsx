import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavBar2 } from "./NavBar2";

interface NavBar2Props {
  isFund?: boolean;
  isBidHistory?: boolean;
  isWinHistory?: boolean;
}

export const Funds: React.FC<NavBar2Props> = ({
  isFund,
  isBidHistory,
  isWinHistory,
}) => {
  return (
    <div>
      <NavBar2 isFund={true} />
    <div className="container">
        <input className="form-control p-4" placeholder="Points" name="myInput" />
        <h2 className="text-blue-900 text-left mt-4">Select Point Amount</h2>
        <ul className="flex ml-3 pb-3">
       <li> <button className="btn-funds rounded-full bg-blue-900 py-2 px-4 text-white text-left flex justify-left mt-4">500</button></li>
       <li> <button className="btn-funds rounded-full bg-blue-900 py-2 px-4 text-white text-left flex justify-left mt-4 ml-3">1000</button></li>
       <li> <button className="btn-funds rounded-full bg-blue-900 py-2 px-4 text-white text-left flex justify-left mt-4 ml-3">2000</button></li>
       

        </ul>
        <ul className="flex ml-3 pb-3">
       <li> <button className="btn-funds rounded-full bg-blue-900 py-2 px-4 text-white text-left flex justify-left mt-2">5000</button></li>
       <li> <button className="btn-funds rounded-full bg-blue-900 py-2 px-4 text-white text-left flex justify-left mt-2 ml-3">10000</button></li>

       

        </ul>


        <ul className="ml-3 pb-3 text-left">
       <li className="mt-2 text-blue-900">   <input type="radio" name="myRadio" value="option2" /> Google Pay</li>
       <li className="mt-2 text-blue-900">   <input type="radio" name="myRadio" value="option2" /> Phone Pe</li>
       <li className="mt-2 text-blue-900">   <input type="radio" name="myRadio" value="option2" /> Paytm</li>
      
       <li> <button className="btn-funds rounded-lg bg-blue-900 py-2 px-4 text-white text-left flex justify-left mt-4 ml-3 mx-auto">Submit Request</button></li>

        </ul>
        </div>

    </div>
  );
};
