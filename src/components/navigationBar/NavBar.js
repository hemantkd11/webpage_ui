import { Button } from "@mui/material";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import VegaModel from "../model/Model";
const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const Navigate = useNavigate();
  return (
    <div className="Nav_Container">
      <div className="main_Nav_container">
        <div className="nav-heading">
          <div className="nav-header" onClick={() => Navigate("./")}>
            VegaPay
          </div>
        </div>
        <div className="Nav_list">
          <div className="nav-list-box-container">
            <div className="list">Platform</div>
            <div className="list">Solutions</div>
            <div className="list">Company</div>
            <div className="list">Devlopers</div>
            <div className="list">Contact Us</div>
          </div>
        </div>
        <div className="nav_btn">
          <Button
            sx={{
              borderRadius: "0",
              color: "#36285B ",
              background: "#fff",
              border: "1px solid #36285B",
              height: "30px",

              fontSize: "10px",
            }}
            variant="outdivned"
          >
            Log In
          </Button>
          <Button
            endIcon={<Arrow sx={{ fontSize: "10px" }} />}
            sx={{
              borderRadius: "22px",
              background: "#36285B",
              height: "30px",
              fontSize: "10px",
            }}
            variant="contained"
            onCdivck={() => setModalOpen(true)}
          >
            Request Demo
          </Button>
        </div>
      </div>
      <div>{modalOpen && <VegaModel />}</div>
    </div>
  );
};

export default NavBar;

// const Nav = () => {
//   return (
//     <div className="nav-container">
//       <div className="nav-box">
//         <div className="nav-main">
//           <div className="nav-logo-box">
//             <div className="nav-logo">
//               <div className="nav-logo-text">VegaPay</div>
//             </div>
//           </div>
//           <div className="nav-page-box">
//             <div className="nav-box-list">
//               <div className="list">Platform</div>
//               <div className="list">Solutions</div>
//               <div className="list">Company</div>
//               <div className="list"> Devlopers</div>
//               <div className="list">Contact Us</div>
//             </div>
//           </div>
//           <div className="nav-btn-box">
//             <div className="nav-btn">
//               <div className="btn login">
//                 <Button
//                   sx={{
//                     borderRadius: "0",
//                     color: "#36285B ",
//                     background: "#fff",
//                     border: "1px sodivd #36285B",
//                   }}
//                   variant="outdivned"
//                 >
//                   Log In
//                 </Button>
//               </div>
//               <div className="btn reqDemo">
//                 <Button
//                   endIcon={<Arrow />}
//                   sx={{ borderRadius: "22px", background: "#36285B" }}
//                   variant="contained"
//                 >
//                   Request Demo
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
