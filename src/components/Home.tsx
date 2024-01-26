// Carousel.tsx
import React from "react";
import Carousel from "./carousel";

const Home: React.FC = () => {
  return (
    // <>
      <div>
        <Carousel />
        <div className="flex justify-center mt-4">
        <button className="mx-2" >
          Whatsapp
        </button>
        <button className="mx-2" >
          Pause
        </button>
        <button className="mx-2">
          Play
        </button>
        <button className="mx-2" >
          Next
        </button>
      </div>
        </div>
    // </>
  );
};

export default Home;
