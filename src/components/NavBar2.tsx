import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface NavBar2Props {
  isFund?: boolean;
  isStarLine?: boolean;
  isBidHistory?: boolean;
  isWinHistory?: boolean;
  isHelp?: boolean;
  isMadhurNight?:boolean;
  isGameTime?:boolean;
  isEditProfile?:boolean;
}

export const NavBar2: React.FC<NavBar2Props> = ({
  isFund,
  isStarLine,
  isBidHistory,
  isWinHistory,
  isHelp,
  isMadhurNight,
  isGameTime,
  isEditProfile
  
}) => {
  return (
    <>
      {isBidHistory ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft />
          <button className="ml-3 flex items-center font-bold"> Bid History</button>
        </div>
      ) : null}

      {isWinHistory ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft />
          <button className="ml-3 flex items-center font-bold"> Win History</button>
        </div>
      ) : null}

{isFund ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft />
          <button className="ml-3 flex items-center font-bold"> Add Points</button>
        </div>
      ) : null}

{isStarLine ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft />
          <button className="ml-3 flex items-center font-bold"> Gali Desawar</button>
        </div>
      ) : null}

{isHelp ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft />
          <button className="ml-3 flex items-center font-bold"> How to Play</button>
        </div>
      ) : null}


{isMadhurNight   ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft />
          <button className="ml-3 flex items-center font-bold"> Madhur Night</button>
        </div>
      ) : null}

{isGameTime   ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft />
          <button className="ml-3 flex items-center font-bold">03:00 PM</button>
        </div>
      ) : null}



{isEditProfile   ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft />
          <button className="ml-3 flex items-center font-bold">Edit Profile</button>
        </div>
      ) : null}



    </>
  )
};


















 
