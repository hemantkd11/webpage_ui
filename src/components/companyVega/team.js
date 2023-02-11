import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TwitterIcon from "@mui/icons-material/Twitter";

const Team = () => {
  const settings = {
    className: "center",
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,

    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          infinite: true,
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
          slidesToScroll: 0,
        },
      },
    ],
  };
  return (
    <div className="simple_slide_box">
      <div className="slide_container">
        <Slider {...settings}>
          <div className="teamImg-box">
            <div className="team-member">
              <img src="./image.png" />
            </div>
            <div className="member-name">Pneet Sharma</div>
            <div className="social-site-logo">
              <div className="vector-in">
                <TwitterIcon
                  sx={{
                    width: "13px",
                    height: "20px",
                  }}
                />
              </div>

              <div className="vector-in">
                <img src="./VectorIn.png" />
              </div>
            </div>
          </div>
          <div className="teamImg-box">
            <div className="team-member">
              <img src="./image.png" />
            </div>
            <div className="member-name">Puneet Sharma</div>
            <div className="social-site-logo">
              <div className="vector-in">
                <TwitterIcon
                  sx={{
                    width: "13px",
                    height: "20px",
                  }}
                />
              </div>

              <div className="vector-in">
                <img src="./VectorIn.png" />
              </div>
            </div>
          </div>
          <div className="teamImg-box">
            <div className="team-member">
              <img src="./image.png" />
            </div>
            <div className="member-name">Pneet Sharma</div>
            <div className="social-site-logo">
              <div className="vector-in">
                <TwitterIcon
                  sx={{
                    width: "13px",
                    height: "20px",
                  }}
                />
              </div>

              <div className="vector-in">
                <img src="./VectorIn.png" />
              </div>
            </div>
          </div>
          <div className="teamImg-box">
            <div className="team-member">
              <img src="./image.png" />
            </div>
            <div className="member-name">Puneet Sharma</div>
            <div className="social-site-logo">
              <div className="vector-in">
                <TwitterIcon
                  sx={{
                    width: "13px",
                    height: "20px",
                  }}
                />
              </div>

              <div className="vector-in">
                <img src="./VectorIn.png" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Team;
