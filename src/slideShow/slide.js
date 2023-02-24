import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          infinite: true,
          centerMode: true,
          centerPadding: "150px",
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="simple_slide_box">
      <div className="slide_container">
        <Slider {...settings}>
          <div className="img_slide_box">
            <img src="./banner.png" alt="Mobile logo" />
          </div>
          <div className="img_slide_box">
            <img src="./banner.png" alt="Mobile logo" />
          </div>
          <div className="img_slide_box">
            <img src="./banner.png" alt="Mobile logo" />
          </div>
          <div className="img_slide_box">
            <img src="./banner.png" alt="Mobile logo" />
          </div>
          <div className="img_slide_box">
            <img src="./banner.png" alt="Mobile logo" />
          </div>
          <div className="img_slide_box">
            <img src="./banner.png" alt="Mobile logo" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlideShow;
