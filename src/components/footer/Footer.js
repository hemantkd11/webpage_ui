import { Button } from "@mui/material";
import React from "react";
import useModal from "../context/ModelContext";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import "./footer.css";
const Footer = () => {
  const setModal = useModal(false);
  return (
    <div className="footer_container">
      <div className="footer-box">
        <div className="footer-text">
          <div className="Footer-header-text">WebPage</div>
          <div className="footer-details">
            <div className="text-footer-right flexBox">
              <div className="WebPagement-solution">
                WebPage is the only payments solution in India that allows
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

            <div className="flexBox ">
              <div className="list-details">
                <div className="footer-content footer-mid-box">
                  <div className="text-color">Platform</div>
                  <div className="padding font ">Overview</div>
                  <div className="padding font">LOS</div>
                  <div className="padding font">LMS</div>
                  <div className="padding font">Payouts</div>
                  <div className="text-color footer-gap solution_box">
                    <p>Solutions</p>

                    <div className="text-shade">Co-brand credit</div>
                    <p className="text-shade">BNPL</p>
                  </div>
                </div>
                <div className="footer-divst footer-mid-box">
                  <div className="dev-box">
                    <div className=" text-color footer-gap">Developers</div>
                    <div className="text-color footer-gap font">Company</div>
                    <div className="text-color footer-gap font">Contact Us</div>
                    <div className="text-color footer-gap font">Careers</div>
                    <div className="text-color footer-gap ">About Us</div>
                  </div>

                  <div>
                    <Button
                      sx={{
                        width: "100%",
                        maxWidth: "100px",
                        height: "20px",
                        fontSize: "8px",
                        background: " #fff",
                        color: "black",
                        borderRadius: "0",
                        position: "unset",
                        letterSpacing: "0px",
                        lineHeight: "8px",
                        textTransform: "none",
                        padding: "5px 3px",
                      }}
                      onClick={() => setModal(true)}
                      variant="contained"
                      endIcon={<Arrow sx={{ width: "15px" }} />}
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="address-box flexBox text-footer-left">
              <div className="WebPagement-solution">
                <div className="text-color">ADDRESS</div> <br />
                REGD. OFFICE ADDRESS WebPage Software Private divmited, 1st
                Floor, SJR Cyber, 22 Laskar Hosur Road, Adugodi, Bengaluru,
                560030, Karnataka, India CIN: U72200KA2013PTC097389
              </div>
              <div className="email-box">
                <div className="email-text-field">
                  <div>Email - gaurav@WebPage.tech</div>
                  <div>Contact No - +91 99303 28780</div>
                </div>
                <div className="Web-tech">
                  © WebPage technology private limited
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
