import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { VEGA_TEAM_IMG, VEGA_TEAM_SOCIAL_LOGO } from "../../IMAGE_CONSTANTS";

// const Team = () => {
//   const settings = {
//     className: "center",
//     arrows: false,

//     infinite: false,
//     autoplay: true,
//     speed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1050,
//         settings: {
//           infinite: true,
//           autoplaySpeed: 3000,
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           infinite: true,
//           autoplaySpeed: 3000,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="simple_slide_box">
//       <div className="slide_container">
//         <Slider {...settings}>
//           <div className="teamImg-box">
//             <div className="team-member">
//               <img src="./image.png" alt="team" />
//             </div>
//             <div className="member-name">Pneet Sharma</div>
//             <div className="social-site-logo">
//               <div className="vector-in">
//                 <TwitterIcon
//                   sx={{
//                     width: "13px",
//                     height: "20px",
//                   }}
//                 />
//               </div>

//               <div className="vector-in">
//                 <img src="./VectorIn.png" alt="team" />
//               </div>
//             </div>
//           </div>
//           <div className="teamImg-box">
//             <div className="team-member">
//               <img src="./image.png" alt="team" />
//             </div>
//             <div className="member-name">Puneet Sharma</div>
//             <div className="social-site-logo">
//               <div className="vector-in">
//                 <TwitterIcon
//                   sx={{
//                     width: "13px",
//                     height: "20px",
//                   }}
//                 />
//               </div>

//               <div className="vector-in">
//                 <img src="./VectorIn.png" alt="team" />
//               </div>
//             </div>
//           </div>
//           <div className="teamImg-box">
//             <div className="team-member">
//               <img src="./image.png" alt="team" />
//             </div>
//             <div className="member-name">Puneet Sharma</div>
//             <div className="social-site-logo">
//               <div className="vector-in">
//                 <TwitterIcon
//                   sx={{
//                     width: "13px",
//                     height: "20px",
//                   }}
//                 />
//               </div>

//               <div className="vector-in">
//                 <img src="./VectorIn.png" alt="team" />
//               </div>
//             </div>
//           </div>
//           <div className="teamImg-box">
//             <div className="team-member">
//               <img src="./image.png" alt="team" />
//             </div>
//             <div className="member-name">Puneet Sharma</div>
//             <div className="social-site-logo">
//               <div className="vector-in">
//                 <TwitterIcon
//                   sx={{
//                     width: "13px",
//                     height: "20px",
//                   }}
//                 />
//               </div>

//               <div className="vector-in">
//                 <img src="./VectorIn.png" alt="team" />
//               </div>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Team;

const VegaPayTeam = () => {
  const Images = [
    <img className="hide" src={VEGA_TEAM_IMG} />,
    <img src={VEGA_TEAM_IMG} />,
    <img src={VEGA_TEAM_IMG} />,
    <img src={VEGA_TEAM_IMG} />,
  ];

  const icon = [<img src={VEGA_TEAM_SOCIAL_LOGO} />];

  return (
    <div className="team-container">
      <div className="team-main-box">
        <div className="team-heading"> The VegaPay Team</div>
        <div className="team-img">
          <div className="teamImg-box">
            {Images.map((img, i) => (
              <div className="to_demo">
                <div className="team-member">{img}</div>
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
                  <div className="vector-in">{icon}</div>
                </div>
              </div>
            ))}

            {/* <div className="member-name">Puneet Sharma</div>
//             <div className="social-site-logo">
//               <div className="vector-in">
//                 <TwitterIcon
//                   sx={{
//                     width: "13px",
//                     height: "20px",
//                   }}
//                 />
//               </div>

//               <div className="vector-in">{icon}</div>
//             </div> */}
          </div>
          {/* <div className="teamImg-box">
//             <div className="team-member">
//               <img src="./image.png" />
//             </div>
//             <div className="member-name">Puneet Sharma</div>
//             <div className="social-site-logo">
//               <div className="vector-in">
//                 <TwitterIcon
//                   sx={{
//                     width: "13px",
//                     height: "20px",
//                   }}
//                 />
//               </div>

//               <div className="vector-in">
//                 <img src="./VectorIn.png" />
//               </div>
//             </div>
//           </div>
//           <div className="teamImg-box">
//             <div className="team-member">
//               <img src="./image.png" />
//             </div>
//             <div className="member-name">Puneet Sharma</div>
//             <div className="social-site-logo">
//               <div className="vector-in">
//                 <TwitterIcon
//                   sx={{
//                     width: "13px",
//                     height: "20px",
//                   }}
//                 />
//               </div>

//               <div className="vector-in">
//                 <img src="./VectorIn.png" />
//               </div>
//             </div>
//           </div>
//           <div className="teamImg-box">
//             <div className="team-member">
//               <img src="./image.png" />
//             </div>
//             <div className="member-name">Puneet Sharma</div>
//             <div className="social-site-logo">
//               <div className="vector-in">
//                 <TwitterIcon
//                   sx={{
//                     width: "13px",
//                     height: "20px",
//                   }}
//                 />
//               </div>

//               <div className="vector-in">
//                 <img src="./VectorIn.png" />
//               </div>
//             </div>
//           </div> */}
        </div>
      </div>
    </div>
  );
};

export default VegaPayTeam;
