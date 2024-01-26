// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            src="https://5.imimg.com/data5/SELLER/Default/2023/10/356775806/FF/RW/DT/54596979/satka-matka-game-development.jpg"
            alt="Slide 1"
          />
        </div>
        <div>
          <img className="w-full" src="https://aryandigital.in/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-30-at-3.11.25-PM-1-780x470.jpeg" alt="Slide 2" />
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
