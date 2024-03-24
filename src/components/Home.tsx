// Carousel.tsx
import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || '';

  const [mainGameList, setMainGameList] = useState([]);

  useEffect(() => {
    gameList()
  }, [])


  const gameList = async () => {
    try {

      const response = await fetch("https://smapidev.co.in/api/Api/main_game_list",
        {
          method: "POST",
          headers: {
            token
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Cookie': 'ci_session=0b0000be09ab15b1746f67a94c05d0d6761be9f3'
          },
        });

      response.json().then((result: any) => {
        // console.log(result);
        if (result.code == 100) {
          setMainGameList(result?.data)
        }

      }).catch((error: any) => {
        alert(error)
      })

    } catch (error) {
      alert("ERROR IN GAME LIST" + error)
    }
  }

  // console.log({ mainGameList });


  return (
    // <>
    <div>
      <Carousel />

      <div className="container primary-text">
        <div className="flex flex-row gap-3">
          {/* WhatsApp Button */}
          <button className="custom-green text-white font-medium py-2 px-2 rounded" >
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </button>

          {/* Add Money Button */}
          <button className="custom-blue text-white font-medium py-2 px-2 rounded" onClick={() => { navigate("/withdraw") }}>
            <FaMoneyBillWave className="mr-2" />
            Add Money
          </button>

          {/* How to Play Button */}
          <button className="custom-purple text-white font-medium py-2 px-2 rounded" onClick={() => { navigate("/help") }}>
            <FaPlay className="mr-2" />
            How to Play
          </button>

          {/* Phone Button */}
          <button className="bg-white hover:bg-black-600 text-black font-medium py-2 px-2 rounded">
            <FaPhone className="mr-2" />
            9001729883
          </button>
        </div>

        {/* Secondary Buttons */}
        <div className="flex flex-row md:flex-row gap-3 md:space-x-4 mt-4">
          {/* Play Star Line Button */}
          <button className="bg-white hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded" onClick={() => { navigate("/starline") }}>
            <FaPlayCircle className="mr-2" />
            Play Star Line
          </button>

          {/* Website Button */}
          <button className="bg-white hover:bg-indigo-600 text-black font-medium py-2 px-4 rounded">
            <FaGlobe className="mr-2" />
            Website
          </button>

          {/* Gali Desawar Button */}
          <button className="bg-white hover:bg-red-600 text-black font-medium py-2 px-4 rounded">
            <FaStreetView className="mr-2" />
            Gali Desawar
          </button>
        </div>
      </div>


      <div className="mx-auto rounded-xl overflow-hidden satta-matka-home">
        <div className="satta-matka">
          <div className="md:flex-shrink-0"></div>
          <div className="card-bg">
            {
              mainGameList.length > 0 ? (
                <>
                  {
                    mainGameList.map((game: any) => (
                      <div className="card-new p-2">
                        <div className="uppercase heading-block tracking-wide text-xl font-bold">
                          {game.name}
                        </div>
                        <div className="flex align-items-center justify-around">
                          <a
                            href="#"
                            className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                          >
                            <FaMoneyBillWave className="mr-2" />
                          </a>
                          <div className="flex">
                            <a
                              href="#"
                              className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline"
                            >
                              {/* 569-900-668 */}
                              {
                                game.sortcol?.toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
                              }
                            </a>
                          </div>
                          {
                            game.play ? (
                              <div className="flex">
                                <Link className="btn-card rounded-5"  to="/madhurnight" />
                                  Play Now
                              </div>
                            ) : (
                              <div className="flex">
                                <a className="btn-card-closed rounded-5" href="#">
                                  Closed
                                </a>
                              </div>
                            )
                          }
                        </div>
                        <p className="mt-2 text-black">
                          Open : {game.open_time}
                          {
                            game.open_time === Date.now() ? (
                              <b className="text-green-600"></b>
                            ) : null
                          }

                          <span>Closes: {game.close_time}</span>
                        </p>
                      </div>
                    ))
                  }
                </>
              ) : (
                <p>No data found</p>
              )
            }


            {/* <div className="card-new p-2">
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
                Open : 09:30 <b className="text-red-600">Closed</b>{" "}
                <span>Closes:10:30 AM</span>
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
                Open : 09:30 <b className="text-green-600">Running</b>{" "}
                <span>Closes:10:30 AM</span>
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
                Open : 09:30 <b className="text-red-600">Closed</b>{" "}
                <span>Closes:10:30 AM</span>
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
                Open : 09:30 <b className="text-green-600">Running</b>{" "}
                <span>Closes:10:30 AM</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    // </>
  );
};

export default Home;
