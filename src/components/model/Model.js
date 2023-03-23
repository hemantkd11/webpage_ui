import { Drawer, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseOutlined";
// import CloseIcon from '@mui/icons-material/Close';
import "./model.css";
import React from "react";
import useModal from "../context/ModelContext";
import Checkbox from "@mui/material/Checkbox";

const WebModal = () => {
  const { modal, setModal } = useModal();
  const { modaldata } = modal;
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Modal
      open={true}
      onClose={() => setModal({ modal: false, modaldata: {} })}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <div
        className="Model-body "
        onClick={() => setModal({ modal: false, modaldata: {} })}
      >
        <div className="Model-container" onClick={(e) => e.stopPropagation()}>
          <div className="body-one">
            <div className="model-logo">
              <img src="./WebPage.png" />
            </div>
            <div className="sm_screen_cls_btn">
              <button
                className="close-btn-sm"
                onClick={() => setModal({ modal: false })}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className="body-two">
            <div className="close_btn_box">
              <button
                className="close-btn"
                onClick={() => setModal({ modal: false })}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="input-field">
              <div className="sub-input flex">
                <label className="subject input-label">Full Name</label>

                <input
                  type="text"
                  className="subject-input "
                  placeholder="Enetr Your Full Name"
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
                      placeholder="Enter Your Phone No."
                    />
                  </div>
                  <div className=" flex-1">
                    <label className="subject input-label">Designation</label>

                    <input
                      type="text"
                      className="subject-input "
                      placeholder="Enter Your Designation"
                    />
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
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    sx={{ padding: "0px 3px 0px 0px" }}
                  />
                  I hereby authorize and provide consebt to WebPage to contact
                  me via. Email,SMS or a Phone Call.
                </p>
              </div>
              <div className="WebSubmit_btn flex">
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
export default WebModal;
