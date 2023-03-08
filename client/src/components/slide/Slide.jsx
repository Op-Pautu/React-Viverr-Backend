import React from "react";
import Slider from "react-slick";

function Slide({ children, slidesToScroll, slidesToShow }) {
  let settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: true,
  };

  return (
    <div className="slide">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Slide;
