import React from "react";
import { Grid } from "@mui/material";
const CreditSuite = () => {
  return (
    // <div className="credit-box">
    //   <div className="credit-suite">
    //     <div className="credit-header credit">
    //       <div>All-in-one Credit suite</div>
    //     </div>

    //     <div className="credit-details">
    //       <div className="credit-content">
    //         <div className="img-credit">
    //           <div className="credit-logo">
    //             <img src="./mask.png" />
    //           </div>
    //           <div>One vendor</div>
    //         </div>
    //         <div className="img-credit">
    //           <div className="credit-logo">
    //             <img src="./mask1.png" />
    //           </div>
    //           <div>One contract</div>
    //         </div>
    //         <div className="img-credit">
    //           <div className="credit-logo">
    //             <img src="./Frame.png" />
    //           </div>
    //           <div>Zero hassles</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="credit-box">
      <div className="credit-suite">
        <div className="credit-header">
          <div>All-in-one Credit suite</div>
        </div>

        <div className="credit-details">
          <div className="credit-content">
            <div className="img-credit">
              <div className="credit-logo">
                <img src="./mask.png" />
              </div>
              <div>One vendor</div>
            </div>
            <div className="img-credit">
              <div className="credit-logo">
                <img src="./mask1.png" />
              </div>
              <div>One contract</div>
            </div>
            <div className="img-credit">
              <div className="credit-logo">
                <img src="./Frame.png" />
              </div>
              <div>Zero hassles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditSuite;

const CreditSuites = () => {
  return (
    <div className="credit-box">
      <div className="credit-suite">
        <div className="credit-header credit">
          <div>All-in-one Credit suite</div>
        </div>
        <div className="credit-grid">
          <Grid container>
            <div className="credit-details">
              <Grid xs>
                <div className="img-credit">
                  <div className="credit-logo">
                    <img src="./mask.png" />
                  </div>
                  <div>One vendor</div>
                </div>
              </Grid>
              <Grid xs={6}>
                <div className="img-credit">
                  <div className="credit-logo">
                    <img src="./mask.png" />
                  </div>
                  <div>One vendor</div>
                </div>
              </Grid>
              <Grid xs>
                <div className="img-credit">
                  <div className="credit-logo">
                    <img src="./mask.png" />
                  </div>
                  <div>One vendor</div>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};
