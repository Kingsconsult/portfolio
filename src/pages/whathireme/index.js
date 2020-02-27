import React from "react";

import WhyHireMe from "../../molecules/whyhireme";
import HorizontalCard from "../../organisms/card2";
import WhyHireMeStyle from "./style";
import Decagon from "../../assets/images/Decagon.png";

const WhyHireMePage = () => (
  <WhyHireMeStyle>
    <div className="whyhireme">
      <div className="main">
        <div className="typo">
          <WhyHireMe className="what"></WhyHireMe>
        </div>
        <div className="cards">
          <div className="horizontalcards">
            <HorizontalCard className="single1"></HorizontalCard>
            <HorizontalCard className="single2"></HorizontalCard>
            <HorizontalCard className="single2"></HorizontalCard>
          </div>
        </div>
      </div>
      <div className="circle">
        <div className="logos"></div>
        <img src={Decagon} alt="decagon" style={{ paddingRight: "50px" }} />
        <img src={Decagon} alt="decagon" style={{ paddingRight: "50px" }} />
        <img src={Decagon} alt="decagon" style={{ paddingRight: "50px" }} />
        <img src={Decagon} alt="decagon" style={{ paddingRight: "50px" }} />
        <img src={Decagon} alt="decagon" style={{ paddingRight: "50px" }} />
      </div>
    </div>
  </WhyHireMeStyle>
);

export default WhyHireMePage;
