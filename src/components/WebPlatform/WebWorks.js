import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import { Web_PLATFORM_WORK_IMG } from "../../IMAGE_CONSTANTS";
import { Web_WROK_TEXT, Web_WORK_HEADER } from "../../APP_CONSTANTS_TEXT";

const WebWorks = () => {
  return (
    <div className="WebWork_Container">
      <div className="work-logo flex-box">
        <div className="Web_works_logo ">
          <img src={Web_PLATFORM_WORK_IMG} />
        </div>
      </div>

      <div className="Web_works_details flex-box">
        <div className="WebWorks_heading">{Web_WORK_HEADER}</div>
        <div className="work-space">{Web_WROK_TEXT}</div>
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
export default WebWorks;
