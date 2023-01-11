import { Button } from "@mui/material";
import React, { useState } from "react";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const Navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="nav-bar-box">
      <div className="navbar">
        <div className="nav-list-box">
          <div className="logo" onClick={() => Navigate("./")}>
            VegaPay
          </div>
          <div className="list-menu">
            <ul
              className={isMobile ? "nav-link-mobile" : "nav-link"}
              onClick={() => setIsMobile(false)}
            >
              <li className="home">
                <a href="https://www.youtube.com/watch?v=3ncFpP8GP4g">
                  Platform
                </a>
              </li>
              <li className="list">Solutions</li>
              <li className="list">Company</li>
              <li className="list">Devlopers</li>
              <li className="list">Contact Us</li>
            </ul>
            <div></div>
          </div>

          <div className="click-btn">
            <Button
              sx={{
                width: "auto",
                padding: "1px",
                height: "40px",
                fontSize: "12px",
                padding: "0px 10px 0px 10px",
              }}
              variant="outlined"
            >
              Log In
            </Button>
            <Button
              sx={{
                padding: "0px 10px 0px 10px",
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
                <i>
                  <MenuIcon />
                </i>
              ) : (
                <i>
                  <MenuIcon />
                </i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
