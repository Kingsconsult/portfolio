import React from "react";
import Circles from "../../components/circles";
import Typography from "../../components/typography";

const CircleDisplay = () => (
  <Circles
    bgColor="white"
    color="black"
    circleHeight="large"
    circleWidth="large"
    border="border"
    hover="blueBackground"
    hoverBorder="border"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Typography size={"big"} style={{ marginTop: "5px" }}>
        1285
      </Typography>
      <Typography size={"small"} style={{ marginTop: "-30px" }}>
        PROJECTS
      </Typography>
    </div>
  </Circles>
);

export default CircleDisplay;
