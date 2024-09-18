import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images, setActiveIndex }) => {
  // const nxtSlide = () => {
  //   setActiveIndex(
  //     (prevSlide) => (prevSlide - 1 + images.length) % images.length
  //   );
  // };

  const settings = {
    centerMode: true,
    centerPadding: "50px",
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: Math.min(images.length, 1), // Maximum of 3 columns
    slidesToScroll: 1,
    focusnChange: true,
    focusnSelect: true,
    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 1, // Show only one column on smaller screens
        },
      },
    ],
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="">
            <div key={index} alt={`Slide ${index}`}>
              {image}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
