import React from "react";

import "../labpage1.css";
const FillInform = () => {
  return (
    <div className="labpage1-fillinform">
      <img
        src="/external/rectangle701114-cdj-200h.png"
        alt="Rectangle701114"
        className="labpage1-rectangle70"
      />
      <img
        src="/external/rectangle711115-bydc-200h.png"
        alt="Rectangle711115"
        className="labpage1-rectangle71"
      />
      <img
        src="/external/rectangle721116-cqxf-200h.png"
        alt="Rectangle721116"
        className="labpage1-rectangle72"
      />
      {/* <span className="labpage1-text050"> */}
      <input className="labpage1-text050" placeholder="Full name" />
      {/* </span> */}
      {/* <span className="labpage1-text052"> */}
      <input className="labpage1-text052" placeholder="Phone number" />
      {/* </span> */}
      {/* <span className="labpage1-text054"> */}
      <input className="labpage1-text054" placeholder="Location" />
      {/* </span> */}
      <div className="labpage1-person">
        <img
          src="/external/boundingboxi112-rcrk-200h.png"
          alt="BoundingboxI112"
          className="labpage1-boundingbox01"
        />
        <img
          src="/external/personi112-hbcv.svg"
          alt="personI112"
          className="labpage1-person1"
        />
      </div>
      <div className="labpage1-call2">
        <img
          src="/external/boundingboxi112-z1ou-200h.png"
          alt="BoundingboxI112"
          className="labpage1-boundingbox02"
        />
        <img
          src="/external/calli112-jl0g.svg"
          alt="callI112"
          className="labpage1-call3"
        />
      </div>
      <div className="labpage1-distance">
        <img
          src="/external/boundingboxi112-6fe2-200h.png"
          alt="BoundingboxI112"
          className="labpage1-boundingbox03"
        />
        <img
          src="/external/distancei112-nqbd.svg"
          alt="distanceI112"
          className="labpage1-distance1"
        />
      </div>
      <div className="labpage1-component2">
        <img
          src="/external/rectangle73i112-fxso-200h.png"
          alt="Rectangle73I112"
          className="labpage1-rectangle73"
        />
        <div className="labpage1-check">
          <img
            src="/external/checki112-emtc.svg"
            alt="checkI112"
            className="labpage1-check1"
          />
        </div>
      </div>
      <span className="labpage1-text056">
        <span className="labpage1-text057">
          By continuing, you agree to our
        </span>
        <span className="labpage1-text058"> T&amp;C</span>
        <span className="labpage1-text059">
          {" "}
          and
          <span
            dangerouslySetInnerHTML={{
              __html: " ",
            }}
          />
        </span>
        <span>privacy policy</span>
      </span>
      <img
        src="/external/rectangle741125-23nd-200h.png"
        alt="Rectangle741125"
        className="labpage1-rectangle74"
      />
      <div className="labpage1-text061">
        <button href="/">Proceed</button>
        {/* <span>Proceed</span> */}
      </div>
      <span className="labpage1-text063">
        <span>Fill in the details to get a call!</span>
      </span>
    </div>
  );
};

export default FillInform;
