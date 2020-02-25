import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import Typography from "../components/typography";
import { ThemeProvider } from "styled-components";
import Line from "../components/lines";
import CreativeWork from "../molecules/creativeworks";
const theme = {
  mode: "light"
};

export default {
  title: "Creative works",
  component: CreativeWork,
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
        <Typography size={"xlarge"} style={{ lineHeight: "50px" }}>
          Some of My
        </Typography>
        <Typography size={"xlarge"} style={{ lineHeight: "50px" }}>
          Creative Works
        </Typography>
        <Line
          linelayout="vertical"
          bgColor="blue"
          style={{ marginTop: "20px" }}
        ></Line>
        <Typography
          size={"paragraph"}
          style={{ lineHeight: "30px", marginTop: "20px" }}
        >
          Lorem ipsum dolor sit amet, aliquet vestibulum vel quam posuere
          iaculis porta, ut lorem sem suspendisse, proin faucibus eu posuere
          malesuada, mattis hymenaeos arcu volutpat, tortor consectetuer.
        </Typography>
      </div>
    </div>
  </ThemeProvider>
);
