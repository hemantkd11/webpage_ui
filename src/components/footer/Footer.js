import { Button } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer-box">
        <div className="footer-text">
          <div className="Footer-header-text">VegaPay</div>
          <div className="footer-details">
            <div className="text-footer-right flexBox">
              <div className="vegapayment-solution">
                VegaPay is the only payments solution in India that allows
                businesses to accept, process and disburse payments with its
                product suite. It gives you access to all payment modes
                including credit card, debit card, netbanking, UPI and popular
                wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge,
                Ola Money and PayZapp.
              </div>
              <div className="Flex-for-Row">
                <p className="text-color">Privacy Podivcy</p>
                <p className="text-color">Terms of use</p>
              </div>
            </div>

            <div className="flexBox">
              <div className="list-details">
                <div className="footer-content footer-mid-box">
                  <div className="text-color">Platform</div>
                  <div className="padding font ">Overview</div>
                  <div className="padding font">LOS</div>
                  <div className="padding font">LMS</div>
                  <div className="padding font">Payouts</div>
                  <div className="text-color footer-gap">
                    <p>Solutions</p>

                    <div>Co-brand credit</div>
                    <p>BNPL</p>
                  </div>
                </div>
                <div className="footer-divst footer-mid-box">
                  <div className="dev-box">
                    <div className=" text-color footer-gap">Developers</div>
                    <div className="text-color footer-gap font">Company</div>
                    <div className="text-color footer-gap font">Contact Us</div>
                    <div className="text-color footer-gap font">Careers</div>
                    <p className="text-color footer-gap ">About Us</p>
                  </div>

                  <div>
                    <Button
                      sx={{
                        width: "80%",
                        height: "30px",
                        fontSize: "10px",
                        background: " #fff",
                        color: "black",
                        borderRadius: "0",
                      }}
                      variant="contained"
                      endIcon={<EastIcon />}
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="address-box flexBox text-footer-left">
              <div className="vegapayment-solution">
                <div className="text-color">ADDRESS</div> <br />
                REGD. OFFICE ADDRESS VegaPay Software Private divmited, 1st
                Floor, SJR Cyber, 22 Laskar Hosur Road, Adugodi, Bengaluru,
                560030, Karnataka, India CIN: U72200KA2013PTC097389
              </div>
              <div className="email-box">
                <div className="email-text-field">
                  Email - gaurav@vegapay.tech Contact No - +91 99303 28780
                  Privacy Podivcy Terms of use © VegaPay technology private
                  divmited
                </div>
                <div className="vega-tech">
                  © VegaPay technology private limited
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
