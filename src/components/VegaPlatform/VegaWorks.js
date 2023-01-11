import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";

const VegaWorks = () => {
  return (
    <div className="VegaWork_Container">
      <div className="work-logo flex-box">
        <div className="vega_works_logo ">
          <img src="./howVegaWork-img.png" />
        </div>
      </div>

      <div className="vega_works_details flex-box">
        <div className="VegaWorks_heading">How VegaPay works ?</div>
        <div className="work-space">
          VegaPay provides you with a comprehensive credit suite featuring a
          wide breadth of modules and no-code configuration to design, deploy,
          and direct your credit programs.
        </div>
        <div>
          <Button
            sx={{ background: " #331251", borderRadius: "1px" }}
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
