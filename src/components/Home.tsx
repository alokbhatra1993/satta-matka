// Carousel.tsx
import React from "react";
import Carousel from "./carousel";
import { FaGlobe, FaMoneyBillWave, FaPhone, FaPlay, FaPlayCircle, FaStreetView, FaWhatsapp } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    // <>
    <div>
      <Carousel />

      <div className="flex justify-center space-x-4 mt-4">
      {/* WhatsApp Button */}
      <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
        <FaWhatsapp className="mr-2" />
        WhatsApp
      </button>

      {/* Add Money Button */}
      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
        <FaMoneyBillWave className="mr-2" />
        Add Money
      </button>

      {/* How to Play Button */}
      <button className="flex items-center bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
        <FaPlay className="mr-2" />
        How to Play
      </button>

      {/* Phone Button */}
      <button className="flex items-center bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">
        <FaPhone className="mr-2" />
        Phone
      </button>
      
    </div>

    <div className="main-wrap">
             {/* Play Star Line Button */}
             <button className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded">
        <FaPlayCircle className="mr-2" />
        Play Star Line
      </button>

      {/* Website Button */}
      <button className="flex items-center bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">
        <FaGlobe className="mr-2" />
        Website
      </button>

      {/* Gali Desawar Button */}
      <button className="flex items-center bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
        <FaStreetView className="mr-2" />
        Gali Desawar
      </button>
    </div>



      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
        <div className="satta-matka">
          <div className="md:flex-shrink-0"></div>
          <div className="card-bg">
            <div className="card-new p-5">
              <div className="uppercase tracking-wide text-xl text-blue-700 font-bold">
                Kalyan Satta Matka Online
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
              >
                569-900-668
              </a>
          <a className="btn-card" href="#">Play Now</a>
              <p className="mt-2 text-black">
               Open : 09:30 <b>Running</b> <span>Closes:10:30 AM</span>
              </p>
            </div>
            <div className="card-new p-5">
              <div className="uppercase tracking-wide text-xl text-blue-700 font-bold">
                Kalyan Satta Matka Online
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
              >
                569-900-668
              </a>
          <a className="btn-card" href="#">Play Now</a>
              <p className="mt-2 text-black">
               Open : 09:30 <b>Running</b> <span>Closes:10:30 AM</span>
              </p>
            </div>
            <div className="card-new p-5">
              <div className="uppercase tracking-wide text-xl text-blue-700  font-bold">
                Kalyan Satta Matka Online
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
              >
                569-900-668
              </a>
          <a className="btn-card" href="#">Play Now</a>
              <p className="mt-2 text-black">
               Open : 09:30 <b>Running</b> <span>Closes:10:30 AM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </>
  );
};

export default Home;
