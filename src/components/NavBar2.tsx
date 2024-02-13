import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface NavBar2Props {
  isFund?: boolean;
  isBidHistory?: boolean;
  isWinHistory?: boolean;
}

export const NavBar2: React.FC<NavBar2Props> = ({
  isFund,
  isBidHistory,
  isWinHistory,
  
}) => {
  return (
    <>
      {isBidHistory ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center">
          <FaArrowLeft />
          <button className="ml-3 flex items-center"> Bid History</button>
        </div>
      ) : null}

      {isWinHistory ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center">
          <FaArrowLeft />
          <button className="ml-3 flex items-center"> Win History</button>
        </div>
      ) : null}



    </>
  );
};
