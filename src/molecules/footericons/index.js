import React from "react";
import Circles from "../../components/circles";
import facebook from "../../assets/images/facebook.png";

const FooterLogo = () => (
  <Circles
    bgColor="white"
    circleHeight="small"
    circleWidth="small"
    border="border"
        hover="blueBackground"
        style={{display: "flex", alignItems: "center", justifyContent: "center"}}
    >
        <div style={{}}>
            <img src={facebook} alt="facebook" />
        </div>
  </Circles>
);

export default FooterLogo