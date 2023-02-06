import React from "react";
import { TextField } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import Slider from "../Slider";
const VegaCompany = () => {
  return (
    <div className="Container">
      <div className="Header_Banner">
        <div className="header-conatiner-box">
          <div className="conatiner-box">
            <div className="text">
              <div className="Header-text">
                VegaPay is a financial technology company born out of disruption
                and built for speed.
              </div>
              <div className="text-body">
                We partner with banks and financial institutions to rapidly
                digitize their financial infrastructure and optimize growth
                opportunities in the modern world of banking.
              </div>
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
      <div>
        <Slider />
      </div>
      <div>
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
        <div className="vegacompany-header">Vision and Mission</div>
        <div className="company-text">
          <div className="text-logo">
            <img src="./symbol.png" style={{'width':'8vw'}} />
          </div>
          <div className="Vega-company-text">
            VegaPay provides you with a comprehensive credit suite featuring a
            wide breadth of modules and no-code configuration to design, deploy,
            and direct your credit programs. VegaPay provides you with a
            comprehensive credit suite featuring a wide breadth of modules and
            no-code configuration to design, deploy, and direct your credit
            programs. VegaPay provides you with a comprehensive credit suite
            featuring a wide breadth of modules and no-code configuration to
            design, deploy, and direct your credit programs.
          </div>
        </div>
      </div>
    </div>
  );
};

const VegaPayTeam = () => {
  return (
    <div className="team-container">
      <div className="team-main-box">
        <div className="team-heading"> The VegaPay Team</div>
        <div className="team-img">
          <div className="teamImg-box">
            <div className="team-member">
              <img src="./image.png" />
            </div>
            <div className="member-name">Puneet Sharma</div>
            <div className="social-site-logo">
              <div>
                <TwitterIcon
                  sx={{
                    width: "100%",
                    background: "lightgray",
                    height: 20,
                    borderRadius: "100%",
                  }}
                />
              </div>

              <div className="vector-in">
                <img src="./VectorIn.png" />
              </div>
            </div>
          </div>
          <div className="teamImg-box">
            <div className="team-member">
              <img src="./image.png" />
            </div>
            <div className="member-name">Puneet Sharma</div>
            <div className="social-site-logo">
              <div>
                <TwitterIcon
                  sx={{
                    width: 20,
                    background: "lightgray",
                    height: 20,
                    borderRadius: "100%",
                  }}
                />
              </div>

              <div className="vector-in">
                <img src="./VectorIn.png" />
              </div>
            </div>
          </div>
          <div className="teamImg-box">
            <div className="team-member">
              <img src="./image.png" />
            </div>
            <div className="member-name">Puneet Sharma</div>
            <div className="social-site-logo">
              <div>
                <TwitterIcon
                  sx={{
                    width: 20,
                    background: "lightgray",
                    height: 20,
                    borderRadius: "100%",
                  }}
                />
              </div>

              <div className="vector-in">
                <img src="./VectorIn.png" />
              </div>
            </div>
          </div>
          <div className="teamImg-box">
            <div className="team-member">
              <img src="./image.png" />
            </div>
            <div className="member-name">Puneet Sharma</div>
            <div className="social-site-logo">
              <div>
                <TwitterIcon
                  sx={{
                    width: 20,
                    background: "lightgray",
                    height: 20,
                    borderRadius: "100%",
                  }}
                />
              </div>

              <div className="vector-in">
                <img src="./VectorIn.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
