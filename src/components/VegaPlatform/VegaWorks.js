import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import { VEGA_PLATFORM_WORK_IMG } from "../../IMAGE_CONSTANTS";
import { VEGA_WROK_TEXT, VEGA_WORK_HEADER } from "../../APP_CONSTANTS_TEXT";

const VegaWorks = () => {
  return (
    <div className="VegaWork_Container">
      <div className="work-logo flex-box">
        <div className="vega_works_logo ">
          <img src={VEGA_PLATFORM_WORK_IMG} />
        </div>
      </div>

      <div className="vega_works_details flex-box">
        <div className="VegaWorks_heading">{VEGA_WORK_HEADER}</div>
        <div className="work-space">{VEGA_WROK_TEXT}</div>
        <div>
          <Button
            sx={{
              background: " #331251",
              borderRadius: "1px",
              position: "unset",
            }}
            variant="contained"
            endIcon={<EastIcon />}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
export default VegaWorks;
