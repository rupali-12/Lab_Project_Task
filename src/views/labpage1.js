import React from "react";

import { Helmet } from "react-helmet";

import "../labpage1.css";
import Accreditation from "../Components/Accrediction";
import KeepExpand from "../Components/KeepExpand";
import Group8 from "../Components/Group8";
import BackGround from "../Components/BackGround";
import ChooseUs from "../Components/ChooseUs";
import FillInform from "../Components/FillInform";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroText from "../Components/HeroText";
import OfferLine from "../Components/OfferLine";

const Labpage1 = (props) => {
  return (
    <div className="labpage1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="labpage1-labpage1">
        <BackGround />
        <Footer />
        <HeroText />
        <FillInform />
        <OfferLine />
        <ChooseUs />
        <Header />
        <Group8 />
        <KeepExpand />
        <Accreditation />
      </div>
    </div>
  );
};

export default Labpage1;
