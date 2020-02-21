import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import {Color} from "../components/colors";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "Color",
  component: Color,
  decorators: [withA11y, withKnobs]
};


export const bigColor = () => (
  <ThemeProvider theme={theme}>
    <Color color="white" >
    </Color>
  </ThemeProvider>
);


