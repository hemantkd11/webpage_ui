import {  Button,  Tab, Tabs } from "@mui/material";
import {makeStyles} from '@mui/styles'
import React, { useState } from "react";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import "./nav.css"

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
              <li className="list" onClick={()=>Navigate('./contact')} >Contact Us</li>
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
      {/* <Tabs mdDown
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
       </Tabs> */}
      
    </div>
  );
};
export default Nav;

