import React from "react";
import CircleDisplay from "../molecules/circleMolecule";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "Circle Display",
  component: CircleDisplay,
  decorators: [withA11y, withKnobs]
};

export const circleMolecule = () => (
  <ThemeProvider theme={theme}>
    <CircleDisplay></CircleDisplay>
  </ThemeProvider>
);
