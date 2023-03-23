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
          <img
            className="img-log"
            src="data:image/jpeg;base64,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"
          />
          {/* <img src={Web_PLATFORM_WORK_IMG} /> */}
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
