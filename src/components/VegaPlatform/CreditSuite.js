import React from "react";

const CreditSuite = () => {
  return (
    <div className="credit-box">
      <div className="credit-suite">
        <div className="credit-header">
          <div className="center-text">All-in-one credit suite</div>
        </div>

        <div className="credit-details">
          <div className="credit-content">
            <div className="img-credit">
              <div className="credit-logo">
                <img src="./mask.png" />
              </div>
              <div className="credit-flex">One vendor</div>
            </div>
            <div className="img-credit">
              <div className="credit-logo">
                <img src="./mask1.png" />
              </div>
              <div className="credit-flex">One contract</div>
            </div>
            <div className="img-credit">
              <div className="credit-logo">
                <img src="./Frame.png" />
              </div>
              <div className="credit-flex">Zero hassles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditSuite;
