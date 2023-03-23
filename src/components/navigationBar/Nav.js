import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import useModal from "../context/ModelContext";
import "./nav.css";

const Nav = () => {
  const { setModal } = useModal(false);

  const Navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="nav-bar-box">
      <div className="navbar">
        <div className="nav-list-box">
          <div className="nav-logo-box">
            <div className="logo" onClick={() => Navigate("./webpage_ui/")}>
              WebPage
            </div>
          </div>

          <div className="nav-list-item">
            <ul
              className={isMobile ? "nav-link-mobile" : "nav-link"}
              onClick={() => setIsMobile(false)}
            >
              <div className="drawer_view">
                <li className="list" onClick={() => Navigate("./webpage_ui/")}>
                  Platform
                </li>
                <li className="list">Solutions</li>
                <li
                  className="list"
                  onClick={() => Navigate("./webpage_ui/aboutcompany")}
                >
                  Company
                </li>
                <li className="list">Devlopers</li>
                <li
                  className="list CONTACT"
                  onClick={() => Navigate("./webpage_ui/contact")}
                >
                  Contact Us
                </li>
                <li className="log-btn">Log-In</li>
              </div>
            </ul>
          </div>

          <div className="nav-btns-box">
            <div className="click-btn">
              <div className="LOG_BTN">
                <Button
                  sx={{
                    width: "100px",
                    padding: "5px",
                    height: "auto",
                    fontSize: "14px",
                    padding: "4px 10px",
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
                  borderRadius: "14px",
                  background: "#452d85",
                  padding: "6px 10px ",
                  "&:hover": {
                    background: "#20153e",
                  },
                }}
                endIcon={<Arrow />}
                variant="contained"
                onClick={() => setModal({ modal: "ADD_MODEL" })}
              >
                Register
              </Button>

              <button
                className="menu"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
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

{
  /* <SwipeableDrawer
              anchor="left"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              swipeAreaWidth={drawerBleeding}
              disableSwipeToOpen={false}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{ width: "300px" }}
              variant="temporary"
            >
              <List sx={{ display: "flex", flexDirection: "column" }}>
                {[
                  "Platform",
                  "Solutions",
                  "Company",
                  "Devlopers",
                  "Contact Us",
                ]}
              </List>
            </SwipeableDrawer> */
}
