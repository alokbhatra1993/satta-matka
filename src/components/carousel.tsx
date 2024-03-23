// Carousel.tsx
import React from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../images/banner1.jpg";


const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <div className="parent-slider max-w-screen-lg mx-auto">
      <Slider {...settings}>
        <div>
          <img
            className="w-full"
            src={banner1}
            alt="Slide 1"
          />
        </div>
        <div>
        <img
            className="w-full"
            src={banner1}
            alt="Slide 1"
          />
        </div>
        <div>
          <img className="w-full" src="https://blog.kheloo.com/wp-content/uploads/2023/07/Top-Reasons-Why-Satta-Matka-is-so-Famous.jpeg" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
