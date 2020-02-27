import React from "react";
import Card from "../../components/cards";
import Typography from "../../components/typography";
import Button from "../../components/buttons";

const HorizontalBanner = () => (
  <Card
    style={{
      width: "65vw",
      display: "flex",
      justifyContent: "space-around",
      height: "180px"
    }}
  >
    <div style={{ paddingTop: "20px" }}>
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
