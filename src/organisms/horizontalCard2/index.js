import React from "react";
import RoundBackground from "../../molecules/roundBackground";
import Typography from "../../components/typography";
import Card from "../../components/cards";

const HorizontalCard2 = () => (
  <Card cardlayout="horizontal" bgColor="white">
    <div
      style={{
        display: "flex",
        width: "350px",
        alignItems: "start",
        flexDirection: "column",
        marginLeft: "20px"
      }}
    >
      <div style={{ display: "flex", margin: "10px" }}>
        <RoundBackground style={{ marginRight: "30px" }}></RoundBackground>
        <div>
          <Typography
            size="paragraph"
            style={{ marginLeft: "10px", marginTop: "-10px" }}
          >
            Kingsley Okpara
          </Typography>
          <Typography
            size="paragraph"
            style={{ marginLeft: "10px", marginTop: "-30px", fontSize: "10px" }}
          >
            CTO, Decagon
          </Typography>
        </div>
      </div>

      <div style={{width: "200px"}}> 
        <Typography
          size="paragraph"
          style={{ lineHeight: "16px", marginTop: "-10px", fontSize: "10px", marginRight: "10px"}}
        >
          Lorem ipsum dolor sit amet, imperdiet ut consectetuer molestie nulla,
          imperdiet ut consectetuer molestie nulla
        </Typography>
      </div>
    </div>
  </Card>
);

export default HorizontalCard2;
