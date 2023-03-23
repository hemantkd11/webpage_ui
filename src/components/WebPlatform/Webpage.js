import React from "react";
import { Button, Grid } from "@mui/material";
import WebWorks from "./WebWorks";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import CreditSuite from "./CreditSuite";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useModal from "../context/ModelContext";
import SlideShow from "../../slideShow/slide";
import Sliders from "../../slideShow/Slider";
// import { sliderData } from "./IMAGE_CONSTANTS";
import {
  Web_PLATFORM_HEADER,
  Web_PLATFORM_SUB_HEADER,
  Web_PLATFROM_BOXHEADER,
  Web_PLATFROM_BOXTEXT,
  PLATFORM_TEMP1,
  PLATFORM_TEMPBODY1,
  PLATFORM_TEMP2,
  PLATFORM_TEMPBODY2,
  PLATFORM_TEMP3,
  PLATFORM_TEMPBODY3,
  PLATFORM_TEMP4,
  PLATFORM_TEMPBODY4,
  PLATFORM_TEMP5,
  PLATFORM_TEMPBODY5,
  PLATFORM_TEMP6,
  PLATFORM_TEMPBODY6,
  CONTACT_INFO_HEADER,
  CONTACT_INFO_TEXT,
} from "../../APP_CONSTANTS_TEXT";
import {
  Web_PLATFORM_BANNER,
  Web_PLATFORM_WORK,
  sliderData,
} from "../../IMAGE_CONSTANTS";

const WebPage = () => {
  const { setModal } = useModal(false);

  return (
    <div className="Container">
      <div className="Header_Banner">
        <div className="header-conatiner-box">
          <div className="container-box">
            <div className="text">
              <div className="Header-text">{Web_PLATFORM_HEADER}</div>
              <p className="text-body">{Web_PLATFORM_SUB_HEADER}</p>
              <Button
                sx={{
                  width: "150px",
                  background: " #ffffff",
                  color: " #36285B",
                  borderRadius: "1px",
                  padding: "10px",

                  position: "unset",

                  fontSize: "12px",
                }}
                onClick={() => setModal({ modal: "ADD_MODEL" })}
                variant="contained"
                endIcon={<Arrow />}
              >
                Request Demo
              </Button>
            </div>
          </div>

          <div className="container-box">
            <div className="mobile-logo">
              <img src={Web_PLATFORM_BANNER} alt="Mobile logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="WebPage_platform">
        <WebPowerPlatform />
      </div>
      <div className="WebCredit">
        <CreditSuite />
      </div>
      <div className="slideShow_bo">
        <Sliders sliderData={sliderData} />
      </div>
      <div className="Webworks">
        <WebWorks />
      </div>
      <div className="WebContact">
        <WebContactInfo />
      </div>
    </div>
  );
};
export default WebPage;

const WebPowerPlatform = () => {
  return (
    <div className="Platform-container">
      <div className="platform-box">
        <div className="platform_header">
          <div className="text_header">{Web_PLATFROM_BOXHEADER}</div>

          <div className="text_body">{Web_PLATFROM_BOXTEXT}</div>
        </div>

        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="main_container">
                <div className="logo-box">
                  <img src="./logo1.png" />
                </div>
                <div className="contained">
                  <div className="platform-box-heading">{PLATFORM_TEMP1}</div>
                  <div className="text-comp">{PLATFORM_TEMPBODY1}</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="main_container">
                <div className="logo-box">
                  <img src="./logo2.png" />
                </div>
                <div className="contained">
                  <div className="platform-box-heading">{PLATFORM_TEMP2}</div>
                  <div className="text-comp">{PLATFORM_TEMPBODY2}</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="main_container">
                <div className="logo-box">
                  <img src="./logo3.png" />
                </div>
                <div className="contained">
                  <div className="platform-box-heading">{PLATFORM_TEMP3}</div>
                  <div className="text-comp">{PLATFORM_TEMPBODY3}</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="main_container">
                <div className="logo-box">
                  <img src="./logo4.png" />
                </div>
                <div className="contained">
                  <div className="platform-box-heading">{PLATFORM_TEMP4}</div>
                  <div className="text-comp">{PLATFORM_TEMPBODY4}</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="main_container">
                <div className="logo-box">
                  <img src="./logo5.png" />
                </div>
                <div className="contained">
                  <div className="platform-box-heading">{PLATFORM_TEMP5}</div>
                  <div className="text-comp">{PLATFORM_TEMPBODY5}</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="main_container">
                <div className="logo-box">
                  <img src="./logo6.png" />
                </div>
                <div className="contained">
                  <div className="platform-box-heading">{PLATFORM_TEMP6}</div>
                  <div className="text-comp">{PLATFORM_TEMPBODY6}</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
const WebContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-box-temp">
        <div className="contact-email-logo">
          <div className="email-logo">
            <MailOutlineIcon />
          </div>
          <div className="center-text">{CONTACT_INFO_HEADER}</div>
        </div>
        <div className="temp center-text">{CONTACT_INFO_TEXT}</div>
      </div>
    </div>
  );
};
