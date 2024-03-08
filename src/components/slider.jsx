import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  // const [currentSlide, setCurrentSlide] = useState[0];

  // const prevSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  // };

  // const nxtSlide = () => {
  //   setCurrentSlide(
  //     (prevSlide) => (prevSlide - 1 + images.length) % images.length
  //   );
  // };

  const settings = {
    centerMode: true,
    centerPadding: "100px",
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: Math.min(images.length, 1), // Maximum of 3 columns
    slidesToScroll: 1,
    focusnChange: true,
    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 1, // Show only one column on smaller screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>{image}</div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
