import React from "react";
import { ThemeProvider } from "styled-components";
import Typography from "../../components/typography";
import Button from "../../components/buttons";

const theme = {
  mode: "light"
};

const HeroInfo = () => {
  return (
    <ThemeProvider theme={theme}>
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
          <Typography size={"paragraph"}>
            Lorem ipsum dolor sit amet, aliquet vestibulum vel quam posuere
            iaculis porta, ut lorem sem suspendisse, proin faucibus eu posuere
            malesuada, mattis hymenaeos arcu volutpat, tortor consectetuer est
            sollicitudin magnis scelerisque risus.
          </Typography>
        </div>
        <Button
          bgColor="blue"
          color="white"
          padding="small"
          style={{ width: "180px" }}
        >
          DOWNLOAD CV
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default HeroInfo;
