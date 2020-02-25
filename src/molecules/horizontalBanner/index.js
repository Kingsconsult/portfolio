import React from "react";
import Card from "../../components/cards";
import Typography from "../../components/typography";
import Button from "../../components/buttons";

const HorizontalBanner = () => (
  <Card
    style={{
      width: "75vw",
      height: "15vh",
      display: "flex",
      justifyContent: "space-around"
    }}
  >
    <div style={{ marginTop: "50px" }}>
      <Typography size="small">Have any project in mind? Say Hello at</Typography>
      <Typography size="xlarge" style={{ color: "blue" }}>
        kingsconsult001@gmail.com
      </Typography>
    </div>
    <Button
      bgColor="blue"
      color="white"
      padding="small"
      style={{ width: "180px", alignSelf: "center" }}
    >
      HIRE ME NOW
    </Button>
  </Card>
);

export default HorizontalBanner;
