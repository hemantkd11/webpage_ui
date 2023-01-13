import { Button, Modal, SvgIcon } from "@mui/material";
import "./model.css";
import React, { useState } from "react";
import { useModal } from "../context/ModelContext";
import Checkbox from '@mui/material/Checkbox';
import { TurnedIn } from "@mui/icons-material";

const VegaModal = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const {modal ,setModal} =  useModal(false)
  const modaldata = modal
  return (
    <Modal
    open={true}
    onClose={()=>setModal({modal:false,modaldata:{}})}>
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
                placeholder="Enter Your Email"
              />
            </div>





            <div className=" contact-box-flex ">
            <div className="first_lastName-box">
              <div className=" flex-1">
                <label className="subject input-label">Phone Number</label>

                <input
                  type="text"
                  className="subject-input"
                  placeholder="Enter Your Phone No."/>
               </div>
                <div className=" flex-1">
                   <label className="subject input-label">Designation</label>

                   <input
                     type="text"
                     className="subject-input "
                     placeholder="Enter Your Designation" />
          
              </div>
            </div>
         </div>
            {/* <div className="contact-information ">
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
            </div> */}
            <div className="sub-input flex">
            
              <p className="modal-checkBox">
               
                <Checkbox checked={checked} onChange={handleChange}  sx={{padding:'0px 3px 0px 0px'}}/>
               
            
              I hereby authorize and provide consebt to vegaPay to contact
               me via. Email,SMS or a Phone Call.
              </p>

            </div>
            <div className="vegaSubmit_btn flex">
            <button type="submit" className="Sign-in-btn">
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </Modal>
    
  );
};
export default VegaModal;
