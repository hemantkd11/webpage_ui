import { Button, Modal } from "@mui/material";
import "./model.css";
import React, { useState } from "react";

const VegaModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="Model-body">
      <div className="Model-container">
        <div className="body-one">
          <div className="model-logo">
            <img src="./VegaPay.png" />
          </div>
        </div>
        <div className="body-two">
          <div className="input-field">
            <div className="sub-input flex">
              <label className="subject input-label">Full Name</label>

              <input
                type="text"
                className="subject-input "
                placeholder="Enetr Your FullName"
              />
            </div>
            <div className="sub-input flex">
              <label className="subject input-label">
                Enter your Organization Email
              </label>

              <input
                type="text"
                className="subject-input"
                placeholder="Enter Organization Email"
              />
            </div>
            <div className="contact-information ">
              <div className="sub-input flex">
                <label className="subject input-label">Phone Number</label>

                <input
                  type="text"
                  className="subject-input "
                  placeholder="Enter Your Phone No."
                />
              </div>
              <div className="sub-input flex">
                <label className="subject input-label">Designation</label>

                <input
                  type="text"
                  className="subject-input "
                  placeholder="Enter Your Designation"
                />
              </div>
            </div>
            <div>
              <button className="submi"> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VegaModal;
