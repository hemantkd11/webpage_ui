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
              <li className="list" onClick={() => Navigate("./")}>
                {" "}
                Platform{" "}
              </li>
              <li className="list">Solutions</li>
              <li className="list" onClick={() => Navigate("./aboutcompany")}>
                Company
              </li>
              <li className="list">Devlopers</li>
              <li
                className="list CONTACT"
                onClick={() => Navigate("./contact")}
              >
                Contact Us
              </li>
              <li className="log-btn">Log-In</li>
            </ul>
          </div>

          <div className="nav-btns-box">
            <div className="click-btn">
              <div className="LOG_BTN">
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
              </div>

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
              <button className="menu">
                {isMobile ? (
                  <CloseIcon
                    sx={{ fontSize: "small", padding: "2px", border: "none" }}
                    onClick={() => setIsMobile(setIsMobile ? false : true)}
                  />
                ) : (
                  <MenuIcon
                    sx={{ fontSize: "large", padding: "0px", border: "none" }}
                    onClick={() => setIsMobile(setIsMobile ? true : false)}
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
