import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <div className="form">
          <div className="flex heading-flex">
            <h3 className="heading">Contact Us</h3>
          </div>

          <div className=" contact-box-flex ">
            <div className="first_lastName-box">
              <div className=" flex-1">
                <label className="subject input-label">First name</label>

                <input
                  type="text"
                  className="subject-input"
                  placeholder="First Name"
                />
              </div>
              <div className=" flex-1">
                <label className="subject input-label">Last name</label>

                <input
                  type="text"
                  className="subject-input "
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className=" flex">
            <label className="subject input-label">Email</label>

            <input type="text" className="subject-input " placeholder="Email" />
          </div>
          <div className=" flex">
            <label className="subject input-label">Subject</label>

            <input
              type="text"
              className="subject-input"
              placeholder="Write Subject"
            />
          </div>
          <div className="msg-input flex">
            <label className="message input-label">Message</label>

            <input
              type="text"
              className="message-input"
              placeholder="Write Message"
            />
          </div>
          <div className="vegaSubmit_btn flex">
            <button type="submit" className="Sign-in-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
