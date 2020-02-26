import React from "react";
import Typography from "../../components/typography";
import Button from "../../components/buttons";
import Line from "../../components/lines";

const WhatILove = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "450px"
      }}
    >
      <div>
        <Typography
          size="xlarge"
          style={{ marginTop: "30px" }}
        >
          What Actually
        </Typography>
        <Typography size="xlarge" style={{ lineHeight: "40px" }}>
          I Love to Do
        </Typography>
        <Line
          linelayout="vertical"
          bgColor="blue"
          style={{ marginBottom: "20px", marginTop: "10px" }}
        ></Line>
        <Typography
          size={"paragraph"}
          style={{ lineHeight: "15px", width: "350px" }}
        >
          Lorem ipsum dolor sit amet, aliquet vestibulum vel quam posuere
          iaculis porta, ut lorem sem suspendisse, proin faucibus eu posuere
          malesuada, mattis hymenaeos arcu volutpat, tortor consectetuer est.
        </Typography>
        <Typography
          size={"paragraph"}
          style={{ lineHeight: "15px", width: "350px", margin: "30px 0px" }}
        >
          Lorem ipsum dolor sit amet, aliquet vestibulum vel quam posuere
          iaculis porta, ut lorem sem suspendisse, proin faucibus eu posuere
          malesuada,
        </Typography>
      </div>
      <Button
        bgColor="blue"
        color="white"
        padding="small"
        style={{ width: "150px" }}
      >
        SEE MORE
      </Button>
    </div>
  );
};

export default WhatILove;
