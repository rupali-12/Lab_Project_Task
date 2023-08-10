import React from "react";

import "../labpage1.css";
const OfferLine = () => {
  return (
    <div className="labpage1-offerline">
      <img
        src="/external/rectangle1081129-heh-200h.png"
        alt="Rectangle1081129"
        className="labpage1-rectangle108"
      />
      <img
        src="/external/rectangle1061130-18wp-200h.png"
        alt="Rectangle1061130"
        className="labpage1-rectangle106"
      />
      <span className="labpage1-text065">
        <span className="labpage1-text066">Get a Full Body Checkup</span>
        <span className="labpage1-text067">
          {" "}
          Now
          <span
            dangerouslySetInnerHTML={{
              __html: " ",
            }}
          />
        </span>
        <span>at</span>
      </span>
      <div className="labpage1-currencyrupee">
        <img
          src="/external/currencyrupee1134-7r6.svg"
          alt="currencyrupee1134"
          className="labpage1-currencyrupee01"
        />
      </div>
      <span className="labpage1-text069">
        <span>5,999</span>
      </span>
      <img
        src="/external/rectangle1071136-qi3h-200h.png"
        alt="Rectangle1071136"
        className="labpage1-rectangle107"
      />
      <div className="labpage1-currencyrupee02">
        <img
          src="/external/currencyrupee1139-f4js.svg"
          alt="currencyrupee1139"
          className="labpage1-currencyrupee03"
        />
      </div>
      <span className="labpage1-text071">
        <span>999</span>
      </span>
      <span className="labpage1-text073">
        <span>70% OFF</span>
      </span>
    </div>
  );
};

export default OfferLine;
