import React from "react";
import Circles from "../../components/circles";
import cake from "../../assets/images/cake.jpeg";

const RoundBackground = () => {
  return (
    <div style={{ display: "flex" }}>
      <Circles
        bgColor="blueGrey"
        circleHeight="medium"
        circleWidth="medium"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={cake}
          alt="cake"
          style={{ width: "20px", height: "20px", alignSelf: "center" }}
        />
      </Circles>
    </div>
  );
};

export default RoundBackground;
