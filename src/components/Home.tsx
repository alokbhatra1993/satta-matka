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
        <button className="mx-2">Pause</button>
        <button className="mx-2">Play</button>
        <button className="mx-2">Next</button>
      </div>

      <div className="buttons-new flex justify-center mt-4">
        <button className="mx-2">Play Star Line</button>
        <button className="mx-2">Website</button>
        <button className="mx-2">Gali Desawar</button>
      </div>

    </div>
    // </>
  );
};

export default Home;
