import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import Colors from "../components/colors";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "color",
  component: Colors,
  decorators: [withA11y, withKnobs]
};


export const bigColor = () => (
  <ThemeProvider theme={theme}>
    <Colors color="blue" bigColor="black">
    </Colors>
  </ThemeProvider>
);


