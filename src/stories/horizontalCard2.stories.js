import React from 'react';
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import HorizontalCard2 from "../organisms/horizontalCard2"

const theme = {
  mode: "light"
};

export default {
  title: "Horizontal card 2",
  component: HorizontalCard2,
  decorators: [withA11y, withKnobs]
};

export const HorizontalCard = () => (
  <ThemeProvider theme={theme}>
    <HorizontalCard2></HorizontalCard2>
  </ThemeProvider>
);