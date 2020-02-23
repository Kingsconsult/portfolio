import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "../components/buttons";
import Typography from "../components/typography";
import { ThemeProvider } from "styled-components";
import WhatILove from "../molecules/whatilove";
import Line from "../components/lines"
const theme = {
  mode: "light"
};

export default {
  title: "WhatILove",
  component: WhatILove,
  decorators: [withA11y, withKnobs]
};

export const WhatILoveToDO = () => (
  <ThemeProvider theme={theme}>
     <div>
        <Typography
          size="xlarge"
          style={{ lineHeight: "0px", marginTop: "30px" }}
        >
          What Actually
        </Typography>
        <Typography size="xlarge" style={{ lineHeight: "80px" }}>
          I Love to Do
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
        <Typography
          size={"paragraph"}
          style={{ lineHeight: "20px", width: "350px", margin: "30px 0px" }}
        >
          Lorem ipsum dolor sit amet, aliquet vestibulum vel quam posuere
          iaculis porta, ut lorem sem suspendisse, proin faucibus eu posuere
          malesuada,
        </Typography>
      </div>
      <Button
        bgColor="blue"
        color="white"
        padding="small"
        style={{ width: "180px" }}
      >
        SEE MORE
      </Button>
  </ThemeProvider>
);
