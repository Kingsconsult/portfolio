import React from "react";
import Typography from "../../components/typography";
import Button from "../../components/buttons";

const HeroInfo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "450px"
      }}
    >
      <div>
        <Typography size="small">HELLO!</Typography>
        <Typography size={"xlarge"} style={{ lineHeight: "50px" }}>
          I'm Kingsley Okpara
        </Typography>
        <Typography
          size={"paragraph"}
          style={{ lineHeight: "20px", width: "35vw", marginTop: "20px" }}
        >
          Lorem ipsum dolor sit amet, aliquet vestibulum vel quam posuere
          iaculis porta, ut lorem sem suspendisse, proin faucibus eu posuere
          malesuada, mattis hymenaeos arcu volutpat.
        </Typography>
      </div>
      <Button
        bgColor="blue"
        color="white"
        padding="small"
        style={{ width: "180px", marginTop: "30px" }}
      >
        DOWNLOAD CV
      </Button>
    </div>
  );
};

export default HeroInfo;
