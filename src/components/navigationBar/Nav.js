import { Button } from "@mui/material";
import React, { useState } from "react";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./nav.css";

const Nav = () => {
  const Navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="nav-bar-box">
      <div className="navbar">
        <div className="nav-list-box">
          <div className="nav-logo-box">
            <div className="logo" onClick={() => Navigate("./")}>
              VegaPay
            </div>
          </div>

          <div className="nav-list-item">
            <ul
              className={isMobile ? "nav-link-mobile" : "nav-link"}
              onClick={() => setIsMobile(false)}
            >
              <li className="list"> Platform </li>
              <li className="list">Solutions</li>
              <li className="list" onClick={() => Navigate("./aboutcompany")}>
                Company
              </li>
              <li className="list">Devlopers</li>
              <li className="list" onClick={() => Navigate("./contact")}>
                Contact Us
              </li>
            </ul>
          </div>

          <div className="nav-btns-box">
            <div className="click-btn">
              <Button
                sx={{
                  width: "auto",
                  padding: "5px",
                  height: "auto",
                  fontSize: "12px",
                }}
                variant="outlined"
              >
                <span className="mui-btn-text">Log In</span>
              </Button>
              <Button
                sx={{
                  width: "160px",
                  height: "auto",
                  fontSize: "12px",
                  borderRadius: "40px",
                  background: "#452d85",
                }}
                endIcon={<Arrow />}
                variant="contained"
              >
                Request Demo
              </Button>
              <button
                className="menu"
                onClick={() => setIsMobile(setIsMobile ? true : false)}
              >
                {isMobile ? (
                  <CloseIcon
                    sx={{ fontSize: "small", padding: "2px", border: "none" }}
                    onClick={() => setIsMobile(true)}
                  />
                ) : (
                  <MenuIcon
                    sx={{ fontSize: "large", padding: "0px", border: "none" }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;

{
  /* <Tabs mdDown
       className= {isMobile?"nav-link-mobile":'nav-link'}
       
       onClick={() => setIsMobile(false)}
       value={value}
       onChange={handelOnchange}
       textColor='secondary'
       indicatorColor="secondary"
       aria-label="secondary tabs example">
        <Tab value="one" label='one' onClick={()=>Navigate('./contact')}/>
        <Tab value="two"  label='two' onClick={()=>Navigate('./aboutcompany')}/>
        <Tab value="three"  label='three' onClick={()=>Navigate('./contact')}/>
       </Tabs> */
}
