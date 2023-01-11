import React from "react";
import { Button, Grid } from "@mui/material";
import VegaWorks from "./VegaWorks";
import "./platfrom.css";
import EastIcon from "@mui/icons-material/East";
import CreditSuite from "./CreditSuite";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Slider from "../Slider";
import { useModal } from "../context/ModelContext";

const VegaPay = () => {
    const {setModal} = useModal(false)
  return (
    <div className="Container">
      <div className="Header_Banner">
        <div className="header-conatiner-box">
          <div className="text">
            <div className="Header-text">
              Launch digital-first credit programs in less than 7 days
            </div>
            <p className="text-body">
              Integrate with a pre-build LOS, LMS, payouts and more with
              VegaPay's all-in-one cradit suite
            </p>
            <Button
              sx={{
                background: " #ffffff",
                color: " #36285B",
                borderRadius: "1px",
                position:'unset'
          
              }}
             onClick={()=>setModal(true)}
              variant="contained"
              endIcon={<EastIcon />}
            >
              Learn More
            </Button>
          </div>

          <div className="mobile-logo">
            <img src="./mobile_logo.svg" alt="Mobile logo" />
          </div>
        </div>
      </div>
      <div className="VegaPay_platform">
        <VegaPowerPlatform />
      </div>
      <div className="VegaCredit">
        <CreditSuite />
      </div>
      <div>
        <Slider />
      </div>
      <div className="Vegaworks">
        <VegaWorks />
      </div>
      <div className="VegaContact">
        <VegaContactInfo />
      </div>
    </div>
  );
};
export default VegaPay;

const VegaPowerPlatform = () => {
  return (
    <div className="Platform-container">
      <div className="platform-box">
        <div className="platform_header">
          <div className="text_header">The power of our Platform</div>

          <div className="text_body">
            We Put the power in our partners hands with out flexible and
            intuitive platform. Each highly-configurable module orchestrates an
            end-to-end experience for your bank and your coustomers
          </div>
        </div>

        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ justifyContent: "center" }}
        >
          <Grid div xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="logo-box">
                <img src="./logo1.png" />
              </div>
              <div className="contained">
                <div className="platform-box-heading">Omnichannel Apply</div>
                <div className="text-comp">
                  Deliver tailored white-labeled consumer experiences, designed
                  and optimized for conversions across all channels.
                </div>
              </div>
            </div>
          </Grid>
          <Grid div xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="logo-box">
                <img src="./logo2.png" />
              </div>
              <div className="contained">
                <div className="platform-box-heading">Design Engine</div>
                <div className="text-comp">
                  Host and deploy robust, fast and flexible models that support
                  virtually any type of decisioning logic and analytics.
                </div>
              </div>
            </div>
          </Grid>
          <Grid div xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="logo-box">
                <img src="./logo3.png" />
              </div>
              <div className="contained">
                <div className="platform-box-heading">
                  Fraud and Verification
                </div>
                <div className="text-comp">
                  Address the risks of digital identity, income, bank account,
                  and employment verification with a suite of API-driven
                  modules, underpinned by flexible and proprietary data sources.
                </div>
              </div>
            </div>
          </Grid>
          <Grid div xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="logo-box">
                <img src="./logo4.png" />
              </div>
              <div className="contained">
                <div className="platform-box-heading">
                  Account Management Platform
                </div>
                <div className="text-comp">
                  Optimize your existing customer relationships by leveraging
                  integrated and comprehensive account management capabilities.
                </div>
              </div>
            </div>
          </Grid>
          <Grid div xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="logo-box">
                <img src="./logo5.png" />
              </div>
              <div className="contained">
                <div className="platform-box-heading">Partner Portal</div>
                <div className="text-comp">
                  Leverage account investigation features, complaints and
                  disputes management, suspicious activity review, and our
                  AI-powered recommendations engine — all in one powerful
                  partner-facing tool.
                </div>
              </div>
            </div>
          </Grid>
          <Grid div xs={6} padding={1}>
            <div className="platform_container gap">
              <div className="logo-box">
                <img src="./logo6.png" />
              </div>
              <div className="contained">
                <div className="platform-box-heading">
                  Data Orchestration Hub
                </div>
                <div className="text-comp">
                  Navigate a network of curated data sources in one
                  simple-to-use access point. Leverage best-in-class integration
                  partners to orchestrate the best experience for your
                  consumers.
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
const VegaContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-box-temp">
        <div className="contact-email-logo">
          <div className="email-logo">
            <MailOutlineIcon />
          </div>
          <div>contact Us</div>
        </div>
        <div className="temp">
          Launch next gen credit programs in less than 7 days
        </div>
      </div>
    </div>
  );
};
