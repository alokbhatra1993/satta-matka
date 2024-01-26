// Carousel.tsx
import React from "react";
import Carousel from "./carousel";

const Home: React.FC = () => {
  return (
    // <>
    <div>
      <Carousel />

      <div className="buttons-new flex justify-center mt-4">
        <button className="mx-2">Whatsapp</button>
        <button className="mx-2">Add Money</button>
        <button className="mx-2">How to Play</button>
        <button className="mx-2">+91-9001719883</button>
      </div>

      <div className="website-star-line">
        <button className="mx-2">Play Star Line</button>
        <button className="mx-2">Website</button>
        <button className="mx-2">Gali Desawar</button>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
        <div className="md:flex">
          <div className="md:flex-shrink-0"></div>
          <div className="card-bg">
            <div className="card-new p-8">
              <div className="uppercase tracking-wide text-lg text-white font-semibold">
                Kalyan Satta Matka Online
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
              >
                569-900-668
              </a>
          <a className="btn-card" href="#">Play Now</a>
              <p className="mt-2 text-white">
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
