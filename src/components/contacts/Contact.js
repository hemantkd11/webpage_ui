import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

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

// const Contact =()=>{
//   return (
//     <div className="grid-contact-container">
//       <div className="grid-main-box">
//          <div className="grid-container-form">
//          <Grid container spacing={1} >
//               <Grid xs={12}  sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
//                <div>Contact Us</div>
//               </Grid>

//                   <Grid xs={6} >
//                       <div className=" grid-flex">
//                        <label className="">First name</label>
//                        <input type="text" className="" placeholder="First Name"/>
//                      </div>
//                   </Grid>
//                   <Grid  xs={6} >
//                     <div className="grid-flex">
//                         <label className="">Last name</label>
//                         <input type="text"
//                            className="subject-input "
//                            placeholder="Last Name"/>
//                     </div>
//                   </Grid>

//                 <Grid  xs={11}>
//                 <div className="grid-flex">
//                         <label className="">Last name</label>
//                         <input type="text"
//                            className="subject-input "
//                            placeholder="Last Name"/>
//                     </div>
//                 </Grid>
//                 <Grid  xs={11}>
//                 <div className="grid-flex">
//                         <label className="">Last name</label>
//                         <input type="text"
//                            className="subject-input "
//                            placeholder="Last Name"/>
//                     </div>
//                 </Grid>
//                 <Grid  xs={11}>
//                 <div className="grid-flex">
//                         <label className="">Last name</label>
//                         <input type="text"
//                            className="subject-input "
//                            placeholder="Last Name"/>
//                     </div>
//                 </Grid>

//             </Grid>

//          </div>
//       </div>
//     </div>

//   )
// }

export default Contact;
