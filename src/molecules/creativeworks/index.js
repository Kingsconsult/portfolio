import React from "react";
import Typography from "../../components/typography";
import Line from "../../components/lines"

const CreativeWork = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "450px"
      }}
    >
      <div>
        <Typography size={"xlarge"} style={{ lineHeight: "50px" }}>
          Some of My
        </Typography>
        <Typography size={"xlarge"} style={{ lineHeight: "50px" }}>
          Creative Works
        </Typography>
        <Line linelayout="vertical" bgColor="blue" style={{marginTop: "20px"}}></Line>
        <Typography size={"paragraph"} style={{ lineHeight: "30px", marginTop: "20px" }}>
          Lorem ipsum dolor sit amet, aliquet vestibulum vel quam posuere
          iaculis porta, ut lorem sem suspendisse, proin faucibus eu posuere
          malesuada, mattis hymenaeos arcu volutpat, tortor consectetuer.
        </Typography>
      </div>
    </div>
  );
};

export default CreativeWork;
