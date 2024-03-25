import React from "react";
import singleDigit from "../images/single-digit (1).svg";
import jodiDigit from "../images/jodi-digit.svg";
import singlePanna from "../images/single-panna.svg";
import doublePanna from "../images/double-panna.svg";
import tripplePanna from "../images/tripple-panna.svg";
import halfSangam from "../images/half-sangam.svg";
import fullSangam from "../images/full-sangam.svg"; // Import the image
import { FaArrowLeft } from "react-icons/fa";
import { NavBar2 } from "./NavBar2";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavBar2Props {
  isFund?: boolean;
  isBidHistory?: boolean;
  isWinHistory?: boolean;
  isHelp?: boolean;
  isMadhurNight?: boolean;
}

export const MadhurNight: React.FC<NavBar2Props> = ({
  isFund,
  isBidHistory,
  isWinHistory,
  isHelp,
  isMadhurNight
}) => {
  const location = useLocation();
  const navigate = useNavigate()

  // const handleNavigaetion = () => {
  //   navigate("/Doublepanna")
  // }

  return (
    <div className="container px-15">
      <NavBar2 isMadhurNight={true} />
      <div className="flex flex-row">
        <div className="w-1/2 pr-2">
          <button onClick={()=>{navigate("/Doublepanna" ,{state:{isJodiDigit:true}})}}>
            <img src={singleDigit} alt="Left Image" className="w-full" />
          </button>
        </div>
        {
          location?.state?.open ? (
            <div className="w-1/2 pl-2">
              <button >
                <img src={jodiDigit} alt="Right Image" className="w-full" />
              </button>
            </div>
          ) : null
        }

      </div>
      <div className="flex flex-row">
        <div className="w-1/2">
          <button onClick={()=>{navigate("/Doublepanna" ,{state:{isSingleDigit:true}})}}>
            <img src={singlePanna} alt="Left Image" className="w-full" />
          </button>
        </div>
        <div className="w-1/2">
          <button onClick={()=>{navigate("/Doublepanna" ,{state:{isDoubleDigit:true}})}} >
            <img src={doublePanna} alt="Right Image" className="w-full" />
          </button>
        </div>

      </div>
      <div className="flex flex-row">
        <div className="w-1/2">
          <button onClick={()=>{navigate("/Doublepanna" ,{state:{isTrippleDigit:true}})}} >
            <img src={tripplePanna} alt="Left Image" className="w-full" />
          </button>
        </div>
        {
          location?.state?.open ? (
            <div className="w-1/2">
              <button onClick={()=>{navigate("/Doublepanna" ,{state:{isHalfSangam:true}})}} >
                <img src={halfSangam} alt="Right Image" className="w-full" />
              </button>
            </div>
          ) : null}


      </div>
      {
        location?.state?.open ? (
          <div className="flex flex-row">
            <div className="w-1/2 mx-auto">
              <button onClick={()=>{navigate("/Doublepanna" ,{state:{isFullSangam:true}})}} >
                <img src={fullSangam} alt="Left Image" className="w-full" />
              </button>
            </div>

          </div>
        ) : null}

    </div>
  );
};

export default MadhurNight;
