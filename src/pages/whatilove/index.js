import React from "react";
import WhatILove from "../../molecules/whatilove";
import Card1 from "../../organisms/card1";
import CircleDisplay from "../../molecules/circleMolecule";
import WhatILoveStyle from "./style";

const WhatILovePage = () => (
  <WhatILoveStyle>
    <div className="whatilove">
      <div className="main">
        <div className="typo">
          <WhatILove className="what"></WhatILove>
        </div>
        <div className="cards">
          <div
            className="another1"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "70vh",
              justifyContent: "space-around",
              paddingTop: "45px",
              position: "absolute",
              left: "50vw"
            }}
          >
            <Card1 className="single1"></Card1>
            <Card1 className="single2"></Card1>
          </div>
          <div
            className="another2"
            className="another1"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "62vh",
              justifyContent: "space-around",
              paddingTop: "-80px",
              position: "absolute",
              left: "66vw"
            }}
          >
            <Card1 className="single1"></Card1>
            <Card1 className="single2" style={{position: "relative", paddingTop: "-20px"}}></Card1>
          </div>
        </div>
      </div>
      <div className="circle">
        <div className="smallcircle">
          <CircleDisplay className="small1"></CircleDisplay>
          <CircleDisplay className="small1"></CircleDisplay>
          <CircleDisplay className="small1"></CircleDisplay>
          <CircleDisplay className="small1"></CircleDisplay>
        </div>
      </div>
    </div>
  </WhatILoveStyle>
);

export default WhatILovePage;
