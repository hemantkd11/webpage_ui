import React from "react";
import SlideShow from "../../slideShow/slide";
import {
  COMPANY_HEADER,
  COMPANY_BANNER_TEXT,
  VEGA_TEXTBOX_HEADER,
  VEGA_TEXTBOX_BODY,
} from "../../APP_CONSTANTS_TEXT";
import Sliders from "../../slideShow/Slider";
import VegaPayTeam from "./team";
import {
  VEGA_TEAM_IMG,
  VEGA_TEAM_SOCIAL_LOGO,
  sliderData,
} from "../../IMAGE_CONSTANTS";
import TwitterIcon from "@mui/icons-material/Twitter";
import Team from "./team";
const VegaCompany = () => {
  return (
    <div className="Container">
      <div className="Header_Banner">
        <div className="header-conatiner-box">
          <div className="conatiner-box">
            <div className="text-two">
              <div className="Header-text company_header2">
                {COMPANY_HEADER}
              </div>
              <div className="text-body">{COMPANY_BANNER_TEXT}</div>
            </div>
          </div>

          <div className=" conatiner-box">
            <div className="mobile-logo">
              <img src="./mobile-logo2.png" alt="Mobile logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="Vegacompany">
        <VegaPayCompany />
      </div>
      <div className="slideShow_box">
        <Sliders sliderData={sliderData} />
      </div>
      <div className="team_container">
        <VegaPayTeam />
      </div>
    </div>
  );
};
export default VegaCompany;
const VegaPayCompany = () => {
  return (
    <div className="container-company">
      <div className="company_header">
        <div className="vegacompany-header">{VEGA_TEXTBOX_HEADER}</div>
        <div className="company-text">
          <div className="text-logo">
            <img src="./symbol.png" style={{ width: "8vw" }} />
          </div>
          <div className="Vega-company-text">{VEGA_TEXTBOX_BODY}</div>
        </div>
      </div>
    </div>
  );
};
