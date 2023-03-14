import React from "react";
import Slider from "react-slick";
import "./Sliders.css";

const Sliders = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    focusOnSelect: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll1: 1,
    speed: 500,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          centerMode: true,
          centerPadding: "100px",
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          infinite: true,
          autoplaySpeed: 3000,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="simple_slide_container">
      <Slider {...settings}>
        {sliderData.map((slide, index) => {
          return (
            <div key={index} className="image_slider_box">
              <img src={slide.image} alt="slider" className="image" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliders;
