import React from "react";
import RoundBackground from "../../molecules/roundBackground";
import Typography from "../../components/typography";
import Card from "../../components/cards";

const HorizontalCard = () => (
  <Card cardlayout="horizontalLong" bgColor="white">
    <div
      style={{
        display: "flex",
        width: "350px",
        alignItems: "center",
        justifyContent: "flex-end"
      }}
    >
      <div style={{ margin: "0px 20px" }}>
        <RoundBackground></RoundBackground>
      </div>

      <div>
        <Typography size="small" style={{ fontWeight: "bold", marginTop: "-6px" }}>
          Ux Designer At Team Facebook
        </Typography>
        <Typography
          size="paragraph"
          style={{ lineHeight: "16px", marginTop: "-10px" }}
        >
          Lorem ipsum dolor sit amet, imperdiet ut consectetuer molestie nulla
        </Typography>
      </div>
    </div>
  </Card>
);

export default HorizontalCard;
