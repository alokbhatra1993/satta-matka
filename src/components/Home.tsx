// Carousel.tsx
import React from "react";
import Carousel from "./carousel";
import {
  FaGlobe,
  FaMoneyBillWave,
  FaPhone,
  FaPlay,
  FaPlayCircle,
  FaStreetView,
  FaWhatsapp,
} from "react-icons/fa";

const Home: React.FC = () => {
  return (
    // <>
    <div>
      <Carousel />

      <div className="container primary-text">

      <div className="flex flex-wrap -mx-2 justify-center">
        {/* WhatsApp Button */}
        <div className="sm:w-1/2 md:w-1/4 px-2 mb-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-2 md:px-4 rounded h-100">
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </button>
        </div>

        {/* Add Money Button */}
        <div className="sm:w-1/2 md:w-1/4 px-2 mb-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 md:px-4 rounded h-100">
            <FaMoneyBillWave className="mr-2" />
            Add Money
          </button>
        </div>

        {/* How to Play Button */}
        <div className="sm:w-1/2 md:w-1/4 px-2 mb-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 md:px-4 rounded h-100">
            <FaPlay className="mr-2" />
            How to Play
          </button>
        </div>

        {/* Phone Button */}
        <div className="sm:w-1/2 md:w-1/4 px-2 mb-4">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-2 md:px-4 rounded h-100">
            <FaPhone className="mr-2" />
            9001729883
          </button>
        </div>
      </div>

      <div className="main-wrap mt-2 flex flex-col md:flex-row md:space-x-4">

{/* Play Star Line Button */}
<button className="bg-white hover:bg-yellow-600 text-black font-medium py-2 px-4 md:py-2 md:px-4 rounded-5 mb-2 md:mb-0">
  <FaPlayCircle className="mr-2" />
  Play Star Line
</button>

{/* Website Button */}
<button className="bg-white hover:bg-indigo-600 text-black font-medium py-2 px-4 md:py-2 md:px-4 rounded-5 mb-2 md:mb-0">
  <FaGlobe className="mr-2" />
  Website
</button>

{/* Gali Desawar Button */}
<button className="bg-white hover:bg-red-600 text-black font-medium py-2 px-4 md:py-2 md:px-4 rounded-5 mb-2 md:mb-0">
  <FaStreetView className="mr-2" />
  Gali Desawar
</button>

</div>

    </div>

      <div className="max-w-md mx-auto rounded-xl overflow-hidden satta-matka-home">
        <div className="satta-matka">
          <div className="md:flex-shrink-0"></div>
          <div className="card-bg">
         
            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
               RAJDHANI DAY
              </div>
              <div className="flex align-items-center justify-around">

              <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                  <FaMoneyBillWave className="mr-2" />
                  </a>
                <div className="flex">
                  {" "}
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                    569-900-668
                  </a>
                </div>
                <div className="flex">
                  {" "}
                  <a className="btn-card rounded-5" href="#">
                    Play Now
                  </a>
                </div>
              </div>
              <p className="mt-2 text-black">
                Open : 09:30 <b className="text-green-600">Running</b> <span>Closes:10:30 AM</span>
              </p>
            </div>

            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
               MADHUR DAY
              </div>
              <div className="flex align-items-center justify-around">

              <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                  <FaMoneyBillWave className="mr-2" />
                  </a>
                <div className="flex">
                  {" "}
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                    569-900-668
                  </a>
                </div>
                <div className="flex">
                  {" "}
                  <a className="btn-card-closed rounded-5" href="#">
                    Closed
                  </a>
                </div>
              </div>
              <p className="mt-2 text-black">
                Open : 09:30 <b className="text-red-600">Closed</b> <span>Closes:10:30 AM</span>
              </p>
            </div>
            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
               MILAN DAY
              </div>
              <div className="flex align-items-center justify-around">

              <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                  <FaMoneyBillWave className="mr-2" />
                  </a>
                <div className="flex">
                  {" "}
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                    569-900-***
                  </a>
                </div>
                <div className="flex">
                  {" "}
                  <a className="btn-card rounded-5" href="#">
                    Play Now
                  </a>
                </div>
              </div>
              <p className="mt-2 text-black">
                Open : 09:30 <b className="text-green-600">Running</b> <span>Closes:10:30 AM</span>
              </p>
            </div>

            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
               MADHUR DAY
              </div>
              <div className="flex align-items-center justify-around">

              <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                  <FaMoneyBillWave className="mr-2" />
                  </a>
                <div className="flex">
                  {" "}
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                    569-900-668
                  </a>
                </div>
                <div className="flex">
                  {" "}
                  <a className="btn-card-closed rounded-5" href="#">
                    Closed
                  </a>
                </div>
              </div>
              <p className="mt-2 text-black">
                Open : 09:30 <b className="text-red-600">Closed</b> <span>Closes:10:30 AM</span>
              </p>
            </div>
            <div className="card-new p-2">
              <div className="uppercase heading-block tracking-wide text-xl font-bold">
                SUPREME DAY
              </div>
              <div className="flex align-items-center justify-around">

              <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                  <FaMoneyBillWave className="mr-2" />
                  </a>
                <div className="flex">
                  {" "}
                  <a
                    href="#"
                    className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                  >
                    569-900-668
                  </a>
                </div>
                <div className="flex">
                  {" "}
                  <a className="btn-card rounded-5" href="#">
                    Play Now
                  </a>
                </div>
              </div>
              <p className="mt-2 text-black">
                Open : 09:30 <b className="text-green-600">Running</b> <span>Closes:10:30 AM</span>
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
