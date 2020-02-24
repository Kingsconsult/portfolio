import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "../components/buttons";
import Typography from "../components/typography";
import { ThemeProvider } from "styled-components";
import HeroInfo from "../molecules/heroinfo";
const theme = {
  mode: "light"
};

export default {
  title: "HeroInfo",
  component: HeroInfo,
  decorators: [withA11y, withKnobs]
};

export const HeroInformation = () => (
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
        <Typography size={"xlarge"} style={{ lineHeight: "65px" }}>
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
