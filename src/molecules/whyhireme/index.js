import React from "react";
import Typography from "../../components/typography";
import Button from "../../components/buttons";
import Line from "../../components/lines";

const WhyHireMe = () => {
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
          style={{ lineHeight: "0px", marginTop: "30px" }}
        >
          Why you
        </Typography>
        <Typography size="xlarge" style={{ lineHeight: "80px" }}>
          Should Hire Me
        </Typography>
        <Line
          linelayout="vertical"
          bgColor="blue"
          style={{ marginBottom: "20px" }}
        ></Line>
        <Typography
          size={"paragraph"}
          style={{ lineHeight: "20px", width: "350px" }}
        >
          Lorem ipsum dolor sit amet, aliquet vestibulum vel quam posuere
          iaculis porta, ut lorem sem suspendisse, proin faucibus eu posuere
          malesuada, mattis hymenaeos arcu volutpat, tortor consectetuer est.
        </Typography>

      </div>
      <Button
        bgColor="blue"
        color="white"
        padding="small"
        style={{ width: "180px" }}
      >
        HIRE ME
      </Button>
    </div>
  );
};

export default WhyHireMe;
